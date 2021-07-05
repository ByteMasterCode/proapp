import React from 'react';
import style from './style/History.module.css';
import HistoryLeftContent from './helpers/HistoryHelpers/HistoryLeftContent'
import HistoryRightContent from './helpers/HistoryHelpers/HistoryRightContent';
function History() {

    return(
            <div className={style.PageHistory}>
                <HistoryRightContent/>
                  <HistoryLeftContent/>
                  
            </div>
    );
}
export default History;
