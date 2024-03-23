import React, {useState} from "react";
import { AdminInputLayout } from "./AdminInputLayout";

interface IAddUser{
    title: string
}


const AdminAddUser = (props: IAddUser): React.JSX.Element => {

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    return <section className="container">
        <div className="row mb-3">
            <div className="col admin-control__title">{props.title}</div>
        </div>

        <div className="row">
            <div className="admin-control__add-user-menu col">
                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout placeholder="Логин" inputType="text"/>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout placeholder="Пароль" inputType="password"/>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout placeholder="Повторить Пароль" inputType="password"/>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout placeholder="Имя" inputType="text"/>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col">
                        <button disabled={isDisabled} className="admin-control__settings-panel-button-add">Зарегистрировать</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default AdminAddUser;