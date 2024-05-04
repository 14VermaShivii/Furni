"use client"
import { useState } from "react";
import Link from "next/link";

export default function Readmore(props) {
    const [hidden, Sethidden] = useState(true)
    const { text, maxlength,blogid} = props

    return (
        <>
            <p>
                {hidden ? `${text?.substr(0, maxlength).trim()}...` : text}
                <Link href={`/blogs/${blogid}`}> Readmore</Link>

            </p >
        </>
    )

}