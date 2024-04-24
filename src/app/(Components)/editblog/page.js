"use client"
import React from "react";
import { useState, useEffect } from "react";
// import Testimonal from "@/app/Shared/Testimonal";
import axios from "axios";
// import Blogdata from "@/app/Shared/Blogdata";
import { useSearchParams } from "next/navigation";

export default function Search() {
    const searchParam = useSearchParams()
    const blogid = searchParam.get('blogid');
    console.log(blogid)
    const [result, setResult] = useState(null);
    const [errormsg, setErrormsg] = useState()
    const URL = process.env.BASE_URL
    console.log(URL)
    useEffect(() => {
        const getEditblog = async () => {

            const url = `${URL}blog/Blog/${blogid}`;
            try {
                const response = await axios({
                    method: 'patch',
                    url: url
                }).then((res) => {
                    console.log(res.data.blogid)
                    setResult(res.data.blogid)
                    // setIsLoading(false)
                })

            } catch (err) {
                setErrormsg(err.response.data.message)
                console.log(err);
                // setIsLoading(false)
            }

        };
        getEditblog();
    }, []);

    return (
        <>
      

        </>
    )
}