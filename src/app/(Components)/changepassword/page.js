"use client"
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useFormik } from 'formik';
import { changepasswordschema } from '@/app/schemas';
import Link from 'next/link';
import {toast} from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function changepassword() {
    const router = useRouter()
    const initialValues = {
        oldpassword: "",
        newpassword: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: changepasswordschema,


            onSubmit: (values, action) => {
                console.log(values);
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:7000/api/user/change-password',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: values
                };
        
                axios.request(config)
                .then((response) => {
                    toast.success(response.data.message,{position:"top-center",theme:"dark"});
                    router.push("/profile")
                    // NextResponse.redirect("profile")
                    action.resetForm();
                })
                .catch((error) => {
                        toast.error(error.response.data.message,{theme: "dark"});
                        // const returnUrl = '/profile';
                        // router.push(returnUrl);
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
                        <label htmlFor="oldpassword" className="input-label"></label>
                        <input
                            type="oldpassword"
                            autoComplete="off"
                            name="oldpassword"
                            id="oldpassword"
                            placeholder="oldpassword"
                            value={values.oldpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.oldpassword && touched.oldpassword ? (
                        <p className="form-error">{errors.oldpassword}</p>
                    ) : null}


                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="newpassword"
                            autoComplete="off"
                            name="newpassword"
                            id="newpassword"
                            placeholder="newPassword"
                            value={values.newpassword}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    {errors.newpassword && touched.newpassword ? (
                        <p className="form-error">{errors.newpassword}</p>
                    ) : null}




                    <button className="btn mt-3">Login</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/forgotpassword"}>Forget password?</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>

        </>
    )

}