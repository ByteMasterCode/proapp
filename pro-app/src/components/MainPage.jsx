import React from 'react';
import style from './style/MainPage.module.css';
import anime from 'animejs/lib/anime.es.js';
import EFFECT from 'vanta/dist/vanta.topology.min';
import PortFolioButton from './helpers/mainPageHelpers/PortfolioButton';
import p5 from 'p5';
import ButtonPlay from './helpers/mainPageHelpers/ButtonPlay';
import { get } from 'animejs';
class  MainPage extends React.Component{
    constructor() {
        super()
        this.vantaRef = React.createRef()
      }
      ScrollPages = ()=>{
              const  elem = document.getElementById("HorizantalBox");
              let pageSize = document.getElementById("main");
              let elementCount = elem.childElementCount;
              let isDisabled= false;
              let isTime = false;
              let pageIndex = 1;
              document.getElementById("nonScroll").addEventListener('mouseenter',()=>{
                isDisabled= true;
                    console.log('enter');
              });
              document.getElementById("nonScroll").addEventListener('mouseleave',()=>{
                isDisabled= false;
                console.log('out')
              });

              elem.addEventListener('wheel', (e)=>{ 
                if(!isDisabled){  
                  if(!isTime){
                  if((e.deltaY > 0 && elementCount > pageIndex) ){
                    isTime = true;
                    document.getElementById("HorizantalBox").style.transform = "translateY(-"+pageSize.clientHeight * pageIndex +"px)";
                    console.log(pageIndex);
                    pageIndex++;    
                    }else if (e.deltaY < 0 && pageIndex !==1 ) {
                      isTime = true;
                      pageIndex--;
                      document.getElementById("HorizantalBox").style.transform = "translateY("+ (pageSize.clientHeight - (pageSize.clientHeight * pageIndex))+"px)";
                      console.log(pageIndex);
                    }

                  }
                  
                }
                setTimeout(()=>{isTime=false},1800);
               
            })
      }
      componentDidMount() {
        this.vantaEffect = EFFECT({
          el: this.vantaRef.current,
             p5: p5,
             mouseControls: true,
             touchControls: true,
             gyroControls: false,
             minHeight: 200.00,
             minWidth: 200.00,
             scale: 1.00,
             scaleMobile: 1.00,
             color: 0xffffff,
             backgroundColor: 0x0
        });
        this.ScrollPages();
      
      }
      componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy();
       
      }
    render(){
    return(
        
        <div id="main" className={style.Page} ref={this.vantaRef}>
           <PortFolioButton/> 
            <div className={style.profitContainer}>
                <ButtonPlay/>
                 <div className={style.Circle}></div>   
                 <div className={style.Circle2}></div>
                <div className={style.profitText} ><h1>P R O F I T</h1></div>
                <div className={style.profitText2} ><h1>D i g i t a l</h1></div>
                </div>
                 </div>
        
    );
}

}
export default MainPage;