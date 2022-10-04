import React from 'react'
import s from './Button.module.css'

export default function Button(props) {

    var size = '', color;
    color = props.color == 'outline' ? s.outline : s.normal;
    if(props.size === 'sm') size = s.sm;
    var button = <button className={`${props.class} ${size} ${s.button} ${color}`}>{props.text}</button>;
    return button
}