import React from 'react';
import style from './style/Carusel.module.css'

class Carusel extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                    content:[
                        {id:1, Title: "Landing page", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                        {id:2, Title: "Bussines", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                        {id:3, Title: "Ecommerce", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                        {id:4, Title: "Enterprice", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}
                    ]
            }
        }
         
     
        
    render(){
  
            var caruselTitle = this.state.content.map(function(con,index){
                return <div id={index} key={index} onClick={()=>{
                    var active = index;
                       document.getElementById("carusell").style.transform="translateX(-"+ 41.667*active + "vw)";
                        

                }} className={style.caruselTitle}>{con.Title}</div> 
           
                });
        var content = this.state.content.map(function(con,index,){
        return <div id="caruselSize" key={index} className={style.contentList}>
                        <div className={style.listTitle}>{con.Title}</div>
                        <div className={style.listTitleId}>0{con.id}</div>
                        <div className={style.listContent}>{con.text}</div> 
        </div> 
   
        });
        return(
            <div className={style.container}>
                <div className={style.carusel}>
                    <div className={style.titleContainer}>
                    {caruselTitle}
                    </div>
                    <div id="nonScroll" className={style.contentContainer}>
                        <div id="carusell" className={style.ruller}>
                           {content}
                        </div>
                  
                    </div>
              
                </div>
            </div>
        )
    }
}
 export default Carusel;