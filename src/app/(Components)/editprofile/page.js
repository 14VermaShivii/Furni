"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import profilepic from "../../../../public/images/girl.jpg"
import Image from "next/image";
import timelinepic from "../../../../public/images/blogging1.jpg"

export default function editblog() {
    const [profile, setProfile] = useState(profilepic)
    const handleInputChange = (event) => {
        setProfile(URL.createObjectURL(event.target.files[0]));
    }
        const [timeline,setTimeline] = useState(timelinepic)
        const timelineChange = (event) => {
                setTimeline(URL.createObjectURL(event.target.files[0]));
        }
    return (
        <>
            <div className="Container">
                
                    <Image className="mt-5 text-center"
                    width={1500}
                    height={400}
                        src={timeline} />
                   
                    <input type="file" className="d-none" onChange={timelineChange} id="timelineimage" />
                    <label htmlFor="timelineimage">
                        <div className=" container-fluid text-center btnn">
                        <button type="button" className=" img-fluid btn btn-primary profile-button" />Change Picture
                        </div>
                        </label>
                        

               

            </div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <Image className="rounded-circle mt-5"
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
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label>
                                    <input type="text" className="form-control" placeholder="first name" /></div>
                                <div className="col-md-6"><label className="labels">Surname</label>
                                    <input type="text" className="form-control" value="" placeholder="surname" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Mobile Number</label>
                                    <input type="text" className="form-control"
                                        placeholder="enter phone number" /></div>
                                <div className="col-md-12"><label className="labels">Address</label>
                                    <input type="text" className="form-control"
                                        placeholder="enter your address" /></div>

                                <div className="col-md-12"><label className="labels">Pincode</label>
                                    <input type="text" className="form-control"
                                        placeholder="enter pincode number" /></div>

                                <div className="col-md-12"><label className="labels">Email ID</label>
                                    <input type="text" className="form-control" placeholder="enter email id" />
                                </div>
                                <div className="col-md-12"><label className="labels">Education</label>
                                    <input type="text" className="form-control" placeholder="education" />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label>
                                    <input type="text" className="form-control" placeholder="country" /></div>
                                <div className="col-md-6"><label className="labels">State/Region</label>
                                    <input type="text" className="form-control" value="" placeholder="state" />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button"
                                    type="button">Save Profile</button></div>
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
            </div>




        </>
    )
}


