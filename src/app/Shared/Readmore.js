"use client"
import React, { useState} from "react";
import Link from "next/link";
export function Readmore(props) {
    const [hidden, Sethidden] = useState(true)
    const { text, maxelength } = props
    // useEffect(()=>{
    //     return function () {
    //         console.log("unmounted")
    //     }
    // })
    return(
    <>
        <p>
            {hidden ? `${text.substr(0, maxelength).trim()}...` : text >
                <Link href={"/search"}> Readmore</Link>
            }
        </p >
    </>
    )

}