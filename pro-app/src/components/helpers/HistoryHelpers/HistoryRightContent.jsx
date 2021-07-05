import React from 'react';
import style from './style/HistoryRightContent.module.css';

class HistoryRightContent extends React.Component{
    render(){
        return(
            <div className={style.container}>
                <h3>PROFIT</h3> <h4>DIGITAL</h4>
                <div className={style.halfCircle}></div>
                <div className={style.content}>It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
                English. Many desktop publishing packages and web page
                 editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                  will uncover many web sites still in their infancy.  </div>
            </div>
        );
    }
} export default HistoryRightContent;