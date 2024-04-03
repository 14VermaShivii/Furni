"use client"
import React from "react";
import { useEffect, useState } from "react";
import Testimonal from "@/app/Shared/Testimonal";
import axios from "axios";

export default function Lifestyle() {

	const [lifestyleData, setLifestyleData] = useState(null);
	const getLifestyleList = async () => {

		const url = 'http://localhost:7000/api/blog/getallBlog?category=lifestyle';

		try {
			const response = await axios({
				method: 'get',
				url: url
			}).then((res) => {
				console.log(res.data.blogs)
				setLifestyleData(res.data.blogs)
			})

		} catch (err) {
			setLifestyleData(res.data.blogs)
			console.error(err);
		}

	};

	useEffect(() => {

		getLifestyleList();
	}, []);


	return (
		<>

			{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Lifestyle</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/Lifestyle.png" className="img-fluid" />
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
						{lifestyleData ? lifestyleData.map((lifestyle, index) => {
							return (
								<div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
									<div className="post-entry">
										<a href="#" className="post-thumbnail"><img src="./images/lifestyle1.jpg" alt="Image" className="img-fluid" /></a>
										<div className="post-content-entry">
											<h3><a href="#">{lifestyle.blogTitle}</a></h3>
											<h3>{lifestyle.blogDescripton}</h3>
											<div className="meta">
												<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
											</div>
										</div>
									</div>
								</div>
							)
						}) : <div className="alert alert-danger">{setLifestyleData} <h4>No Blogs</h4> </div>}

					</div>
				</div>
			</div>
			{/* <!-- End Blog Section -->	 */}



			<Testimonal />


		</>
	);
}