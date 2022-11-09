import React from 'react';
import Presentation from './Presentation';
import Whatido from './Whatido';
import Whoiam from './Whoiam';
import s from './Main.module.css';
import Indicator from './Indicator';



export default function Main(){
    

    var main = 
        <main className={s.main}>
            <Indicator />
            <Presentation />
            <Whoiam />
            <Whatido />
        </main>;
    return main
    
}