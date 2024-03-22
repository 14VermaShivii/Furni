"use client"
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Link from 'next/link';
import { useFormik } from 'formik';
import { resetpasswordschema } from '@/app/schemas';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function resetpassword() {
    const router = useRouter()
    const initialValues = {
        newpassword: "",
        confirmpassword: ""
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: resetpasswordschema,

            onSubmit: (values, action) => {
                console.log(values);
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:7000/api/user/reset-password',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: values

                };
                axios.request(config)
                    .then((response) => {
                        toast.success(response.data.message, { position: "top-center", theme: "dark" });
                        router.push("/profile")
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
                        <span className="far fa-user"></span>
                        <label htmlFor=" newpassword" className="input-label"></label>
                        <input
                            type = "newpassword"
                            autoComplete="off"
                            name = "newpassword"
                            id = "newpassword"
                            placeholder = "newpassword"
                            value={values.newpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.newpassword ? (
                        <p className="form-error">{errors.newpassword}</p>
                    ) : null}



                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="confirmpassword"
                            autoComplete="off"
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="confirmpassword"
                            value={values.confirmpassword}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    {errors.password && touched.confirmpassword ? (
                        <p className="form-error">{errors.confirmpassword}</p>
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