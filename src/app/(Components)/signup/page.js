"use client"
import React from "react"
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css"
import { useFormik } from 'formik';
import { signupschema } from '@/app/schemas';
import axios from "axios";
import { toast } from "react-toastify"; 
import { useRouter } from "next/navigation";

export default function signup() {
    const URL = process.env.BASE_URL
    const router =useRouter()
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: signupschema,

            onSubmit: (values, action) => {
                console.log(values);
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `{URL}/auth/register`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: values
                };
        
        
                axios.request(config)
                .then((response) => {
                    toast.success(response.data.message,{position:"top-center",theme:"dark"});
                    
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
            <div className="wrapper">
                <div className="logo">
                    <img src="./images/profile2.jpg" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Furni
                </div>
                <form onSubmit={handleSubmit} className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <label htmlFor="firstname" className="input-label"></label>
                        <input
                            type="firstname"
                            autoComplete="off"
                            name="firstname"
                            id="firstname"
                            placeholder="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.firstname && touched.firstname ? (
                        <p className="form-error">{errors.firstname}</p>
                    ) : null}

                    <div className="form-field d-flex align-items-center">
                        <label htmlFor="lastname" className="input-label"></label>
                        <input
                            type="lastname"
                            autoComplete="off"
                            name="lastname"
                            id="lastname"
                            placeholder="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.lastname && touched.lastname ? (
                        <p className="form-error">{errors.lastname}</p>
                    ) : null}


                    <div className="form-field d-flex align-items-center">
                        <label htmlFor="email" className="input-label"></label>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            placeholder="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                    ) : null}

                    <div className="form-field d-flex align-items-center">
                        <input type="password"
                            autoComplete="off"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                    ) : null}



                    <button className="btn mt-3">Login</button>
                </form >
                <div className="text-center fs-6">
                    <Link href={"/forgotpassword"}>Forget password?</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div >

        </>
    )

}