// "use client"
// import React from "react"
// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css"
// import { useFormik } from "formik"
// import { createblogschema } from "@/app/schemas"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPlus } from "@fortawesome/free-solid-svg-icons"
// import profilepic from "../../../../public/images/girl.jpg"
// import Image from "next/image";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// export default function Search() {


//     const router = useRouter()
//     const [profile, setProfile] = useState(profilepic)
//     const handleInputChange = (event) => {
//         setProfile(URL.createObjectURL(event.target.files[0]));
//     }
//     const initialValues = {
//         Blogtitle: "",
//         Blogdescription: "",
//         category: ""

//     };



//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//         useFormik({
//             initialValues: initialValues,
//             validationSchema: createblogschema,

//             onSubmit: (values, action) => {
//                 console.log(values);
//                 let config = {                   //api
//                     method: 'post',
//                     maxBodyLength: Infinity,
//                     url: 'http://localhost:7000/api/Blog/create',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     data: values
//                 };
//                 // axios.request(config)
//                 //     .then((response) => {
//                 //         toast.success(response.data.message, { position: "top-center", theme: "dark" });
//                 //         localStorage.setItem('authtoke', response.data.token)
//                 //         // localStorage.getItem('authtoken')

//                 //         // NextResponse.redirect("profile")
//                 //         action.resetForm();
//                 //     })
//                 //     .catch((error) => {
//                 //         toast.error(error.response.data.message, { theme: "dark" });

//                 //     });


//             },
//         });


//     const searchParam = useSearchParams()
//     const blogid = searchParam.get('blogid');
//     // console.log(blogid)
//     const [result, setResult] = useState(null);
//     const [errormsg, setErrormsg] = useState()
//     const URL = process.env.BASE_URL
//     console.log(URL)

//     useEffect(() => {
//         const getEditblog = async () => {
//             const url = `${URL}blog/Blog/${blogid}`;
//             try {
//                 const response = await axios({
//                     method: 'get',
//                     url: url
//                 }).then((res) => {
//                     console.log(res.data)
//                     setResult(res.data)
//                     // setIsLoading(false)
//                 })

//             } catch (err) {
//                 setErrormsg(err?.response?.data?.message)
//                 console.log(err);
//                 // setIsLoading(false)
//             }

//         };
//         getEditblog();
//     }, []);


// return (
//     <>
//         < div className="container rounded bg-white mt-5 mb-5">
//             <div className="row">
//                 <div className="col-md-3 border-right">
//                     <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//                         <Image alt="" className="rounded-circle mt-5"
//                             width={100}
//                             height={100}
//                             src={profile} />
//                         <input type="file" className="d-none" onChange={handleInputChange}
//                             id="profileimage" />
//                         <label htmlFor="profileimage"><FontAwesomeIcon icon={faPlus} /></label>

//                         <span className="font-weight-bold">Shivii</span><span className="text-black-50">shivii@mail.com.my</span><span> </span></div>
//                 </div>
//                 <div className="col-md-5 border-right">
//                     <div className="p-3 py-5">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <h4 className="text-right"><b>Update Your Blog</b></h4>
//                         </div>


//                         <form className="row mt-3">
//                             <div className="col-md-12"><label className="labels"><h4><b>blogTitle
//                             </b></h4></label>
//                                 < input
//                                     type="text"
//                                     autoComplete="off"
//                                     className="form-control"
//                                     name="Blogtitle"
//                                     id="Blogtitle"
//                                     placeholder="Blogtitle"
//                                     value={values.Blogtitle}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </div>
//                             {errors.Blogtitle && touched.Blogtitle ? (
//                                 <p className="form-error">{errors.Blogtitle}</p>
//                             ) : null}


//                             <div className="row mt-3">
//                                 <div className="col-md-12"><label className="labels"><h4><b>blogDescription</b></h4></label>

//                                     <textarea
//                                         type="text"
//                                         autoComplete="off"
//                                         name="Blogdescription"
//                                         className="form-control"
//                                         id="Blogdescription"
//                                         placeholder="Blogdescription"
//                                         value={values.Blogdescription}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         rows={5}
//                                     ></textarea>
//                                 </div>
//                                 {errors.Blogdescription && touched.Blogdescription ? (
//                                     <p className="form-error">{errors.Blogdescription}</p>
//                                 ) : null}


//                                 <div className="row mt-3">
//                                     <div className="col-md-12"><label className="labels"><h4><b>category</b></h4></label>



