import React from 'react';
import style from './style/HistoryLeftContent.module.css'
class HistoryLeftContent extends React.Component{

    render(){
        return(
     <div className={style.leftBlock}>
        <div className={style.textContainer}>
         <div className={style.solidHistory}>
             HISTORY 
         </div>
         <div className={style.borderHistory}>
             HISTORY 
         </div>
         </div> 
         <div className={style.contentBox}>
            <div className ={style.contentImage}/>
            <div className = {style.contentText}> 
            Lorem Ipsum is 
simply dummy text of the
 printing and typesetting 
industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when 
an unknown printer took a galley of type and scrambled it to make
 a type specimen book. 
It has survived not only five centuries, but also the leap 
into electronic typesetting, remaining essentially 
unchanged.</div>
         </div>
         <div className={style.leftBoxBottom}>
             <div className={style.bottomWall}>
                        <h3>OUR PROJECTS</h3>
             </div>
             <div className={style.projectsContainer}>
                <span href="#">PROFIT SCHOOL </span>
                <span href="#">BUSSINES SCHOOL  </span>
                <span href="#">PROFIT DIGITAL TEAM </span>
             </div>
         </div>
     </div>

        );
    }
} export default HistoryLeftContent;