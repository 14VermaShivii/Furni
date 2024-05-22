"use client"
import moment from "moment";
import Link from "next/link";
import LoaderComp from "@/app/loader";

import { useEffect, useState} from "react";
import  Readmore  from "./Readmore";
import techimage from "../../../public/images/tech1.jpg"
import fashionimage from "../../../public/images/fashion1.jpg"
import foodimage from "../../../public/images/food1.jpg"
import travelimage from "../../../public/images/travel1.jpg"
import lifestyleimage from "../../../public/images/lifestyle1.jpg"
import image from "../../../public/images/details5.jpg"
// import defaultimage from "../../../public/images/defaultimage.jpg"

export default function Blogdata(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [getData, setgetData] = useState()
    const [getError, setgetError] = useState(true)   //error not came i.e. true
    const [isVisible, setVisible] = useState(true)

    useEffect(() => {
        setgetData(props.Blogdata)
        setgetError(props.errorData)
        if (getData || getError) {
            setIsLoading(false)
        }
        console.log(getData)

    },[props])

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
                        {getData ? getData.map((data, index) => {


                            return (
                                <div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
                                    <div className="post-entry">
                                        {/* <Link href="#" className="post-thumbnail">
                                            <img src={props?.imageData?.src} alt="Image"
                                                className="img-fluid" /></Link> */}

                                        <Link href="#" className="post-thumbnail zoom">
                                            <img src={getImageByCat(data?.category)}
                                             alt="Image" className="img-fluid " /></Link>

                                        <div className="post-content-entry">
                                            <h3><Link href={`blogs/${data?._id}`}>{data?.blogTitle}</Link>
                                            </h3>

                                            {isVisible ? <Readmore text={data?.blogDescription}
                                                maxlength={35} blogid={data?._id}/> : <> </> }
                                            <div className="meta">
                                                <span>by <a href="#"></a></span> <span>on
                                                    <a href="#">{moment(data?.createDate).format('LL')}
                                                    </a></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }) : <div className="alert alert-danger"> <h4>{getError}</h4> </div>}
                    </div>
                </div>

            )}

        </>
    )
}