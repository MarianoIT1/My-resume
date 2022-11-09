import React from 'react'
import s from './Header.module.css'
import Button from './Button.jsx'
import {} from '@fortawesome/fontawesome-svg-core'
import {useState} from 'react'
import BurgerMenu from './burger-menu'
import Zoom from 'react-reveal';
import ToggleTheme from './ToggleTheme'






export default function Header(props) {
    const [open, setOpen] = useState(false);
    function cambiarClass(head) {
        if(head.className === `react-reveal ${s.close}`) {
            head.className = `react-reveal ${s.open}`
        } else {
            head.className = `react-reveal ${s.close}`
        }
    }
    var header = 
        <Zoom top>
        <header className={s.close} id='header'>
            
            <div className={s.headerContainer}>
                <div className={s.logo}>
                    <a href="">
                        <div className={s.logoIcon}>MI</div>
                        <div className={s.logoName}><span>Mariano</span> Ibarra</div>
                    </a>
                </div>
                <ul className={s.navbar}>
                    <ToggleTheme key={1} cbid='cbOne' switchTheme={props.switchTheme} toggle={props.toggle}/>
                    <li><a href='#whoiam'>About me</a></li>
                    <li><a href='#whatido'>My Works</a></li>
                    <li><a href='mailto:marianoibarratesta@outlook.com'><Button text="Contact me!" class="buttonHead"/></a></li>
                </ul>
                <div className={s.toggles}>
                <ToggleTheme key={2} cbid='cbTwo' switchTheme={props.switchTheme} toggle={props.toggle}/>
                <div className={s.bars}><BurgerMenu change = {() => {setOpen(!open); var head = document.getElementById('header'); cambiarClass(head)}}/></div>
                </div>
            </div>
            <div>
                {open &&    
                    <ul className={s.navHide}>
                        <li><a href='#whoiam'>About me</a></li>
                        <li><a href='#whatido'>My Works</a></li>
                        <li><a href='mailto:marianoibarratesta@outlook.com'><Button text="Contact me!" size="sm" class="buttonHead"/></a></li>
                    </ul>
                }
            </div>
        </header>
        </Zoom>;

    return header;
}