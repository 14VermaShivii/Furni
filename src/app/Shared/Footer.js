"use client"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
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

									<form action="#" className="row g-3">
										<div className="col-auto">
											<input type="text" className="form-control" placeholder="Enter your name" />
										</div>
										<div className="col-auto">
											<input type="email" className="form-control" placeholder="Enter your email" />
										</div>
										<div className="col-auto">
											<button className="btn btn-primary">
												<span className="nav-link" href="#"><FontAwesomeIcon icon={faPaperPlane} /></span>
											</button>
										</div>
									</form>

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


}