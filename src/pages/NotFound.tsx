import React from "react";
import { Header } from "../widgets/bars/header";
import { useNavigate } from "react-router-dom";

export const PageNotFound = (): React.JSX.Element => {

    const navigate = useNavigate();

    return <>
        <Header color="#000" backgroundColor="#fff"/>
        <section className="not-found-area d-flex justify-content-center align-items-center">
            <div className="not-found-area__wrapper">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col not-found-area__wrapper-title text-center">Страница не найдена</div>
                    </div>
                    <div className="row" style={{marginBottom:"4rem"}}>
                        <div className="col not-found-area__wrapper-text text-center">Страницы по указанному адресу не существует. Вернуться на главную страницу?</div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button onClick={()=> navigate("/", {replace:true})} className="not-found-area__wrapper-button">Вернуться на главную</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>

}