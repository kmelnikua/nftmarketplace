import React from "react";
import logo from '../../img/logo2.svg';
export const Footer = () => {
	// const { footer, window, context_menu, context_item, title, horizontal_line,laws } =
	// 	styles;
	
	return (
		<footer className="mt-auto containter-fluid  pt-5">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-4">
						<div className="d-flex flex-column">
							<img src={logo} className="w-25" />
							<p className="footer-text mt-3">
								The world’s first and largest digital marketplace for crypto
								collectibles and non-fungible tokens (NFTs). Buy, sell, and
								discover exclusive digital items.
							</p>
						</div>
					</div>
					<div className="col-md-2 ms-4">
						<div className="d-flex flex-column">
							<h5>Market place</h5>
							<ul>
								<li className="DM-Sans">All NFTs</li>
								<li className="DM-Sans">New</li>
								<li className="DM-Sans">Art</li>
								<li className="DM-Sans">Sports</li>
								<li className="DM-Sans">Utility</li>
								<li className="DM-Sans">Music</li>
								<li className="DM-Sans">Domain Name</li>
							</ul>
						</div>
					</div>
					<div className="col-md-2 ms-4">
						<div className="d-flex flex-column">
							<h5>Market place</h5>
							<ul>
								<li className="DM-Sans">All NFTs</li>
								<li className="DM-Sans">New</li>
								<li className="DM-Sans">Art</li>
								<li className="DM-Sans">Sports</li>
								<li className="DM-Sans">Utility</li>
								<li className="DM-Sans">Music</li>
								<li className="DM-Sans">Domain Name</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
