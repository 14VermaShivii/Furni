"use client"
import React from "react";
import { useEffect, useState } from "react";
import Testimonal from "@/app/Shared/Testimonal";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import Blogdata from "@/app/Shared/Blogdata";
import fashionimage from "../../../../public/images/fashion1.jpg"

export default function Fashion() {

	const [fashionData, setFashionData] = useState(null);
const [errormsg , setErrormsg]=useState()
const URL=process.env.BASE_URL
			console.log(URL)
	useEffect(() => {
	const getFashionList = async () => {

		const url = `${URL}blog/getallBlog?category=fashion`;

		try {
			const response = await axios({
				method: 'get',
				url: url
			}).then((res) => {
				console.log(res.data.blogs)
				setFashionData(res.data.blogs)
			})

		} catch (err) {
			setErrormsg(err.response.data.message)
			console.error(errormsg);
		}

	};

	

		getFashionList();
	}, [errormsg]);




	return (
		<>



			
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Fashion</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/Fashion.png" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		

			<Blogdata Blogdata={fashionData} errorData={errormsg} imageData={fashionimage}/>
			<Testimonal />
		</>
	);
}