import { ChangeEvent } from "react";


interface InputForm{
    id: string,
    inputType: string, 
    placeholder: string,
    value: string|number,
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void 
}

export default InputForm;