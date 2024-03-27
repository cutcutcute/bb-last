import React, { SetStateAction, Suspense, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import Network from "../../features/Network";
import { MainLoading } from "../../widgets/loading/mainLoading";


interface ControlProps{
    title: string,
    addHandleNavigatePath: string,
    getData?:()=>Promise<any[]>
}

const AdminControl = (props: ControlProps): React.JSX.Element => {

    const [data, setData] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            const loadedData = props.getData ? await props.getData() : [];
            setData(loadedData);
            console.log(loadedData);
        };

        fetchData();
    }, [])

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
            <Suspense fallback={<MainLoading/>}>
            <div className="admin-control__content-layout col text-center">
                    {data.length > 0 ? (
                        <div>{data.map(item=>
                            (<div  key={item.id} className="row portfolio-element justify-content-start align-items-center">
                                <div className="col text-start">{item.title}</div>
                                <div className="col text-start">{item.category}</div>
                                <div className="col text-end">
                                    <button onClick={()=>{Network.deleteProject(item.id)}} className="portfolio-element__button">Удалить</button>
                                </div>
                                <div className="col text-end">
                                    <button  onClick={()=>{navigate(`/admin/panel/portfolio/${item.id}`)}} className="portfolio-element__button">Подробнее</button>
                                </div>
                            </div>))}</div>
                    ) : (
                        <div>Записи отсутствуют</div>
                    )}
                    <div className="row mt-3 justif-content-center">
                        <div onClick={()=>{window.location.reload()}} className="col portfolio-element__refresh">Обновить Страницу</div>
                    </div>
            </div>  
            </Suspense>
        </div>
    </section>
}


export default AdminControl;