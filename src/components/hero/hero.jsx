import React from "react";
import card1 from "../../img/card-1.png";
import card2 from "../../img/card-2.png";
import card3 from "../../img/card-3.png";
import ethereumImg from "../../img/ethereum 2.svg";
import creatorImg from "../../img/creator-1.png";
import {Link} from 'react-router-dom';
export const Hero = () => {
	return (
		<div className="container-fluid pb-5">
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-6 hero position-relative">
						<h1 className="ff-Integral">
							Discover, and collect Digital Art NFTs{" "}
						</h1>
						<h5 className="ff-DM mt-4">
							Digital marketplace for crypto collectibles and non-fungible
							tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
						</h5>
						<Link to="/soon"><button className="common-btn explore-now--btn mt-5">
							Explore Now
						</button></Link>
						<div className="row w-75 mt-4">
							<div className="col-md-4">
								<h1 className="ff-Integral fw-bold">98K+</h1>
								<h5 className="ff-DM">Artwork</h5>
							</div>
							<div className="col-md-4">
								<h1 className="ff-Integral fw-bold">12K+</h1>
								<h5 className="ff-DM">Auction</h5>
							</div>
							<div className="col-md-4">
								<h1 className="ff-Integral fw-bold">15K+</h1>
								<h5 className="ff-DM">Artist</h5>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="flip">
							<div className="top position-absolute">
								<div className="position-relative">
									<img className="img-fluid" src={card1} alt="top-card" />
									<div className="overlay">
										<h3 className="nft-name ff-DM">Abstr Gradient NFT</h3>
										<div className="creator">
											<img
												className="img-fluid"
												src={creatorImg}
												alt="creator-img"
											/>
											<span className="creator-name ff-DM ms-2">Archan17</span>
										</div>
										<div className="bid mt-auto">
											<div className="bid-current d-flex flex-column">
												<span className="bid-current--header ff-DM">
													Current Bid
												</span>
												<div className="price-current">
													<img
														className="img-fluid"
														src={ethereumImg}
														alt="ethereum"
													/>
													<span className="ff-DM">0.25 ETH</span>
												</div>
											</div>
											<div className="timer d-flex flex-column">
												<span className="timer-header ff-DM">Ends in</span>
												<div className="time">
													<span className="hours">12h</span>
													<span className="minutes">43m</span>
													<span className="seconds">42s</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="center position-absolute">
								<img className="img-fluid" src={card2} alt="center-card" />
							</div>
							<div className="bottom position-absolute">
								<img className="img-fluid" src={card3} alt="bottom-card" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
