import React from "react";
import { AnimateTitleText } from "../../features/textAnimation";
import { ContactIcons } from "../../shared/ContactIcons";
import SmallLogoSvg from "../../shared/logo/smallLogo.svg";

export const Footer = (): React.JSX.Element => {
    return <section className="footer-element d-flex justify-content-center">
        <div className="container">
            <div className="row footer-main-row">
            
                <div className="col =">
                    <div className="row justify-content-center footer-title"><strong className="text-center">
                    <AnimateTitleText staggerChildren={.042} wordWrapper={false} text="Социальные сети:" once={false}  delay={.5}/> </strong></div>
                    <div className="row footer-links justify-content-center">
                        <div className="footer-links__icons m-3">
                            <ContactIcons/>
                        </div>
                    </div>
                </div>

                <address className="col ">
                        <div className="row  justify-content-center footer-title footer-title__contacts">
                            <strong className="text-center">
                            <AnimateTitleText staggerChildren={.042} wordWrapper={false} text="Связаться с нами:" once={false}  delay={.2}/> </strong></div>
                        <div className="row justify-content-center mt-3">+79829437868</div>
                        <div className="row justify-content-center">+79091832345</div>
                        <div className="row justify-content-center">Тюмень/Москва/Сочи</div>
                        <div className="row justify-content-center">BB.design.studio@yandex.ru</div>
                </address>

                <div className="col d-flex justify-content-center align-items-center w-100">
                    <div className="footer-element__logo-wrapper">
                        <div className="ratio ratio-1x1">
                            <img src={SmallLogoSvg} alt="логотип"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
}