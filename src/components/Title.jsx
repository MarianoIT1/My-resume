import React from 'react'
import s from './Title.module.css'

export default function Title(props) {
    var title =
        <div id={props.id} className={s.blockTitle}>
            <div className={s.title}>
                <h2 className={s.h2}>{props.value}</h2>
            </div>
        </div>
    return title
}
