import React from 'react'
import s from './Button.module.css'

export default function Button(props) {
    var estilo = '';
    if(props.size === 'sm') estilo = s.sm;
    var button = <button className={`${props.class} ${estilo} ${s.button}`}>{props.text}</button>;
    return button
}