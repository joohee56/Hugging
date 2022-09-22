import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# 협업 필터링 아이템 기반
def cf_item_based_counselor(member_id, counselor_id, counselor_data, review_data):
    # 데이터 전처리
    counselor_data = dropCounselor(counselor_data)
    review_data = dropReview(review_data)
    
    #두 데이터 하나로 합치기
    user_counselor_rating = pd.merge(review_data, counselor_data, left_on='counselor', right_on='id', how='inner')

    # 상담사 리뷰 작성 회원으로 x,y 설정하고, 데이터는 평점으로 설정 후 빈칸 0으로 채우기
    counselor_user_rating = user_counselor_rating.pivot_table('score', index = 'counselor_id', columns='member_id')
    counselor_user_rating.fillna(0, inplace = True)

    # 코사인 유사도 구하고 데이터 프레임으로 변경
    item_based_collabor = cosine_similarity(counselor_user_rating)
    item_based_collabor = pd.DataFrame(data = item_based_collabor, index = counselor_user_rating.index, columns = counselor_user_rating.index)
    
    # 최근 좋아했던 상담사와 비슷한 성향의 상담사 추천
    # 태그를 활용하지 않아서 활용해야할듯
    return item_based_collabor['counselor_id'].sort_values(ascending=False)[1:4]

# 상담사 데이터 프레임 필요없는 데이터 삭제
def dropCounselor(df): 
    df.drop('email', axis = 1, inplace = True)
    df.drop('password', axis = 1, inplace = True)
    df.drop('name', axis = 1, inplace = True)
    df.drop('avaliable_time', axis = 1, inplace = True)
    df.drop('certificate', axis = 1, inplace = True)
    df.drop('career', axis = 1, inplace = True)
    df.drop('explanation', axis = 1, inplace = True)
    df.drop('gender', axis = 1, inplace = True)
    return df

# 상담사 리뷰 데이터 프레임에 필요없는 데이터 삭제 및 변수 타입 변경
def dropReview(df): 
    df.drop('content', axis = 1, inplace = True)
    df.drop('reg_date', axis = 1, inplace = True)
    df.drop('id', axis = 1, inplace = True)
    df['counselor'] = df['counselor'].astype(int)
    df['member'] = df['member'].astype(int)
    return df