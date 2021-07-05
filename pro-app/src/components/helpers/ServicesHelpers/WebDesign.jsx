import React from 'react';
import style from './style/WebDesign.module.css'
class WebDesign extends React.Component{
    render(){
        return(
            <div className={style.container}>
                <div className={style.leftPart}>
                    <div className={style.boxBorder}/>
                    
                    <div className={style.designerImage}/>
                 
                    <div  className={style.discription}> 
                    lorem Ipsum is simply dummy text of the
            printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s,  </div>
                <div className={style.horizontalLine}/>
                <div className={style.verticalLine}/> 
                <div className={style.circleContainer}>
                        <div className={style.circleBorder}/>
                        <div className={style.circleSolid}/>
                    </div> 
                    </div>
                    <div className={style.webDesignText}>WEB <span>Design</span></div>
            </div>
        );
    }
} export default WebDesign;