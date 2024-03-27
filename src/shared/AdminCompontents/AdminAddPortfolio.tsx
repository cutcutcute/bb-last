import React, { ChangeEvent, useEffect, useState } from "react";
import { AdminInputLayout } from "./AdminInputLayout";
import { FileUploader } from "./FileUploader";
import axios from "axios";
import Network from "../../features/Network";



interface IAddPortfolio{
    title: string
}

const AdminAddPortfolio = (props: IAddPortfolio): React.JSX.Element => {



    const [title, setTitle] = useState<string>("")
    const [location, setLocation] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [description, setDescription] = useState<string>("")
    const [projectType, setProjectType] = useState<number>(1)
    const [planImage, setPlanImage] = useState<File|null>(null)
    const [images, setImages] = useState<File[]>([])

    const [isDisabled, setIsDisabled] = useState<boolean>(true)


    useEffect(()=>{
        console.log("useEffect")
        if (title.length>0&&description.length>0 && projectType && planImage && images.length>0 && location.length>0 && year.length > 0){
            setIsDisabled(false);
            console.log("Включаю ")
        }
        else {
            console.log("Выключаю ")
            setIsDisabled(true);
        }
    }, [title, location , year , description , projectType , planImage , images])

    const handleSendPost = async () => {
        console.log(`title: ${title} description ${description} projectType: ${projectType} planImage ${planImage} images: ${images}`)
        const dataForm = new FormData()
        dataForm.append("title", title);
        dataForm.append("description", description);
        dataForm.append("projectType", String(projectType));
        dataForm.append("year", year);
        dataForm.append("location", location);
        if (planImage)
            dataForm.append("planImage", planImage, planImage.name)
        if (images.length>0){
            images.forEach((image, index)=>{
                dataForm.append("images", image);
            })
            
        }

        Network.addProject(dataForm);


    }

    const handleTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setYear(e.target.value)
    }

    const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLocation(e.target.value);
    }

    const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const handleProjectType = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setProjectType(Number(e.target.value))
    }

    const handlePlanImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files)
            setPlanImage(e.target.files[0])
    }

    return <section className="container">
            <div className="row mb-3">
                <div className="col admin-control__title">{props.title}</div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="projectTitle" className="m-3"> Введите название<br/>
                        <AdminInputLayout name="projectTitle" value={title} onChange={handleTitle} placeholder="Название" inputType="text"/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectLocation" className="m-3"> Введите Локацию<br/>
                        <AdminInputLayout name="projectLocation" value={location} onChange={handleLocation} placeholder="Локация" inputType="text"/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectYear" className="m-3"> Укажите год<br/>
                        <AdminInputLayout name="projectYear" value={year} onChange={handleYear} placeholder="Год" inputType="number"/>
                    </label>
                </div>
            </div>
            

            <div className="row">
                <div className="col">
                    <label htmlFor="projectDescription" className="m-3"> Введите описание<br/>
                       
                        <textarea name="projectDescription" placeholder="Описание" rows={8} cols={60} value={description} onChange={handleDescription} className="admin-input"/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectType"  className="m-3">  Тип <br/>
                        <select onChange={handleProjectType} name="projectType">
                            <option value={1}>Жилые пространства</option>
                            <option value={2}>Общественные помещения</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectPlan" className="m-3">Планировка<br/>
                        <AdminInputLayout onChange={handlePlanImage} name="projectPlan" placeholder="Название" inputType="file"/>
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="projectPlan" className="m-3">Изображения<br/><br/>
                        <FileUploader files={images} addFiles={setImages} />
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="col m-3">
                <button onClick={handleSendPost} disabled={isDisabled} className="admin-control__settings-panel-button-add">Сохранить</button>
                </div>
            </div>

        </section>
}

export default AdminAddPortfolio;