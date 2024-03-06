"use client"
import Link from "next/link"
import React, { useState } from 'react';

// import Image from "next/image";
// import styles from "./page.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Header() {
    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
      }
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md " arial-label="Furni navigation bar">

                <div className="container">
                    <Link className="navbar-brand" href={"/"}>Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">

                            <li className="nav-item active">
                                <Link className="nav-link" href={"/"}>Home</Link></li>
                            <li><Link className="nav-link" href={"/blog"}>Blog</Link></li>
                            <li><Link className="nav-link" href={"/fashion"}>Fashion</Link></li>
                            <li><Link className="nav-link" href={"/lifestyle"}>Lifestyle</Link></li>
                            <li><Link className="nav-link" href={"/food"}>Food</Link></li>
                            <li><Link className="nav-link" href={"/tech"}>Tech</Link></li>
                            <li><Link className="nav-link" href={"/travel"}>Travel</Link></li>
                            <li><Link className="nav-link" href={"/contact"}>Contact</Link></li>
                            <li><Link className="nav-link" href={"/profile"}>Profile</Link></li>

                        </ul>


                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><Link className="nav-link" href={"/login"}><img src="images/user.svg" /></Link></li>

                            <li><button className="nav-link" onClick={toggle}><FontAwesomeIcon
                             icon={faMagnifyingGlass} /></button>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>


            {isOpened && (
                <div className="boxContent">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9">
                                <input type="text" placeholder="Search.." />
                            </div>
                            <div className="col-md-3">
                               
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </>
    )

}