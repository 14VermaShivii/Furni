"use client"
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function profile() {
    // const [profileData, setProfileData] = useState();
    const [errormsg, setErrormsg] = useState()
    const [data, setData] = useState()
    const URL = process.env.BASE_URL
    console.log(URL)
    const imgUrl = process.env.IMAGE_URL
    useEffect(() => {

        const getProfileList = async () => {

            const url = `${URL}user/profile/660559c9fe171a65fdeda840`;

            try {
                const response = await axios({
                    method: 'get',
                    url: url
                }).then((res) => {
                    setData(res?.data?.profile?.[0])
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
        fontSize:"50px",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }

    return (
        <>

            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    {/* <!-- Profile widget -->  */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-5 " style={backCover}>
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img src={`${imgUrl}${data?.profilePicture}`}
                                        alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                                    <a href={"/editprofile"}
                                        className="btn btn-primary btn-sm btn-block">Edit profile</a></div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">{data?.userId?.firstname}
                                        {data?.userId?.surname}</h4>
                                    <p className="font-italic mb-0">{data?.dob}</p>
                                    <p className="small mb-4">
                                        <i className="fas fa-map-marker-alt mr-2"></i>India</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link className="btn btn-primary me-md-2" href={"/createblog"}>+CreateBlog</Link>
                            <Link className="btn btn-primary" href={"/changepassword"}>Changepassword
                            </Link>
                        </div>


                        <div className="px-4 py-3">
                            <div className="p-4 rounded shadow-sm bg-light">
                                <h5 className="mb-0"><b>{data?.about}</b></h5>
                                {/* <p className="font-italic mb-0">{data?.dob}</p> */}
                                {/* <p className="font-italic mb-0">Lives in India</p>
                                <p className="font-italic mb-0">Photography</p> */}
                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                {/* <h5 className="mb-0">Recent photos</h5><a href="#"
                                 className="btn btn-link text-muted">Show all</a> */}
                                <Link className="btn btn-primary" href={"/profile/myblogs"}>All Blogs
                                </Link>
                            </div> <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1">
                                    <img src="images/blogging1.jpg" alt=""
                                        className="img-fluid rounded shadow-sm" />
                                </div>
                                <div className="col-lg-6 mb-2 pl-lg-1">
                                    <img src="images/blogging2.jpg" alt=""
                                        className="img-fluid rounded shadow-sm" />
                                </div>
                                <div className="col-lg-6 pr-lg-1 mb-2">
                                    <img src="images/blogging3.jpg" alt="" className="img-fluid rounded shadow-sm" />
                                </div>
                                <div className="col-lg-6 pl-lg-1">
                                    <img src="images/blogging4.jpg" alt="" className="img-fluid rounded shadow-sm" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}