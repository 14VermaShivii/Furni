"use client"
import React from "react";
import { useEffect, useState } from "react";
import Testimonal from "@/app/Shared/Testimonal";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import Blogdata from "@/app/Shared/Blogdata";
import foodimage from "../../../../public/images/food1.jpg"

export default function Food() {


	const [foodData, setFoodData] = useState(null);
	const [errormsg, setErrormsg] = useState()
	const URL=process.env.BASE_URL
			console.log(URL)

	useEffect(() => {
		const getFoodList = async () => {

			const url = `${URL}blog/getallBlog?category=food`

			try {
				const response = await axios({
					method: 'get',
					url: url
				}).then((res) => {
					console.log(res.data.blogs)
					setFoodData(res.data.blogs)
				})

			} catch (err) {
				setErrormsg(err.response.data.message)
				console.error(errormsg);
			}

		};
		getFoodList();
	}, [errormsg]);


	return (
		<>

			{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Food</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/Food.png" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}



			{/* <!-- Start Blog Section --> */}
			{/* <div className="blog-section">
				<div className="container">

					<div className="row">
						{foodData ? foodData.map((food, index) => {
							return (
								<div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
									<div className="post-entry">
										<a href="#" className="post-thumbnail"><img src="./images/food1.jpg" alt="Image"
											className="img-fluid" /></a>
										<div className="post-content-entry">
											<h3><Link href={`blogs/${food._id}`}>{food.blogTitle}</Link></h3>
											<h3>{food.blogDescripton}</h3>
											<div className="meta">
												<span>by <a href="#"></a></span>
												 <span>on <a href="#">{moment( food.createDate).format('LL')}</a></span>
											</div>
										</div>
									</div>
								</div>
							)
						}) : <div className="alert alert-danger"> <h4>{errormsg}</h4> </div>}


					</div>
				</div>
			</div> */}
			{/* <!-- End Blog Section -->	 */}


			<Blogdata Blogdata={foodData} errorData={errormsg} imageData={foodimage}/>
			<Testimonal />

		</>
	);
}