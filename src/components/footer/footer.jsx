import React from "react";
import logo from "../../img/logo2.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
	// const { footer, window, context_menu, context_item, title, horizontal_line,laws } =
	// 	styles;

	return (
		<footer className="mt-auto containter-fluid  pt-5">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-4">
						<div className="d-flex flex-column">
							<img src={logo} className="w-25" alt="logo"/>
							<p className="footer-text mt-3">
								The world’s first and largest digital marketplace for crypto
								collectibles and non-fungible tokens (NFTs). Buy, sell, and
								discover exclusive digital items.
							</p>
						</div>
					</div>
					<div className="col-md-3 ">
						<div className="d-flex flex-column">
							<h5>Contacts</h5>
							<ul class="p-0">
								<li className="DM-Sans">
									<span class="fw-bold">E-Mail:</span>
									<span class="fs-5">
										<span style={{cursor:"pointer"}}>nfters.space@gmail.com</span>
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-2 ms-4">
						<div className="d-flex flex-column">
							<h5>Market place</h5>
							<ul class="d-flex flex-column ps-3">
								<li>
									<Link className="ff-DM" to="/">
										Main
									</Link>
								</li>
								<li>
									<Link className="ff-DM" to="/about">
										About
									</Link>
								</li>
								<li>
									<Link classname="ff-DM" to="/termsofuse">
										Terms of Use
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
