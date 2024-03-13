
import React from "react"

interface PriceInterfase{
    id: string,
    text: string,
    price: string,
    content: React.JSX.Element
}



const PlaningRules = (): React.JSX.Element=>{
    return (<p className="sidebar-text">*срок до 20 рабочих дней<br className="sidebar-text"/><br className="sidebar-text"/>
        <ul>
            <li className="sidebar-text"> Выезд на замеры, фотофиксация</li>
            <li className="sidebar-text"> Утверждение технического задания</li>
            <li className="sidebar-text"> Составление обмерного плана</li>
            <li className="sidebar-text"> Разработка планировочного решения (1-3 варианта)</li>
            <li className="sidebar-text"> 3D презентация с видео обзором перемещения внутри пространства</li>

        </ul>        
    </p>)
}



const PersonallyProject = (): React.JSX.Element => {
    return (<p className="sidebar-text">*срок до 3 х месяцев<br className="sidebar-text"/><br className="sidebar-text"/>
        <ul>
            <li className="sidebar-text"> Разработка планировочного решения (1-3 варианта)</li>
            <li className="sidebar-text"> Разработка дизайна в виде фотореалистичных 3D визуализаций по каждому помещению</li>
            <li className="sidebar-text"> Разработка пакета чертежей</li>
            <li className="sidebar-text"> Комплектация (спецификации по отделочным вариантам, по сантехническому, осветительному и электроустановочному оборудованию, а также по предметам мебели)</li>

        </ul>        
    </p>)
}

const AuthorSupervision = (): React.JSX.Element => {
    return (<p className="sidebar-text">Авторский надзор (4 обязательных выезда в месяц)</p>)
}


//Объект с ценниками
export const PriceList: PriceInterfase[] = [{

        id:"1",
        text:"Планировачное решение",
        price: "990р",
        content: <PlaningRules/>


    }, 

    {
        id:"2",
        text: "Индивидуальный проект интерьера",
        price: "2490 р",
        content: <PersonallyProject/>
    },

    {
        id:"3",
        text: "Авторский надзор",
        price: "30 000 р",
        content: <AuthorSupervision/>
    }

]




export default PriceInterfase;