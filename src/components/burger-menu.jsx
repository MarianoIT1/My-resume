import React from 'react';
import s from './burger-menu.module.css';

export default function BurgerMenu(props){
    var burgerMenu = 
    <div>
        <input tabIndex="-1" onChange={props.change} type="checkbox" className={s.burgerInput} id={s.burgerInput}/>
        <label for={s.burgerInput} className={s.burgerLabel}>
            <span className={s.burgerLine}></span>
        </label>
    </div>;
    return burgerMenu
}