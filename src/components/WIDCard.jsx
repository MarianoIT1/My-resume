import React from "react";
import s from "./WIDCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faBars, faChevronUp} from '@fortawesome/free-solid-svg-icons'

export default function WIDCard(props) {
    var widcard =
    <div className={s.card}>
        <div className={s.icondiv}>{props.icon}</div>
        <div className={s.textblock}>
            <h4 className={s.title}>{props.title}</h4>
            <p className={s.text}>{props.text}</p>
        </div>    
     </div>;
    return widcard
}