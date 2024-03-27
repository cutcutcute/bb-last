import React, { ChangeEvent, ChangeEventHandler } from "react";


interface AdminInput{
    placeholder:string,
    inputType: string,
    name?: string,
    value?:string ,
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void


}

export const AdminInputLayout = (props: AdminInput): React.JSX.Element => {


    return <input name={props.name} type={props.inputType} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="admin-input"/>
}