import React from "react";
import s from "./ToggleTheme.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

export default function ToggleTheme(props) {
    var toggle = 
        <div className={s.toggle}>
            <input onChange={() => {props.switchTheme()} } defaultChecked={props.toggle} type="checkbox" className={s.checkbox} id={props.cbid}/>
            <label htmlFor={props.cbid} className={s.label}>
                <FontAwesomeIcon icon={faMoon} className={s.faMoon}/>
                <FontAwesomeIcon icon={faSun} className={s.faSun}/>
                <div className={s.ball}>
                </div>
            </label>
        </div>;
    return toggle
}