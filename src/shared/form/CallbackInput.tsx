import React from "react";
import InputForm from "./InputInterface";



export const CallbackInput = (props: InputForm): React.JSX.Element => {

    return <div className="col m-3" id={props.id}>
                <input type={props.inputType} className="form-control form-elem" id="exampleFormControlInput1" 
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.onChange}
                    />
            </div>
}