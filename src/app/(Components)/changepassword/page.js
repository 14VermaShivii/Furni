"use client"
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useFormik } from 'formik';
import { changepasswordschema } from '@/app/schemas';
import Link from 'next/link';
export default function changepassword() {
    const initialValues = {
        email: "",
        password: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: changepasswordschema,


            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
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




                    <button className="btn mt-3">Login</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/forgotpassword"}>Forget password?</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>

        </>
    )

}