"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { updateblogschema } from "@/app/schemas"
import { useFormik } from "formik";
import axios from "axios";
import { toast } from 'react-toastify'
import {  useRouter, useSearchParams } from "next/navigation";
// import profilepic from "../../../../public/images/girl.jpg"
// import Link from "next/link";

export default function UpdateBlog() {
    const [result, setResult] = useState();
    const [errormsg, setErrormsg] = useState()
    const URL = process.env.BASE_URL
    const router = useRouter()
    const profileimg = require("../../../../public/images/girl.jpg")
    const [profile, setprofile] = useState(profileimg)
    function handleChange2(e) {
        console.log(e.target.files[0]);
        setprofile(URL.createObjectURL(e.target.files[0]));
    }
    const searchParam = useSearchParams()
    const blogid = searchParam.get('blogid');
    // const url = `${URL}/Blog${encodeURIComponent(blogid)}`

    // console.log(blogid, "blogid")
    useEffect(() => {
        const url = `${URL}blog/Blog/${blogid}`

        const blog_id = async () => {
            try {
                const responseJson = await axios({
                    method: 'get',
                    url: url
                }).then((res) => {
                    setResult(res.data.blog)
                    console.log(res.data.blog, "state values")
                    //  console.log(res)
                })
            } catch (err) {
                setErrormsg(err?.response?.data?.message)
                console.log(err)
            }
        };
        blog_id();
    }, []);
    // console.log(result?.blogTitle, 'state')
    const initialValue = {
        blogTitle: "",
        blogDescription: "",
        category: "",
    };

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: result || initialValue,
            enableReinitialize: true,
            validationSchema: updateblogschema,

            onSubmit: (values, action) => {
                // console.log(values, 'form-values');
                // console.log(process.env.BASEURL)
                const options = {
                    method: 'PATCH',
                    url: `${URL}blog/Blog/${blogid}`,
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: values
                };
                const updateData = async () => {
                    try {
                        const response = await axios
                            .request(options)
                            .then(function (response) {
                                // console.log(response.data);
                                toast.success(response.data.message, { theme: "dark", position: "top-center" })
                                router.push('/profile/myblogs')
                            })
                            .catch(function (error) {
                                console.error(error);
                                toast.error(error.response.data.message, { theme: "dark", position: "top-center" })
                            });
                            // console.log(response.data)
                        } catch (error) {
                        console.log(errors)
                    }
                };
                updateData()
                // action.resetForm();
            },
        }
        );
    return (
        <>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-center align-items-center h-100 ">
                </div>
            </div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-5 ">
                            <Image width={100} height={100} className="rounded-circle
                             profile-image" src={profile} alt="Profile" />
                            <label htmlFor="files" className="btn">Select Blog Profile</label>
                            <input id="files" className="hidden rounded-circle profile-image"
                                type="file" onChange={handleChange2} />

                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Update Your Blog</h4>
                            </div>
                            <form onSubmit={handleSubmit} className="p-3 mt-3">
                                <div className="form-field d-flex align-items-center">
                                    {/* <div className="row mt-2"> */}
                                    <div className="col-md-12">
                                        <label className="labels">Enter Blog Title</label>
                                        <input className="form-control"
                                            type="text"
                                            name="blogTitle"
                                            id="blogTitle"
                                            placeholder="Enter Blog Title"
                                            value={values.blogTitle}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {/* </div> */}
                                </div>
                                {errors.blogTitle && touched.blogTitle ? (
                                    <p className="form-error">{errors.blogTitle}</p>
                                ) : null}
                                <div className="form-field d-flex align-items-center">
                                   
                                    <div className="col-md-12">
                                        <label className="labels">Enter Blog Description</label>
                                        <textarea className="form-control"
                                            rows={5}
                                            type="text"
                                            name="blogDescription"
                                            id="blogDescription"
                                            placeholder="Enter Blog Description"
                                            value={values.blogDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        ></textarea>
                                    </div>
                                    {/* </div> */}
                                </div>
                                {errors.blogDescription && touched.blogDescription ? (
                                    <p className="form-error">{errors.blogDescription}</p>
                                ) : null}
                                <div className="form-field d-flex align-items-center">
                                    <div className="col-md-12">
                                        <label className="labels">Enter Blog category</label>
                                        <select className="form-select"
                                            value={values.category}
                                            name="category"
                                            id="category"
                                            placeholder="category"
                                            onChange={handleChange}
                                            onBlur={handleBlur}>
                                            <option value="">Select Category</option>
                                            <option value={"tech"}>Tech</option>
                                            <option value={"travel"}>Travel</option>
                                            <option value={"lifestyle"}>Lifestyle</option>
                                            <option value={"food"}>Food</option>
                                            <option value={"fashion"}>Fashion</option>
                                        </select>


                                    </div>
                                </div>
                                {errors.category && touched.category ? (
                                    <p className="form-error">{errors.category}</p>
                                ) : null}

                                <div className="mt-5 text-center">
                                    <button className="btn btn-primary profile-button" type="submit">Update</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