//                                         <select className="form-select" name="category"
//                                             autoComplete="off"
//                                             id="category"
//                                             placeholder="category"
//                                             value={values.category}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}>
//                                             <option value="">select category</option>
//                                             <option selected={result.category === "fashion" ? true : false} value="fashion">Fashion</option>
//                                             <option selected={result.category === "food" ? true : false} value="food">Food</option>
//                                             <option selected={result.category === "travel" ? true : false} value="travel">Travel</option>
//                                             <option selected={result.category === "lifestyle" ? true : false} value="lifestyle">Lifestyle</option>
//                                             <option selected={result.category === "tech" ? true : false} value="tech">Tech</option>
//                                         </select>

//                                     </div>
//                                     {errors.category && touched.category ? (
//                                         <p className="form-error">{errors.category}</p>
//                                     ) : null}

//                                     <div className="mt-5 text-center">
//                                         <button className="btn btn-primary profile-button"
//                                             type="submit">Save Profile</button></div>
//                                 </div>
//                             </div>


//                         </form>
//                     </div>



//                 </div>
//             </div>

//         </div>

//     </>
// )
// }


"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import {  updateblogschema } from "@/app/schemas"
import { useFormik } from "formik";
import axios from "axios";
import { toast } from 'react-toastify'
import { useParams, useRouter, useSearchParams } from "next/navigation";
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

     console.log(blogid,"blogid")
    useEffect(() => {
        const url = `${URL}blog/Blog/${blogid}`
        
        const blog_id = async () => {
            try {
                const responseJson = await axios({
                    method: 'get',
                    url: url
                }).then((res) => {
                    setResult(res.data.blog)
                    console.log(res.data.blog,"state values")
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
    const initialValues = {
        blogTitle: "",
        blogDescription: "",
        category: "",
    };
  
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: result || initialValues,
            validationSchema:  updateblogschema,
            onSubmit: (values, action) => {
                console.log(values, 'form-values');
                console.log(process.env.BASEURL)
                const options = {
                    method: 'POST',
                    url: URL,
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
                                console.log(response.data);
                                toast.success(response.data.message, { theme: "dark", position: "top-center" })
                                localStorage.setItem('authToken', response.data.token)
                            })
                            .catch(function (error) {
                                console.error(error);
                                toast.error(error.response.data.message, { theme: "dark", position: "top-center" })
                            });
                        console.log(response)
                    } catch (error) {
                        console.log(errors)
                    }
                };
                updateData()
                action.resetForm();
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
                            <Image  width={100} height={100} className="rounded-circle
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
                                        type="name"
                                        autoComplete="off"
                                        name="blogTitle" id="blogTitle"
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
                                {/* <div className="row mt-2"> */}
                                <div className="col-md-12">
                                    <label className="labels">Enter Blog Description</label>
                                    <textarea className="form-control"
                                        type="blogDescription"
                                        rows={5}
                                        autoComplete="off"
                                        name="blogDescription"
                                        id="blogDescription"
                                        placeholder="Enter Blog Description"
                                        value={values.blogDescripton}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    ></textarea>
                                </div>
                                {/* </div> */}
                            </div>
                            {errors.blogDescripton && touched.blogDescripton ? (
                                <p className="form-error">{errors.blogDescripton}</p>
                            ) : null}
                            <div className="form-field d-flex align-items-center">
                                <div className="col-md-12">
                                    <label className="labels">Enter Blog category</label>
                                    <select className="form-select"
                                        name="category" 
                                        id="category"
                                        type="category"
                                        autoCompletevalues
                                        placeholder="category"
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                                        <option value="">Select Category</option>
                                        <option selected={values.category === "tech" ? true : false} 
                                        value="tech">Tech</option>
                                        <option selected={values.category === "travel" ? true : false} 
                                        value="travel">Travel</option>
                                        <option selected={values.category === "lifestyle" ? true : false} 
                                        value="lifestyle">Lifestyle</option>
                                        <option selected={values.category === "food" ? true : false} 
                                        value="food">Food</option>
                                        <option selected={values.category === "fashion" ? true : false} 
                                        value="fashion">Fashion</option>
                                    </select>
                                </div>
                            </div>
                            {errors.category && touched.category ? (
                                <p className="form-error">{errors.category}</p>
                            ) : null}
                            {/* <button type="submit"  className="btn mt-3">Create</button> */}
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button"
                             type="submit">Update</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
