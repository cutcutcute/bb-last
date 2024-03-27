import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Network from "../../features/Network";



const PortfolioInfo = (): React.JSX.Element => {

    const {key} = useParams();
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<string>("");
    const [plan, setPlan] = useState<string>("");
    const [images, setImages] = useState<string[]>([])
    const [location, setLocation] = useState<string>("");
    const [year, setYear] = useState<string>("")

    const navigate = useNavigate()

    useEffect(()=>{

        
        const response = Network.getProject(Number(key));
    
        response.then((res)=>{
            console.log(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setCategory(res.data.category);
            setPlan(res.data.plan);
            setImages(res.data.images);
            setYear(res.data.year);
            setLocation(res.data.location);
        })
        .catch((error)=>{
            navigate("/not-found");
        })
    }, [])

    return <section className="container">
        <div className="row m-3">
            <div className="col admin-portfolio__title">{title}</div>
        </div>

        <div className="row m-3">
        <label>Тип: </label><div className="col m-3 admin-portfolio__type">{category}</div>
        </div>

        <div className="row m-3">
            <label>Описание: </label><div className="col m-3 admin-portfolio__description">{description}</div>
        </div>

        <div className="row m-3">
            <label>Локация: </label><div className="col m-3 admin-portfolio__description">{location}</div>
        </div>

        <div className="row m-3">
            <label>Год: </label><div className="col m-3 admin-portfolio__description">{year}</div>
        </div>

        <div className="row m-3">
            <label>План: </label><div className="col m-3 admin-portfolio__plan ratio ratio-16x9">
                <img  src={`data:image/jpeg;base64,${plan}`} alt="Планировка"/>
            </div>
        </div>

  
            <div className="row m-3">
            <label>Изображения: </label>
            {images.map((image, index)=>(
            <div key={index} className="col m-3 admin-portfolio__plan ratio ratio-16x9">
                <img  src={`data:image/jpeg;base64,${image}`} alt="Изображение"/>
            </div>
            ))}
        </div>

    </section>
}

export default PortfolioInfo;