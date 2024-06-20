// import Image from "next/image";
// import styles from "./page.module.css";
import React from 'react';

import Link from 'next/link'
import Testimonal from './Shared/Testimonal';

export default function Home() {


	return (
		<>

			{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Create Attractive <span clsas="d-block">Blogs</span></h1>
								<p className="mb-4">To make your blog site look better, use a professional domain name, well-designed theme, high-quality images, white space, consistent design, and easy navigation. For a quotes site, use a large, clear font for the quotes, variety of images, and consistent design. Promote your site on social media</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="./images/Blog1.png" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}

			{/* <!-- Start Product Section --> */}
			<div className="product-section">
				<div className="container">
					<div className="row">

						{/* <!-- Start Column 1 --> */}
						<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
							<h2 className="mb-4 section-title"> An online platform where one or more individuals post </h2>
							<p className="mb-4">An informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. </p>
							<p><a href="shop.html" className="btn btn-primary">Explore</a></p>
						</div>
						{/* <!-- End Column 1 --> */}

						{/* <!-- Start Column 2 --> */}
						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a className="product-item" href="cart.html">
								<img src="images/blogpage1.jpg" className="img-fluid product-thumbnail" />
								<h3 className="product-title">Nordic maale</h3>
								<strong className="product-price">$500.00</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- End Column 2 --> */}

						{/* <!-- Start Column 3 --> */}
						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a className="product-item" href="cart.html">
								<img src="images/blogging2.jpg" className="img-fluid product-thumbnail" />
								<h3 className="product-title">Browse other blogs for inspiration.</h3>
								<strong className="product-price">$780.00</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- End Column 3 --> */}

						{/* <!-- Start Column 4 --> */}
						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a className="product-item" href="cart.html">
								<img src="images/blogging3.jpg" className="img-fluid product-thumbnail" />
								<h3 className="product-title">Cater to emotions</h3>
								<strong className="product-price">$430.00</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- End Column 4 --> */}

					</div>
				</div>
			</div>
			{/* <!-- End Product Section --> */}

			{/* <!-- Start Why Choose Us Section --> */}
			<div className="why-choose-section">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-6">
							<h2 className="section-title">Why Choose Us</h2>
							<p>Blogging consists of creating posts and publishing them on the internet for people to read. It can be anything from travel to fashion. These posts can be about anything the blogger desires, and all posts are archived and sorted into categories.</p>

							<div className="row my-5">
								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/truck.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>Fast &amp; Free Shipping</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/bag.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>Easy to Shop</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/support.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>24/7 Support</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/return.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>Hassle Free Returns</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

							</div>
						</div>

						<div className="col-lg-5">
							<div className="img-wrap">
								<img src="images/bloging5.jpg" alt="Image" className="img-fluid" />
							</div>
						</div>

					</div>
				</div>
			</div>
			{/* <!-- End Why Choose Us Section --> */}

			{/* <!-- Start We Help Section --> */}
			<div className="we-help-section">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-7 mb-5 mb-lg-0">
							<div className="imgs-grid">
								<div className="grid grid-1"><img src="images/bloging6.jpg" alt="Untree.co" /></div>
								<div className="grid grid-2"><img src="images/blogging3.jpg" alt="Untree.co" /></div>
								<div className="grid grid-3"><img src="images/bloging7.jpg" alt="Untree.co" /></div>
							</div>
						</div>
						<div className="col-lg-5 ps-lg-5">
							<h2 className="section-title mb-4">We Help You </h2>
							<p>
							That's because there is so much content and information on the internet. A blog helps you convert website traffic into potential leads, convert them into subscribers and social media followers, and allow you to reach out to them later.</p>

							<ul className="list-unstyled custom-list my-4">
								<li>Helps your audience achieve what they want.</li>
								<li>Joining an ad network is one of the most common ways that bloggers make money.</li>
								<li>Divide your blog goal(s) into actionable plans for the year's quarters.</li>
								<li>People absolutely still read blogs regularly</li>
							</ul>
							<p><a herf="#" className="btn btn-primary">Explore</a></p>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End We Help Section --> */}

			{/* <!-- Start Popular Product --> */}
			<div className="popular-product">
				<div className="container">
					<div className="row">

						<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
							<div className="product-item-sm d-flex">
								<div className="thumbnail">
									<img src="images/Blog.jpg" alt="Image" className="img-fluid" />
								</div>
								<div className="pt-3">
									<h3>Relevance</h3>
									<p>Your blog name should be relevant to the topic of your blog.  </p>
									<p><a href="#">Read More</a></p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
							<div className="product-item-sm d-flex">
								<div className="thumbnail">
									<img src="images/blogging4.jpg" alt="Image" className="img-fluid" />
								</div>
								<div className="pt-3">
									<h3>Memorable</h3>
									<p>Good blog names need to be memorable so that people will be more likely to find your blog again if they enjoy your content. </p>
									<p><a href="#">Read More</a></p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
							<div className="product-item-sm d-flex">
								<div className="thumbnail">
									<img src="images/blogging1.jpg" alt="Image" className="img-fluid" />
								</div>
								<div className="pt-3">
									<h3>Unique</h3>
									<p>Your blog name should be unique and stand out from other blogs in your niche. </p>
									<p><a href="#">Read More</a></p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			{/* <!-- End Popular Product --> */}

			<Testimonal />

			{/* <!-- Start Blog Section --> */}

			<div className="blog-section">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-6">
							<h2 className="section-title">Recent Blog</h2>
						</div>
						<div className="col-md-6 text-start text-md-end">
							<a href="#" className="more">View All Posts</a>
						</div>
					</div>

					<div className="row">

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<a href="#" className="post-thumbnail"><img src="images/unique1.jpg" alt="Image"
									className="img-fluid" /></a>
								<div className="post-content-entry">
									<h3><a href="#"> Consider your target audience.</a></h3>
									<div className="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span>on
											<a href="#">Dec 19, 2021</a></span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<a href="#" className="post-thumbnail"><img src="images/unique4.jpg" alt="Image"
									className="img-fluid" /></a>
								<div className="post-content-entry">
									<h3><a href="#"> Do your research.</a></h3>
									<div className="meta">
										<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<a href="#" className="post-thumbnail"><img src="images/unique3.jpg" alt="Image"
									className="img-fluid" /></a>
								<div className="post-content-entry">
									<h3><a href="#">Think about your message.</a></h3>
									<div className="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			{/* <!-- End Blog Section -->	 */}




		</>
	);
}
