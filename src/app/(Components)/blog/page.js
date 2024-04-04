"use client"
import React from "react";
// import { useEffect, useState } from "react";
import Testimonal from "@/app/Shared/Testimonal";
// import axios from "axios";


export default function Blog() {
// 	const [allblog, setAllblog] = useState(null);
// 	const [errormsg, setErrormsg] = useState()

// 	const URL=process.env.BASE_URL
// 	console.log(URL)
// useEffect(() => {
// const blogs = async () => {

// 	const url = `${URL}blog/getallBlog?category=tech`;



// 	try {
// 		const response = await axios({
// 			method: 'get',
// 			url: url
// 		}).then((res) => {
// 			console.log(res.data.blogs)
// 			setTechData(res.data.blogs)
// 		})

// 	} catch (err) {
// 		setErrormsg(err.response.data.message)
// 		console.error(errormsg);
// 	}
	
// };



// getTechList();
// }, [errormsg]);


	return (
		<>


			{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Blog</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/Blog.png" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}



			{/* <!-- Start Blog Section --> */}
			<div className="blog-section">
				<div className="container">

					<div className="row">

						<div className="col-12 col-sm-6 col-md-4 mb-5">
							<div className="post-entry">
								<a href="#" className="post-thumbnail">
									<img src="./images/details1.jpg" alt="Image"
										className="img-fluid" /></a>
								<div className="post-content-entry">
									<h3><a href="#">Teachers inspire minds and shape futures</a></h3>
									<div className="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">
											Mar 19, 2024</a></span>
									</div>
								</div>
							</div>
						</div>

					

					</div>
				</div>

			</div>
			{/* <!-- End Blog Section -->	 */}


			<Testimonal />



		</>
	);
}