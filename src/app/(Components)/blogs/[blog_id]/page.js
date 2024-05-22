"use client"
import React from "react";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import techimage from "../../../../../public/images/tech1.jpg"
import fashionimage from "../../../../../public/images/fashion1.jpg"
import foodimage from "../../../../../public/images/food1.jpg"
import travelimage from "../../../../../public/images/travel1.jpg"
import lifestyleimage from "../../../../../public/images/lifestyle1.jpg"
import image from "../../../../../public/images/details5.jpg"
import axios from "axios";
import LoaderComp from "@/app/loader";


export default function Blogid({ params }) {
    const [isLoading, setIsLoading] = useState(true);
    const [allblog, setAllblog] = useState();
    const [getError, setErrormsg] = useState()
    const URL = process.env.BASE_URL
    console.log(params.blog_id,"id")
    useEffect(() => {
        const getid = async () => {
            const url = `${URL}blog/Blog/${params.blog_id}`;
            try {
                const response = await axios({
                    method: 'get',
                    url: url
                }).then((res) => {
                    console.log(res?.data)
                    setAllblog(res?.data)
                    setIsLoading(false)
                })
            } catch (err) {
                setErrormsg(err?.response?.data?.message)
                console.log(err);
            }
        };
        getid();
    }, []);
    function getImageByCat(cat) {
        const imagestatus = {
            tech: techimage.src,
            fashion: fashionimage.src,
            travel: travelimage.src,
            food: foodimage.src,
            lifestyle: lifestyleimage.src,
            default:image.src
        }
        return imagestatus[cat] || imagestatus['default']
    }
    return (
        <>
            {isLoading ? (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <LoaderComp />
                </div>
            ) : (
                <div className="blog-section">
                    <div className="container"></div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link href="#" className="post-thumbnail">
                                    <img src={getImageByCat(allblog?.category)} alt="Image"
                                     className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link href={`${allblog._id}`}>{allblog?.blogTitle}</Link>
                                    </h3>

                                    <div className="post-content-entry">
                                    <h3><Link href={`${allblog._id}`}>{allblog?.blogDescription}</Link>
                                    </h3>
                                    </div>

                                    {/* <div className="post-content-entry">
                                    <a href="#">{moment(allblog?.blogDescription)}
                                    </a>
                                    </div> */}


                                    <div className="meta">
                                        <span>by <a href="#"></a></span> <span>on
                                            <a href="#">{moment(allblog?.createDate).format('LL')}
                                            </a></span>
                                    </div>
                                    <p>{allblog.blogDescription}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
