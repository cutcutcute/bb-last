import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";

interface ControlProps{
    title: string,
    addHandleNavigatePath: string,
    getData?:()=>any[]
}

const AdminControl = (props: ControlProps): React.JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setData(props.getData?props.getData():[])
    })

    return <section className="container">
        <div className="row mb-3">
            <div className="col admin-control__title">{props.title}</div>
        </div>
        <div className="row mb-3">

            <div className="admin-control__settings-panel col d-flex justify-content-end align-items-center">
                <button onClick={()=>navigate(props.addHandleNavigatePath)} className="admin-control__settings-panel-button-add">Добавить</button>
            </div>
        </div>

        <div className="row mb-3">
            <div className="admin-control__content-layout col text-center">
                {data.length>0?(<div>Data</div>):(
                    <div>Записи отсутствуют</div>
                )}
            </div>  
        </div>
    </section>
}


export default AdminControl;