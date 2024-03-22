import React, {ChangeEvent, useState} from "react";
import { CallbackInput } from "../shared/form/CallbackInput";
import { CallbackSelect } from "../shared/form/CallbackSelect";
import { IOptions, SelectOptions } from "../shared/consts/SelectFormData";
import { SendForm } from "../features/form/SendCallbackForm";
import { AnimatePresence } from "framer-motion";








export const CallbackBody = (): React.JSX.Element => {

    const [building, setBuilding] = useState<string>("")
    const [square, setSquare] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [sendFormOpen, setSendFormOpen] = useState<boolean>(false)

    const handleSendForm = (): void => {
            setSendFormOpen(true);
            console.log(sendFormOpen)
        
        
    }

    const handleBuilding = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption: IOptions|undefined =  SelectOptions.find(item => (item.id === Number(event.target.value)))
        if (selectedOption){
            setBuilding(selectedOption.value);
        }
    }

    const handleName = (event: ChangeEvent<HTMLInputElement>): void =>{ 
        event.preventDefault();
        setName(event.target.value)
    }

    const handleCity = (event: ChangeEvent<HTMLInputElement>): void =>{ 
        event.preventDefault();
        setCity(event.target.value)
    }

    const handlePhone = (event: ChangeEvent<HTMLInputElement>): void =>{ 
        event.preventDefault();
        setPhone(event.target.value)
    }

    const handleSquare = (event: ChangeEvent<HTMLInputElement>): void =>{ 
        event.preventDefault();
        console.log(square);
        const value = event.target.value;
            setSquare(value)
    }

    return<><div className="container">
                <div className="row">
                    <CallbackSelect handleSelect={handleBuilding}/>
                    <CallbackInput id="city-form" inputType="text" placeholder="Город" onChange={handleCity} value={city}/>
                </div>

                <div className="row">
                    <CallbackInput id="square-form" inputType="number" placeholder="Площадь" onChange={handleSquare} value={square}/>
                    <CallbackInput id="phone-form" inputType="number" placeholder="Телефон" onChange={handlePhone} value={phone}/>
                    <CallbackInput id="user-form" inputType="text" placeholder="Ваше имя" onChange={handleName} value={name} />
                </div>

                <div className="row h">
                        <div className="col mt-3 w-100 d-flex justify-content-center">
                    <button onClick={handleSendForm} className="form-send" >Отправить заявку</button>
                </div>
                </div>
                
            </div>
            <AnimatePresence>
                {sendFormOpen && (<SendForm closeModal={()=>{setSendFormOpen(false)}} {...{building, square, city, phone, name}}/>)}
            </AnimatePresence>
            </>
}   