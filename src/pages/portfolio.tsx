import React from "react";
import { Header } from "../widgets/bars/header";
import ImageLivingSpaced from "../app/images/portfolio/living-spaced (2).jpg";
import ImagePublicAreas from "../app/images/portfolio/public-areas.jpg";
import { ImageWrapper } from "../shared/ImageWrapper";
import { useParallax } from "react-scroll-parallax";
import { Footer } from "../widgets/bars/footer";
import { ImageDescription } from "../shared/ImageDescription";

export const Portfolio = (): React.JSX.Element => {




    return <>
        <Header color="#000" backgroundColor="#fff"/>
        <section className="portfolio-main-section">
            <section className="portfolio-photo__wrapper">
                <ImageDescription title="Общественные помещения" text="Какой-то текст вкратце рассказываешь о разделе в портфолио 'Общественные помещения' "/>
                <ImageWrapper source={ImagePublicAreas} alt="" ratioSize="16x9"/>
            </section>

            <section  className="portfolio-photo__wrapper">
                <ImageDescription  title="Жилые пространства" text="Какой то текст вкратце рассказываешь о разделе в портфолио 'Жилые пространства'"/>
                <ImageWrapper source={ImageLivingSpaced} alt="" ratioSize="16x9"/>
            </section>
        </section>
        <Footer/>
    </>

}