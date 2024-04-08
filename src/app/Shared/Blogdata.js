import moment from "moment";
import Link from "next/link";
import LoaderComp from "@/app/loader";

import { useEffect, useState } from "react";
export default function Blogdata(props) {
    
    console.log("props data")
    const [isLoading, setIsLoading] = useState(true);
    const [getData,setgetData]=useState()
    const [getError,setgetError ]=useState(props.errorData)
    useEffect(()=>{
        setgetData(props.Blogdata)
        if(getData){
            setIsLoading(false)
        }
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
                                        <a href="#" className="post-thumbnail">
                                            <img src="./images/tech1.jpg" alt="Image"
                                                className="img-fluid" /></a>
                                        <div className="post-content-entry">
                                            <h3><Link href={`blogs/${data._id}`}>{data.blogTitle}</Link></h3>

                                            <h3>{data.blogDescripton}</h3>
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