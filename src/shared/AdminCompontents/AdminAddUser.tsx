import React, {ChangeEvent, useState} from "react";
import { AdminInputLayout } from "./AdminInputLayout";

interface IAddUser{
    title: string
}


const AdminAddUser = (props: IAddUser): React.JSX.Element => {

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordRepeat, setPasswordRepeat] = useState<string>("")
    const [name, setName] = useState<string>("")

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    return <section className="container">
        <div className="row mb-3">
            <div className="col admin-control__title">{props.title}</div>
        </div>

        <div className="row">
            <div className="admin-control__add-user-menu col">
                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout value={login} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setLogin(e.target.value)}} placeholder="Логин" inputType="text"/>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout value={password} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}} placeholder="Пароль" inputType="password"/>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout value={passwordRepeat} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setPasswordRepeat(e.target.value)}} placeholder="Повторить Пароль" inputType="password"/>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col">
                        <AdminInputLayout value={name} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}} placeholder="Имя" inputType="text"/>
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