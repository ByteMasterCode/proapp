import React from 'react';
import style from './style/Branding.module.css';
import MobilePage from './MobilePage';
class Branding extends React.Component{
        
    componentDidMount(){

     
       
    }
    render(){
        return(
            <div id="brand" className={style.branding}>
                        <MobilePage/>

       </div>
        )
    }
} export default Branding;