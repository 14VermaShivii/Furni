"use client"
import Link from "next/link"
import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios"
// import Image from "next/image";
// import styles from "./page.module.css";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import Myblogs from "../(Components)/profile/myblogs/page";
import myblogs from "../(Components)/profile/myblogs/page";
import profile from "../(Components)/profile/page";




export default function Header() {
    const [Islogin, setIslogin] = useState(false)

    const pathname = usePathname()
    // console.log(pathname)
    const [isOpened, setIsOpened] = useState(false);
    // const [isdisabled, setDisabled] = useState(true)
    const URL=process.env.BASE_URL
    const[errormsg,setErrormsg]=useState()
    const [enable,setEnable]=useState(true)
    const[value, setValue] = useState()
const search=async()=>{
    console.log("search working")
    const url=`${URL}blog/search?q=${value}`
    try{
        const response = await axios({
            method:'get',
            url:url
        }).then((res)=>{
            console.log(res)
        });
    }catch(error){
        setErrormsg(error)
        console.log(error)
    }
};
    const handleChange=(event)=>{
        // console.log(event.target.value)
        const len=event.target.value
        // console.log(event.target.value)
        if(len.length>=2){
            setValue(len)
            setEnable(false)
        }
        else{
            setEnable(true)
            setValue(len)
        }
        // console.log(value,"Actual value")
    }

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    };

    useEffect(() => {
        const getToken = localStorage.getItem("authToken");

        // console.log(getToken)
        if (getToken) {
            setIslogin(true)
        }
        else {
            setIslogin(false)
        }
    });
    //logout
    const router = useRouter()
    function logout() {
        localStorage.removeItem("authToken")
        router.push("/")
    }
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md " arial-label="Furni navigation
             bar">

                <div className="container-fluid">
                    <Link className="navbar-brand" href={"/"}>Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">

                            <li className={pathname === "/" ? "active" : " "}>
                                <Link className="nav-link" href={"/"}>Home</Link></li>
                            <li className={pathname === "/blog" ? "active" : " "}>
                                <Link className="nav-link" href={"/blogs"}>Blogs</Link></li>

                            {/* <li className={pathname === "/details" ? "active" : " "}>
                                <Link className="nav-link" href={"/details"}>Details</Link></li> */}

                            <li className={pathname === "/fashion" ? "active" : " "}>
                                <Link className="nav-link" href={"/fashion"}>Fashion</Link></li>
                            <li className={pathname === "/lifestyle" ? "active" : " "}>
                                <Link className="nav-link" href={"/lifestyle"}>Lifestyle</Link></li>
                            <li className={pathname === "/food" ? "active" : " "}>
                                <Link className="nav-link" href={"/food"}>Food</Link></li>
                            <li className={pathname === "/tech" ? "active" : " "}>
                                <Link className="nav-link" href={"/tech"}>Tech</Link></li>
                            <li className={pathname === "/travel" ? "active" : " "}>
                                <Link className="nav-link" href={"/travel"}>Travel</Link></li>
                            <li className={pathname === "/contact" ? "active" : " "}>
                                <Link className="nav-link" href={"/contact"}>Contact</Link></li>
                            <li className={pathname === "/profile" ? "active" : " "}>
                                <Link className="nav-link" href={"/profile"}>Profile</Link></li>

                        </ul>
                        <ul className="custom-navbar-cta navbar-nav  mb-2 mb-md-0 ms-5">
                            {/* <li><Link className="nav-link" href={"/login"}>
                                <img src="./images/user.svg" /></Link></li> */}
                            {!Islogin ? <li><Link className="nav-link" href={"/login"}>
                                <img src="./images/user.svg" /></Link></li> : <div class="dropdown">
                                <a className="btn btn-secondary dropdown-toggle"
                                    href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Shivani
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item" href="/profile/myblogs">My blogs</Link></li>
                                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>

                                </ul>
                            </div>
                            }


                            <li><button className="nav-link" onClick={toggle}><FontAwesomeIcon
                                icon={faMagnifyingGlass} /></button>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>


            {isOpened && (
                <div className="">
                    <div className="container-fluid">
                        <div className="container search">
                            <div className="row ">
                                <div className="col-md-10">

                                    <input type="search" onChange={handleChange} className="img-fluid form-control rounded-pill rounded-circle" placeholder="Search.." aria-label="Search" onKeyDown={e=>{
                                        if(e.key==="Enter"){
                                            router.push(`/search/?q=${decodeURIComponent(value)}`)
                                        }
                                    }} />
                                </div>
                                <div className="col-md-1">
                                   <button onClick={search} disabled={enable} className="onclick btn btn-primary">search</button>
                                </div>
                                <div className="col-md-1">
                                    <button className="nav-link" onClick={toggle}><FontAwesomeIcon
                                        icon={faXmark} /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </>
    )

}
