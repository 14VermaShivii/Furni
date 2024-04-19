import Link from "next/link";

export default function profile() {
    return (
        <>

            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    {/* <!-- Profile widget -->  */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-5 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3"><img src="./images/girl.jpg" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                                    <a href={"/editprofile"} className="btn btn-primary btn-sm btn-block">Edit profile</a></div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">Shivani Verma</h4>
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
                            <h5 className="mb-0"><b>About</b></h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">Web Developer</p>
                                <p className="font-italic mb-0">Lives in India</p>
                                <p className="font-italic mb-0">Photography</p>
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
                                    <img src="images/blogging1.jpg" alt="" className="img-fluid rounded shadow-sm" />
                                </div>
                                <div className="col-lg-6 mb-2 pl-lg-1">
                                    <img src="images/blogging2.jpg" alt="" className="img-fluid rounded shadow-sm" />
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