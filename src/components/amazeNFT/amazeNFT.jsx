import React from "react";
import chartSquare from '../../img/chart-square.svg';
import cardTick from '../../img/card-tick.svg';
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
					<div className="col-md-3 mt-5 ">
						<div className="d-flex flex-row">
							<img
								className="img-fluid mb-auto"
								src={cardTick}
								alt="card-tick"
							/>
							<div className="d-flex flex-column ms-3 amaze-nft--item">
								<span className="fs-5 ff-DM ">Fast Transaction</span>
								<p className="ff-DM mt-2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aliquam etiam viverra tellus imperdiet.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 mt-5">
						<div className="d-flex flex-row">
							<img
								className="img-fluid mb-auto"
								src={chartSquare}
								alt="chart-square"
							/>
							<div className="d-flex flex-column ms-3 amaze-nft--item">
								<span className="fs-5 ff-DM ">Growth Transaction</span>
								<p className="ff-DM mt-2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aliquam etiam viverra tellus
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
