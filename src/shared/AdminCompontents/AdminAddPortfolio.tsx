import React, { useState } from "react";
import { AdminInputLayout } from "./AdminInputLayout";
import { FileUploader } from "./FileUploader";


interface IAddPortfolio{
    title: string
}

const AdminAddPortfolio = (props: IAddPortfolio): React.JSX.Element => {

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    return <section className="container">
            <div className="row mb-3">
                <div className="col admin-control__title">{props.title}</div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="projectTitle" className="m-3"> Введите название<br/>
                        <AdminInputLayout name="projectTitle" placeholder="Название" inputType="text"/>
                    </label>
                </div>
            </div>
            

            <div className="row">
                <div className="col">
                    <label htmlFor="projectDescription" className="m-3"> Введите описание<br/>
                        <AdminInputLayout isTextArea={true} name="projectDescription" placeholder="Описание" inputType="text"/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectPlan" className="m-3">Планировка<br/>
                        <AdminInputLayout name="projectPlan" placeholder="Название" inputType="file"/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectPlan" className="m-3">Изображения<br/><br/>
                        <FileUploader/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col m-3">
                <button disabled={isDisabled} className="admin-control__settings-panel-button-add">Сохранить</button>
                </div>
            </div>

        </section>
}

export default AdminAddPortfolio;