import { useState } from "react"
import { useEffect } from "react"
import s from "./Indicator.module.css"

const Indicator = () => {

    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            !visible && setVisible(true)
        },3000)
    }, [])

    const handleScroll = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = 1 - (winScroll / height) * 3;
        setOpacity(scrolled < 0 ? 0 : scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (<div className={visible ? s.box : s.boxHidden}>
                <span style={{borderColor: `rgba(1, 87, 155, ${opacity})`}}></span>
                <span style={{borderColor: `rgba(1, 87, 155, ${opacity})`}}></span>
                <span style={{borderColor: `rgba(1, 87, 155, ${opacity})`}}></span>
            </div>)
}

export default Indicator