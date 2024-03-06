export default function createblog() {
    return (
        <>

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5"
                                width="150px"
                                src="./images/girl.jpg" /><span className="font-weight-bold">Shivii</span><span className="text-black-50">shivii@mail.com.my</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels"><b>Blog title</b></label>
                                    <input type="text" className="form-control" placeholder="blog title" />
                                </div>
                                <div className="col-md-6"><label className="labels"><b>Blog description</b></label>
                                    <input type="text" className="form-control"
                                        value="" placeholder="blogdescription" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels"><b>Auther Id</b></label>
                                    <input type="text" className="form-control"
                                        placeholder="auther id " /></div>

                            </div>


                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button"
                                    type="button">Save Profile</button></div>
                        </div>
                    </div> 


                </div>
            </div>





        </>
    )

}