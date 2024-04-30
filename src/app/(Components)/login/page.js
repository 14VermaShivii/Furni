"use client"
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Link from 'next/link';
import { useFormik } from "formik"
import { loginschema } from '@/app/schemas';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation'; //redirect page

export default function login() {
    const URL = process.env.BASE_URL
    const router = useRouter() //redirect page
    // const notify = () => toast("Wow so easy!");
    const initialValues = {
        email: "",
        password: ""
    };
    //validation
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: loginschema,

            onSubmit: (values, action) => {
                console.log(values);
                let config = {                   //api
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${URL}auth/login`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: values
                };


                axios.request(config)
                    .then((response) => {
                        toast.success(response.data.message, { position: "top-center", theme: "dark" });
                        localStorage.setItem('authToken', response.data.token)      //token
                        // localStorage.getItem('authtoken')
                        router.push("/profile")         //redirect page
                        // NextResponse.redirect("profile")
                        action.resetForm();
                    })
                    .catch((error) => {
                        toast.error(error.response.data.message, { theme: "dark" });
                        const returnUrl = '/profile';
                        router.push(returnUrl);
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
                        <span className="fas fa-key"></span>
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


                    <button type='submit' className="btn mt-3">Login</button>
                    {/* <button onClick={notify}>Notify!</button> */}
                </form>
                <div className="text-center fs-6">
                    <Link href={"/forgotpassword"}>Forget password?</Link> or 
                    <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>

        </>
    )

}