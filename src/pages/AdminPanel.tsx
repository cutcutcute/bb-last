import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";


const AdminPanel = (): React.JSX.Element => {

    return <section className="admin-body d-flex justify-content-start align-items-center">
        <nav className="admin-body__sidebar">
            <div className="admin-body__sidebar-item"><NavLink className="custom-link w-100" to="portfolio">Проекты</NavLink></div>
            <div className="admin-body__sidebar-item"><NavLink className="custom-link" to="users">Пользователи</NavLink></div>
            <div className="admin-body__sidebar-item"><NavLink className="custom-link" to="new-user">Добавить Пользователя</NavLink></div>
            <div className="admin-body__sidebar-item"><NavLink className="custom-link" to="/">На Сайт</NavLink></div>
            <div className="admin-body__sidebar-item"><NavLink className="custom-link" to="/logout">Выйти</NavLink></div>  
        </nav>
        <main className="admin-body__content">
            <Outlet/>
        </main>
    </section>
}

export default AdminPanel;