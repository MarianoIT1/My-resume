import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Presentation from './Presentation';
import Whatido from './Whatido';
import Whoiam from './Whoiam';
import s from './Main.module.css';

export default function Main(props){
    var main = 
        <main className={s.main}>
            <Presentation />
            <Whoiam />
            <Whatido />
        </main>;
    return main
    
}