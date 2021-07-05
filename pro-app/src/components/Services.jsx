import React from 'react';
import Carusel from './helpers/ServicesHelpers/Carusel';
import WebDesign from './helpers/ServicesHelpers/WebDesign';
import style from './style/Services.module.css'
import Branding from './helpers/ServicesHelpers/Branding';

class Services extends React.Component {
    secPageController = (index) => {
        let mobilePage = document.getElementById("mobile");
        let brand = document.getElementById("brand");
        let inPageIndex = 1;
        let pageIndex = index;
        let isDisabled = false;
        brand.addEventListener('wheel', (e) => {
            if (!isDisabled) {
                if (e.deltaY > 0 && pageIndex === 2 && inPageIndex === 1) {
                    mobilePage.style.transform = "translateY(0vw)";
                    inPageIndex++;
                    pageIndex++;
                    console.log(" past katta " + "pageIndex " + pageIndex + "inPage " + inPageIndex);
                } else if (e.deltaY < 0 && inPageIndex === 2) {
                    mobilePage.style.transform = "translateY(100vw)";
                    pageIndex--;
                    inPageIndex--;
                    console.log(" past kichik " + "pageIndex " + pageIndex + "inPage " + inPageIndex);
                }
            }

            setTimeout(() => {
                isDisabled = false
            }, 1800);
        })

    }

    componentDidMount() {
        let elem = document.getElementById("as");
        let count = elem.childElementCount;

        let pageIndex = 1;
        let size = 100;
        let isDisabled = false;
        document.getElementById("as").addEventListener('wheel', (e) => {

            if (!isDisabled) {
                if ((e.deltaY > 0 && count + 1 > pageIndex && pageIndex !== 2)) {
                    isDisabled = true;
                    if (pageIndex > 2) {
                        pageIndex--;
                    }
                    elem.style.transform = "translateX(-" + size * pageIndex + "vw)";
                    pageIndex++;
                } else if (e.deltaY < 0 && pageIndex !== 1 && pageIndex !==2) {
                    isDisabled = true;
                    elem.style.transform = "translateX(" + (size - (pageIndex * size)) + "vw)";
                    pageIndex--;
                }   else if(pageIndex ===2 ){
                    this.secPageController(pageIndex);
                }


            }

            setTimeout(() => {
                isDisabled = false
            }, 1800);

        })
    }

    render() {
        return (

            <div id="nonScroll" className={style.servicesContainer}>
                <div id="as" className={style.serviceRuller}>
                    <div className={style.webDesign}>
                        <Carusel/>
                        <WebDesign/>
                    </div>
                    <Branding/>
                    <div className={style.serviceSMM}>

                    </div>


                </div>

            </div>
        );
    }
}

export default Services;
