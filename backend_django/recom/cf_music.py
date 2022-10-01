import re
import numpy as np
import pandas as pd
from scipy.sparse.linalg import svds

def cf_music(member_id, music_info, music_review):
    # 불필요한 컬럼 제거
    music_info = preceed_music_info(music_info)

    # 리뷰 데이터 2차원 DataFrame으로 변경
    user_music_rating = music_review.pivot(values = 'score', index = 'member_id', columns = 'music_id').fillna(0)

    # DataFrame -> Array
    matrix = user_music_rating.values

    # 음악에 대한 회원의 리뷰 평균 구하기
    user_rating_mean = np.mean(matrix, axis = 1)

    # 리뷰 평균 점수에서 빼기
    matrix_user_mean = matrix - user_rating_mean.reshape(-1,1)

    
    U, sigma, Vt = svds(matrix_user_mean, k = 5)
    sigma = np.diag(sigma)
    svd_user_music_predicted_ratings = np.dot(np.dot(U, sigma), Vt) + user_rating_mean.reshape(-1,1)
    df_svd_preds = pd.DataFrame(svd_user_music_predicted_ratings, columns = user_music_rating.columns)
    result = recommend_music(df_svd_preds, 1, music_info, music_review)
    return result

def recommend_music(df_svd_preds, user_id, df_musics, df_music_reviews, num_recommendations = 2):
    
    # 인덱스이므로 id-1
    user_rows = user_id - 1

    # 최종적으로 만든 pred_df에서 사용자 index에 따라 음악 데이터 정렬 -> 음악 평점이 높은 순으로 정렬
    sorted_user_predictions = df_svd_preds.iloc[user_rows].sort_values(ascending = False)
    
    # 원본 평점 데이터에서 user_id 에 해당하는 데이터를 뽑아냄
    user_data = df_music_reviews[df_music_reviews.member_id == user_rows]
    
    # 위에서 뽑은 user_data와 원본 음악 데이터를 합친다
    user_history = user_data.merge(df_musics, on = 'music_id').sort_values(['score'], ascending = False)
    
    # 원본 음악 데이터에서 사용자가 들은 음악을 제외한 데이터 추출
    recommendations = df_musics[~df_musics['music_id'].isin(user_history['music_id'])]
    # 사용자의 음악 평점이 높은 순서대로 정렬된 데이터와 위 recommendation을 합친다.
    recommendations = recommendations.merge(pd.DataFrame(sorted_user_predictions).reset_index(), on = 'music_id')
    # 컬럼 이름 바꾸고 정렬해서 return
    recommendations = recommendations.rename(columns = { 0: "Predictions"}).sort_values("Predictions", ascending = False)
    return recommendations

def preceed_music_info(df):
    df.drop('hits', axis = 1, inplace = True)
    df.drop('music_url', axis = 1, inplace = True)
    df.drop('thumbnail_url', axis = 1, inplace = True)
    df.drop('tag', axis = 1, inplace = True)
    df.drop('type', axis = 1, inplace = True)
    df.drop('category', axis = 1, inplace = True)
    return df