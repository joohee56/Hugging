import cProfile
import numpy as np

# 상담사 콜드스타트

def recom_coldstart_counselor(member_category):
    counsel_category = ['Depressed', 'Insomnia', 'Family', 'School', 'Company', 'Relationship', 'Love', 'SelfUnderstanding']
    loss = list(set(counsel_category) - {'Insomnia', 'School'})
    bored = list(set(counsel_category) - {'Depressed', 'Insomnia', 'Family', 'Relationship', 'Love'})
    alone = list(set(counsel_category) - {'Company', 'SelfUnderstanding'})
    lethargy = list(set(counsel_category) - {'Family', 'Relationship', 'Love'})
    angry = list(set(counsel_category) - {'SelfUnderstanding'})
    annoy = list(set(counsel_category) - {'School', 'Company', 'Relationship', 'Love'})
    inconvenience = list(set(counsel_category) - {'Depressed', 'Love', 'SelfUnderstanding'})
    
    # 고민 카테고리, 상담사 카테고리 연결
    recom_category = {'행복함':counsel_category, '편안함':counsel_category, '설렘':counsel_category, '슬픔':counsel_category, '우울함':counsel_category,
    '상실감':loss, '지루함':bored, '외로움':alone, '무기력':lethargy, '분노':angry, '짜증남':annoy, '불편함':inconvenience}
    # print(recom_category)

    