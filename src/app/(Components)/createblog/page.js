"use client"
import React from "react"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"

import { useFormik } from "formik"
import { createblogschema } from "@/app/schemas"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import profilepic from "../../../../public/images/girl.jpg"
import Image from "next/image";



export default function createblog() {
    const [profile, setProfile] = useState(profilepic)
    const handleInputChange = (event) => {
        setProfile(URL.createObjectURL(event.target.files[0]));
    }


    const initialValues = {
        Blogtitle: "",
        Blogdescription: "",
        category: ""

    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: createblogschema,

            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
            },
        });
    return (
        <>

            < div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <Image className="rounded-circle mt-5"
                                width={100}
                                height={100}
                                src={profile} />
                            <input type="file" className="d-none" onChange={handleInputChange}
                                id="profileimage" />
                            <label htmlFor="profileimage"><FontAwesomeIcon icon={faPlus} /></label>

                            <span className="font-weight-bold">Shivii</span><span className="text-black-50">shivii@mail.com.my</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right"><h2>Create Your Blog</h2></h4>
                            </div>


                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels"><h4><b>blogTitle
                                </b></h4></label>
                                    < input
                                        type="text"
                                        autoComplete="off"
                                        className="form-control"
                                        name="Blogtitle"
                                        id="Blogtitle"
                                        placeholder="Blogtitle"
                                        value={values.Blogtitle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.Blogtitle && touched.Blogtitle ? (
                                    <p className="form-error">{errors.Blogtitle}</p>
                                ) : null}


                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels"><h4><b>blogDescription</b></h4></label>

                                        <input
                                            type="text"
                                            autoComplete="off"
                                            name="Blogdescription"
                                            className="form-control"
                                            id="Blogdescription"
                                            placeholder="Blogdescription"
                                            value={values.Blogdescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {errors.Blogdescription && touched.Blogdescription ? (
                                        <p className="form-error">{errors.Blogdescription}</p>
                                    ) : null}


                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels"><h4><b>category</b></h4></label>

                                            <div class="dropdown">
                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>

                                            </div>


                                            <input
                                                type="text"
                                                autoComplete="off"
                                                name="category"
                                                className="form-control"
                                                id="category"
                                                placeholder="category"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={handleBlur}

                                            />

                                        </div>
                                        {errors.category && touched.category ? (
                                            <p className="form-error">{errors.category}</p>
                                        ) : null}

                                        <div className="mt-5 text-center">
                                            <button className="btn btn-primary profile-button"
                                                type="button">Save Profile</button></div>
                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>
                </div>

            </div>
        
        </>
    )

}