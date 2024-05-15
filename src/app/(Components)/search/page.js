"use client"
import React from "react";
import { useState, useEffect } from "react";
import Testimonal from "@/app/Shared/Testimonal";
import axios from "axios";
import Blogdata from "@/app/Shared/Blogdata";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParam=useSearchParams()
const search=searchParam.get('q');
console.log(search)
    const [result, setResult] = useState(null);
    const [errormsg, setErrormsg] = useState()
    const URL = process.env.BASE_URL
    console.log(URL)
    useEffect(() => {
        const getProfileList = async () => {

            const url = `${URL}blog/search?q=${encodeURIComponent(search)}`;
            try {
                const response = await axios({
                    method: 'get',
                    url: url
                })  .then((res) => {
                    console.log(res.data.blogs)
                    setResult(res.data.blogs)
                    // setIsLoading(false)
                })

            } catch (err) {
                setErrormsg(err.response.data.message)
                console.error(errormsg);
                // setIsLoading(false)
            }

        };
        getProfileList();
    }, []);

    return (
        <>
            <Blogdata Blogdata={result} errordata={errormsg} />
            <Testimonal />

        </>
    );
}