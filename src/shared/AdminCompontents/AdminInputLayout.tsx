import React from "react";


interface AdminInput{
    placeholder:string,
    inputType: string,
    name?: string,
    isTextArea?: boolean

}

export const AdminInputLayout = (props: AdminInput): React.JSX.Element => {

    if (props.isTextArea){
        return <textarea name={props.name} placeholder={props.placeholder} rows={8} cols={60} className="admin-input"/>
    }

    return <input name={props.name} type={props.inputType} placeholder={props.placeholder} className="admin-input"/>
}