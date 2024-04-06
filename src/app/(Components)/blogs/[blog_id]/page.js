import React from "react";

export default function blogpage({  params}) {
    return (
        <>
            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <h3>Welcome to Your blog page {params.blog_id}</h3>
                                by Shivani Verma<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}