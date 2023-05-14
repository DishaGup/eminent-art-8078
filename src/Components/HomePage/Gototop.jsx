
import React from "react";
import {FaArrowUp} from "react-icons/fa"
import { useEffect } from "react";
import { useState } from "react";
import styles from './gototop.module.css'

const Gototop=()=>{
    const [isvisible, setisvisible]= useState(false);
    const gototopfun=()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    const scrollfunmain=()=>{
       
        let heigthHidden= 250;
        const finalscroll= document.body.scrollTop || document.documentElement.scrollTop
        if(finalscroll> heigthHidden)
        {
              setisvisible(true)
        }
        else{
            setisvisible(false)
        }
    }

    useEffect(()=>{
window.addEventListener("scroll", scrollfunmain)
return () => window.removeEventListener("scroll", scrollfunmain);
    }, [])

    return (
        <>
       {isvisible && (
        <div className={styles.footer_top_btn_part} onClick={gototopfun}>
        <FaArrowUp className={styles.footer_top_btn_icon} />
              </div>
             
       )}
       </>
    )
}

;


export default Gototop