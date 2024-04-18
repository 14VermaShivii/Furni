"use client"
import moment from "moment";
import Link from "next/link";
import LoaderComp from "@/app/loader";

import { useEffect, useState } from "react";
import { Readmore } from "./Readmore";

export default function Blogdata(props) {
    
    console.log("props data")
    const [isLoading, setIsLoading] = useState(true);
    
    const [getData,setgetData]=useState()
    const [getError,setgetError ]=useState()
    const[isVisible,setVisible]=useState(true)
    useEffect(()=>{
        setgetData(props.Blogdata)
        setgetError(props.errorData)
        if(getData||getError){
            setIsLoading(false)
        }
        // else{
        //     setIsLoading(true)
        // }
    })
    console.log(getData,'error')
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
                                        <Link href="#" className="post-thumbnail">
                                            <img src={props?.imageData?.src} alt="Image"
                                                className="img-fluid" /></Link>
                                        <div className="post-content-entry">
                                            <h3><Link href={`blogs/${data._id}`}>{data.blogTitle}</Link></h3>

                                            {isVisible ? <Readmore text={data?.blogDescripton}
                                             maxelength={35} /> :<> </>}
                                            <div className="meta">
                                                <span>by <a href="#"></a></span> <span>on
                                                    <a href="#">{moment(data.createDate).format('LL')}
                                                    </a></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }) : <div className="alert alert-danger"> <h4>{errorData}</h4> </div>}
                    </div>
                </div>

            )}

        </>
    )
}