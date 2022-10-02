import './RegisterCategory.module.css';
import {React,  useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { changeEmotion, deleteEmotion } from '../../store';
import styles from './RegisterCategory.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useState } from 'react';

function RegisterCategory({history}) {
    const navigate = useNavigate();
    let dispatch = useDispatch()
    let user = useSelector((state)=> { return state.user})
    let [btn, setBtn] = useState([false, false, false, false, false, false, false, false,false, false, false, false])
    let [emotion, setEmotion] = useState([
        '행복함',
        '편안함', 
        '설렘', 
        '슬픔', 
        '우울함', 
        '상실감', 
        '지루함', 
        '외로움', 
        '무기력', 
        '분노', 
        '짜증남', 
        '불편함' 
    ])
    let [ emotionre, setEmotionre] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',

    ]) 
    // useEffect(()=>{
    //             sessionStorage.setItem('emotion', JSON.stringify(emotionre))
    // },[setEmotionre])

    return (
        <>
        <div className={styles.category_title}><h2 className={styles.hug}>Hug</h2><h2>ging</h2></div>
        <div className={styles.order}>           
        </div>
        <div className={styles.writing}>
            <p className={styles.gomin}>고민</p><p className={styles.category}>category</p> 
        </div>
        <div id={styles.category_card}>
            {/* <button onClick={()=>{ 
                if ( btn[0] === false ) {
                    emotion.행복함 = "true"
                    setEmotion(emotion)

                }
                else{
                    emotion.행복함 = 'false'}

                setBtn(!btn[0])
                console.log(emotion)
            }}>행복함</button>
            <button onClick={()=>{  
                if ( btn === false ) {
                    emotion.편안함 = "true"
                    setEmotion(emotion)
                }
                else{
                    emotion.편안함 = 'false'
                    }
                console.log(emotion) 
                setBtn(!btn)}}
                          >편안함</button>

            <button onClick={()=>{  
                if ( btn === false ) {
                    emotion.설렘 = "true"
                    setEmotion(emotion)
                }
                else{
                    emotion.설렘 = 'false'
                    }
                console.log(emotion) 
                setBtn(!btn)}}
                          >설렘</button>
            <button onClick={()=>{  
                if ( btn === false ) {
                    emotion.슬픔 = "true"
                    setEmotion(emotion)
                }
                else{
                    emotion.슬픔 = 'false'
                    }
                console.log(emotion) 
                setBtn(!btn)}}
                          >슬픔</button>
            <button onClick={()=>{  
                if ( btn === false ) {
                    emotion.우울함 = "true"
                    setEmotion(emotion)
                }
                else{
                    emotion.우울함 = 'false'
                    }
                console.log(emotion) 
                setBtn(!btn)}}
                          >우울함</button>
            <button onClick={()=>{  
                if ( btn === false ) {
                    emotion.상실감 = "true"
                    setEmotion(emotion)
                }
                else{
                    emotion.상실감 = 'false'
                    }
                console.log(emotion) 
                setBtn(!btn)}}
                          >상실감</button>
            <button onClick={()=>{  
                if ( btn === false ) {
                    emotion.지루함 = "true"
                    setEmotion(emotion)
                }
                else{
                    emotion.지루함 = 'false'
                    }
                console.log(emotion) 
                setBtn(!btn)}}
                          >지루함</button> */}

                    { emotionre.map(function(a, i){
                        return (
                            <button onClick={()=>{
                                                                      
                                let copy = [...btn]
                                copy[i] = !btn[i]
                                setBtn(copy)
                                console.log(copy)      
                                        if ( copy[i] === true ){
                                                emotionre[i] =  emotion[i] 
                                                setEmotionre(emotionre)
                                                sessionStorage.setItem('emotion', JSON.stringify(emotionre))
                                            }
                                         else{
                                                emotionre[i] = ''
                                                setEmotionre(emotionre)
                                                localStorage.setItem("emotion",emotionre)
                                                sessionStorage.setItem('emotion', JSON.stringify(emotionre))
                                                }
                                            
                                            
                                            console.log(emotionre)
                                            }}
                                                >{emotion[i]}</button>
                        )
                                        })}
            <button>불안할 때</button>
            <button>불안할 때</button>
            <button>불안할 때</button>
            <button>불안할 때</button>
            <div></div>
        </div>
        <button className={styles.counselor_login_btn} onClick={()=>{navigate("/profile")}}>다음</button>
       </>
    )
}

export default RegisterCategory;