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
import axios from "axios";
import { useRouter } from "next/navigation";



export default function createblog() {
    const router=useRouter()
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
                let config = {                   //api
                    method: 'post',
                    maxBodyLength: Infinity,
                    url:  `${URL}blog/${create}`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: values
                };
                axios.request(config)
                .then((response) => {
                    toast.success(response.data.message,{position:"top-center",theme:"dark"});
                    localStorage.setItem('authtoke',response.data.token)
                    // localStorage.getItem('authtoken')
                
                    // NextResponse.redirect("profile")
                    action.resetForm();
                })
                .catch((error) => {
                        toast.error(error.response.data.message,{theme: "dark"});
                       
                    });

               
            },
        });
    return (
        <>

            < div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <Image alt="" className="rounded-circle mt-5"
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
                                <h4 className="text-right"><b>Create Your Blog</b></h4>
                            </div>


                            <form className="row mt-3">
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

                                        <textarea
                                            type="text"
                                            autoComplete="off"
                                            name="Blogdescription"
                                            className="form-control"
                                            id="Blogdescription"
                                            placeholder="Blogdescription"
                                            value={values.Blogdescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            rows={5}
                                        ></textarea>
                                    </div>
                                    {errors.Blogdescription && touched.Blogdescription ? (
                                        <p className="form-error">{errors.Blogdescription}</p>
                                    ) : null}


                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels"><h4><b>category</b></h4></label>



                                            <select className="form-select" name="category"
                                                autoComplete="off"
                                                id="category"
                                                placeholder="category"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                                <option value="">select category</option>
                                                <option value="fashion">Fashion</option>
                                                <option value="food">Food</option>
                                                <option value="travel">Travel</option>
                                                <option value="lifestyle">Lifestyle</option>
                                                <option value="tech">Tech</option>
                                            </select>

                                        </div>
                                        {errors.category && touched.category ? (
                                            <p className="form-error">{errors.category}</p>
                                        ) : null}

                                        <div className="mt-5 text-center">
                                            <button className="btn btn-primary profile-button"
                                                type="submit">Save Profile</button></div>
                                    </div>
                                </div>


                            </form>
                        </div>



                    </div>
                </div>

            </div>

        </>
    )

}