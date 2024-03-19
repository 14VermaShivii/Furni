"use client"
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Link from 'next/link';
import { useFormik } from 'formik';
import { resetpasswordschema } from '@/app/schemas';

export default function resetpassword() {
    const initialValues = {
        newpassword: "",
        confirmpassword: ""
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: resetpasswordschema ,

            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
            },
        });


    return(
        <>
        <div className="wrapper">
        <div className="logo">
            <img src="./images/profile2.jpg" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Furni
        </div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <label htmlFor=" newpassword" className="input-label"></label>
                        <input
                            type=" newpassword"
                            autoComplete="off"
                            name=" newpassword"
                            id=" newpassword"
                            placeholder=" newpassword"
                            value={values. newpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched. newpassword ? (
                        <p className="form-error">{errors. newpassword}</p>
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
                    {errors.password && touched.confirmpassword? (
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