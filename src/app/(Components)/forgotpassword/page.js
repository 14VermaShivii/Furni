"use client"
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css"
import { useFormik } from 'formik';
import { forgotpasswordschema } from '@/app/schemas';

export default function forgotpassword() {
    const initialValues = {
        email: ""
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: initialValues,
        validationSchema: forgotpasswordschema,

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
                <form  onSubmit={handleSubmit} className="p-3 mt-3">
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
                    
                    <button className="btn mt-3">Submit</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/forgotpassword"}>Forget password?</Link> or 
                    <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>

        </>
    )

}