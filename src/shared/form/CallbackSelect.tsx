import React, { ChangeEvent } from "react";
import { SelectOptions } from "../consts/SelectFormData";



interface SelectProps{
    handleSelect: (event: ChangeEvent<HTMLSelectElement>)=>void
}

export const CallbackSelect = (props: SelectProps): React.JSX.Element => {

    return <div className="col m-3">
            <select onChange={props.handleSelect} className="form-select form-elem" aria-label="Выбрать тип постройки">
                {SelectOptions.map(item=>(
                    <option key={item.id} value={item.id}>{item.value}</option>
                ))}
            </select>
            </div>

}