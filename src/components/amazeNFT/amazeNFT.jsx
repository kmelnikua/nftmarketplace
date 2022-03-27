import React from "react";
import chartSquare from "../../img/chart-square.svg";
import cardTick from "../../img/card-tick.svg";
export const AmazeNFT = () => {
	return (
		<div className="container-fluid amaze-nft">
			<div className="container">
				<div className="row justify-content-between ">
					<div className="col-md-4">
						<h3 className="ff-Integral py-5">
							The amazing NFT art of the world here
						</h3>
					</div>
					<div className="col-md-4 mt-5 ">
						<div className="d-flex flex-row">
							<img
								className="img-fluid mb-auto"
								src={cardTick}
								alt="card-tick"
							/>
							<div className="d-flex flex-column ms-3 amaze-nft--item">
								<span className="fs-5 ff-DM ">Fast Transaction</span>
								<p className="ff-DM mt-2">
									With existing banking infrastructure, it can take up to a week
									for a cross-border payments to validate and settle. It's what
									consumers and businesses have grown accustomed to for decades,
									but it doesn't have to be the norm moving forward.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-5">
						<div className="d-flex flex-row">
							<img
								className="img-fluid mb-auto"
								src={chartSquare}
								alt="chart-square"
							/>
							<div className="d-flex flex-column ms-3 amaze-nft--item">
								<span className="fs-5 ff-DM ">Growth Transaction</span>
								<p className="ff-DM mt-2">
									As the name suggests, average transaction value is the average
									amount of money – usually measured in dollars – spent by a
									consumer on a single transaction
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
