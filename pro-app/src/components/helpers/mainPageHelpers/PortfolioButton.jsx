import React from "react";
import style from './styles/PortfolioButton.module.css'
class PortfolioButton extends React.Component{

        render(){
            return(
                <div className={style.Container}>
                  <div className={style.halfCircleBorder} />
                    <div className={style.halfCircleBorderSolid} >
                    </div>
                    <h3>portfolio</h3>
                <div className={style.square}/>
                <div className={style.square2}/>
                <div className={style.wall}/>
              
            
                </div>
            )
            
        }
}
export default PortfolioButton;