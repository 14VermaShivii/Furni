"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import profilepic from "../../../../public/images/girl.jpg"
import Image from "next/image";
import timelinepic from "../../../../public/images/blogging1.jpg"
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { editblogschema } from '@/app/schemas'
import { useFormik } from "formik";

export default function Editprofile() {
    const searchParam = useSearchParams()
    const userId = searchParam.get('userId');
    const [result, setResult] = useState(null);
    const [errormsg, setErrormsg] = useState()
    const [profile, setProfile] = useState(profilepic)
    const [data, setData] = useState()
    const handleInputChange = (event) => {
        setProfile(URL.createObjectURL(event.target.files[0]));
    }
    const [timeline, setTimeline] = useState(timelinepic)
    const timelineChange = (event) => {
        setTimeline(URL.createObjectURL(event.target.files[0]));
    }
    const initialValues ={
        firstname:"",
        lastname:"",
        about:"",
        dob:"",
        email:""
    };
    //******************** */
    const URL = process.env.BASE_URL
 const url=`${URL}user/profile/${userId}`
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: result || initialValues,
        validationSchema: editblogschema,

        onSubmit: (values, action) => {
            console.log(values);
            let config = {                   //api
                method: 'get',
                maxBodyLength: Infinity,
                // url:  `${URL}user/profile/660559c9fe171a65fdeda840`,
                
                headers: {
                    'Content-Type': 'application/json'
  
                },
                data: values
            };
            axios.request(config)
            .then((response) => {
                toast.success(response?.data?.message,{position:"top-center",theme:"dark"});
                // localStorage.setItem('authtoke',response.data.token)
                // localStorage.getItem('authtoken')
            
                // NextResponse.redirect("profile")
                action.resetForm();
            })
            .catch((error) => {
                    toast.error(error?.response?.data?.message,{theme: "dark"});
                   
                });

           
        },
    });
    useEffect(() => {

        const getedit = async () => {
            const url = `${URL}user/profile/660559c9fe171a65fdeda840`;
            try {
                const response = await axios({
                    method: 'get',
                    url: url
                }).then((res) => {
                    setData(res?.data?.profile[0])
                    console.log(res?.data?.profile[0])
                })

            } catch (err) {
                setErrormsg(err)
                console.error(err);
            }
        };
        getedit();
    }, []);
    // useEffect(() => {
    //     const geteditprofile = async () => {

    //         const url = `${URL}user/profile/${userId}`;
    //         try {
    //             const response = await axios({
    //                 method: 'get',
    //                 url: url
    //             }).then((res) => {
    //                 console.log(res.data.profile)
    //                 setResult(res.data.profile)
    //                 // setIsLoading(false)
    //             })

    //         } catch (err) {
    //             setErrormsg(err?.response?.data?.message)
    //             console.log(err);
    //             // setIsLoading(false)
    //         }

    //     };
    //     geteditprofile();
    // }, []);
   //
   
//    *****************
   const imgUrl = process.env.IMAGE_URL   //timline
    useEffect(() => {

        const getProfileList = async () => {

            const url = `${URL}user/profile/660559c9fe171a65fdeda840`;

            try {
                const response = await axios({
                    method: 'get',
                    url: url
                }).then((res) => {
                    setResult(res?.data?.profile?.[0])
                    console.log(res?.data?.profile?.[0])
                })

            } catch (err) {
                setErrormsg(err?.response?.data?.message)
                console.error(err);
            }
        };

        getProfileList();
    }, []);
   
   
    const backCover = {
        backgroundImage:`url(${imgUrl}${data?.timeline})`,
        fontSize:"100px",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }

    return (
        <>
            <div className="Container ">

                <Image alt="" className="text-center" 
                // style={backCover}
                    width={1500}
                    height={400}
                    src={timeline}
                     />

                <input type="file" className="d-none" onChange={timelineChange} id="timelineimage" />
                <label htmlFor="timelineimage">
                    <div className=" container-fluid text-center btnn">
                        <button type="button" className=" img-fluid btn btn-primary profile-button" />
                        Change Picture
                    </div>
                </label>

            </div>
            < form  onSubmit={handleSubmit} className="container rounded bg-white mt-5 mb-5">
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
                            <br />
                            <span className="font-weight-bold">Shivii</span>
                            <span className="text-black-50">shivii@mail.com.my</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Edit Profile </h4>
                            </div>

                            {/* <div className="col-md-12"><label className="labels"><h4><b>blogTitle </b>
                            </h4></label>
                                    < input
                                        type="text"
                                        autoComplete="off"
                                        className="form-control"
                                        name="blogTitle"
                                        id="blogTitle"
                                        placeholder="blogTitle"
                                        value={values.blogTitle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div> */}




                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label>
                                    <input 
                                    type="text" 
                                     autoComplete="off"
                                    className="form-control"
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
                                
                                <div className="col-md-6"><label className="labels">Surname</label>
                                    <input type="text" 
                                     autoComplete="off"
                                    className="form-control" 
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
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">about</label>
                                    <input type="text" className="form-control"
                                    name="about"
                                    id="about"
                                        placeholder="about yorself" 
                                        value={values.about}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                             </div>
                                         {errors.about && touched.about ? (
                                    <p className="form-error">{errors.about}</p>
                                ) : null}
                                <div className="col-md-12"><label className="labels">dob</label>
                                    <input type="date" className="form-control"
                                    name="dob"
                                    id="dob"
                                    placeholder="enter your dob"
                                    
                                      
                                        value={values.dob}
                                        onChange={handleChange}
                                        onBlur={handleBlur}

                                         />
                                        </div>
                                        {errors.dob && touched.dob ? (
                                    <p className="form-error">{errors.dob}</p>
                                ) : null}
                                {/* <div className="col-md-12"><label className="labels">Pincode</label>
                                    <input type="text" className="form-control"
                                        placeholder="enter pincode number" /></div> */}

                                <div className="col-md-12"><label className="labels">Email ID</label>
                                    <input type="text" className="form-control"
                                    name="email"
                                    id="email"
                                     placeholder="enter email id"
                                     value={values.email}
                                     onChange={handleChange}
                                     onBlur={handleBlur} />
                                </div>
                                {errors.email && touched.email ? (
                                    <p className="form-error">{errors.email}</p>
                                ) : null}
                                {/* <div className="col-md-12"><label className="labels">Education</label>
                                    <input type="text" className="form-control" placeholder="education" />

                                </div> */}
                            </div>
                            {/* <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label>
                                    <input type="text" className="form-control" placeholder="country" /></div>
                                <div className="col-md-6"><label className="labels">State/Region</label>
                                    <input type="text" className="form-control" placeholder="state" />
                                </div>
                            </div> */}
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button"
                                    type="submit">Update</button></div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                            <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value="" /></div> <br />
                            <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value="" /></div>
                        </div>
                    </div> */}
                </div>
            </form>




        </>
    )
}


