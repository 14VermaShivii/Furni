export default function Testimonal() {
	return (
		<>

			<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner Testimonal">
					<div className="testimonial-slider-wrap text-center">
						<div className="carousel-item active" data-bs-interval="10000">
							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<blockquote className="mb-5">
												<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
											</blockquote>

											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
												</div>
												<h3 className="font-weight-bold">Maria Jones</h3>
												<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span><br/>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="2000">
							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<blockquote className="mb-5">
												<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
											</blockquote>

											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
												</div>
												<h3 className="font-weight-bold">Maria Jones</h3>
												<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span><br />
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<blockquote className="mb-5">
												<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
											</blockquote>

											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
												</div>
												<h3 className="font-weight-bold">Maria Jones</h3>
												<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span><br />
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</>
	)
}