import React from "react";
import { Header } from "../widgets/bars/header";
import { Footer } from "../widgets/bars/footer";




const Contacts = (): React.JSX.Element => {

    return <>
        <Header color="#000" backgroundColor="#fff"/>
        <section className="contacts-area d-flex flex-direction-column align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <Footer isReverse={true}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Contacts;