"use client"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { footerchema } from "../schemas"
import { useFormik } from "formik"
import moment from "moment"



export default function Footer() {
	const URL = process.env.BASE_URL
	console.log(URL)
	const [footerData, setFooterData] = useState();
	const [errormsg, setErrormsg] = useState()
	const initialValues = {
		email: ""
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: footerchema,

			onSubmit: (values, action) => {
				console.log(values);
				let config = {                   //api
					method: 'POST',
					url: `${URL}newsletter/new`,
					headers: {
						'Content-Type': 'application/json'
					},
					data: values
				}
				const getFooterList = async () => {
					try {
						const response = await axios
							.request(config)
							.then(function (response) {
								console.log(response?.data)
								action.resetForm();
								// setFooterData(response)
								// setIsLoading(false)
							})
					}
					catch (err) {
						// setErrormsg(err)
						console.log(err);
						// setIsLoading(false)
					}
				}
				getFooterList();
			}
		})
	const pathname = usePathname()
	if (pathname !== "/login" && pathname !== "/forgotpassword" && pathname !== "/resetpassword" && pathname != "/signup" && pathname != "/changepassword")    //condition for hide show footer
	{
		return (
			<>

				<footer className="footer-section">
					<div className="container relative">
						<div className="row">
							<div className="col-lg-8">
								<div className="subscription-form">
									<h3 className="d-flex align-items-center">
										<span className="me-1"><img src="./images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

									<form onSubmit={handleSubmit} className="row">
										<div className="col-md-3">
											<div className="form-field d-flex align-items-center">
												<label htmlFor="email">
													<input
														type="email"
														autoComplete="off"
														name="email"
														id="email"
														placeholder="email"
														value={values.email}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													{errors.email && touched.email ? (
														<p className="form-error">{errors.email}</p>
													) : null}
												</label>
											</div>
										</div>

										<div className="col-md-2 col-auto btn">
											<button type="submit" className="btn btn-primary">
												<span className="nav-link" href="#">
													<FontAwesomeIcon icon={faPaperPlane} /></span>
											</button>
										</div>
									</form>

									{/* 									
									<form action="#" className="row g-3">
									<div className="col-auto">
											<input type="text" className="form-control" 
											placeholder="Enter your name" />
										</div>
									<div className="col-auto"></div>


											<input type="email" className="form-control"
												placeholder="Enter your email" />
										</div>
										<div className="col-auto">
											<button className="btn btn-primary">
												<span className="nav-link"
												href="#"><FontAwesomeIcon icon={faPaperPlane} /></span>
											</button>
										</div>
									</form> */}

								</div>
							</div>
						</div>

						<div className="row g-5 mb-5">
							<div className="col-lg-4">
								<div className="mb-4 footer-logo-wrap"><Link href="#" className="footer-logo">Furni<span>.</span></Link></div>
								<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

								<ul className="list-unstyled custom-social">
									<li><Link className="nav-link" href="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
									<li><Link className="nav-link" href="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
									<li><Link className="nav-link" href="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
									<li><Link className="nav-link" href="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
								</ul>
							</div>

							<div className="col-lg-8">
								<div className="row links-wrap">
									<div className="col-6 col-sm-6 col-md-3">
										<ul className="list-unstyled">
											<li><Link href={"/"}>About us</Link></li>
											<li><Link href={"/"}>Services</Link></li>
											<li><Link href={"/"}>Blog</Link></li>
											<li><Link href={"/"}>Contact us</Link></li>
										</ul>
									</div>

									<div className="col-6 col-sm-6 col-md-3">
										<ul className="list-unstyled">
											<li><Link href={"/"}>Support</Link></li>
											<li><Link href={"/"}>Knowledge base</Link></li>
											<li><Link href={"/"}>Live chat</Link></li>
										</ul>
									</div>

									<div className="col-6 col-sm-6 col-md-3">
										<ul className="list-unstyled">
											<li><Link href={"/"}>Jobs</Link></li>
											<li><Link href={"/"}>Our team</Link></li>
											<li><Link href={"/"}>Leadership</Link></li>
											<li><Link href={"/"}>Privacy Policy</Link></li>
										</ul>
									</div>

									<div className="col-6 col-sm-6 col-md-3">
										<ul className="list-unstyled">
											<li><Link href={"/"}>Nordic Chair</Link></li>
											<li><Link href={"/"}>Kruzo Aero</Link></li>
											<li><Link href={"/"}>Ergonomic Chair</Link></li>
										</ul>
									</div>
								</div>
							</div>

						</div>

						<div className="border-top copyright">
							<div className="row pt-4">
								<div className="col-lg-6">
									<p className="mb-2 text-center text-lg-start">Copyright &copy;. All Rights Reserved. &mdash; Designed with love by <Link href="https://untree.co">Untree.co</Link> Distributed By <Link href="https://themewagon.com">ThemeWagon</Link>
										{/* <!-- License information: https://untree.co/license/ --> */}
									</p>
								</div>

								<div className="col-lg-6 text-center text-lg-end">
									<ul className="list-unstyled d-inline-flex ms-auto">
										<li className="me-4"><Link href="#">Terms &amp; Conditions</Link></li>
										<li><Link href="#">Privacy Policy</Link></li>
									</ul>
								</div>

							</div>
						</div>

					</div>
				</footer>
			</>
		)
	}
	else {
		return (
			<>

				<footer className="footer-section">
					<div className="container relative">

						{/* <div className="sofa-img">
							<img src="images/sofa.png" alt="Image" className="img-fluid" />
						</div> */}


						<div className="border-top copyright">
							<div className="row pt-4">
								<div className="col-lg-6">
									{/* <p className="mb-2 text-center text-lg-start"> <Link href="https://untree.co">Untree.co</Link> <Link href="https://themewagon.com">ThemeWagon</Link> */}
										{/* <!-- License information: https://untree.co/license/ --> */}
									{/* </p> */}
								</div>

								<div className="col-lg-6 text-center text-lg-end">
									<ul className="list-unstyled d-inline-flex ms-auto">
										<li className="me-4"><Link href="#">Terms &amp; Conditions</Link></li>
										<li><Link href="#">Privacy Policy</Link></li>
									</ul>
								</div>

							</div>
						</div>

					</div>
				</footer>
			</>
		)
	}


}