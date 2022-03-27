//import NFTImage from "../../img/nft-shop/nft-1.jpg";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import nftStore from "../../store/nftStore.jsx";

import { useEffect } from "react";
import React from "react";
import IMAGES from "../images";
export const Shop = observer(() => {

	let { nftList, setNFTList } = nftStore;
	useEffect(() => {
		setNFTList({ searchID: undefined });
	}, []);
	console.log(nftList);
	let renderedElements = IMAGES.map((item) => {
		return (
			<Link
				to={"/nft/" + item.id}
				key={item.id}
				className="col-md-3 mt-5"
				onClick={() => console.log("clicked")}
			>
				<div className="card">
					<img
						src={`nfts/nft-shop/${item.imagesrc}`}
						className="card-img-top"
						alt="nft"
					/>
					<div className="card-body h-100 align-content-between d-flex flex-column">
						<h5 className="card-title">{item.title}</h5>

						<hr className="separator mt-auto" />
						<div className="d-flex flex-row justify-content-between align-items-center ">
							<span className="price">{item.price} $</span>{" "}
							<span href="#" className="btn btn-primary buy-shop--btn">
								Buy
							</span>
						</div>
					</div>
				</div>
			</Link>
		);
	});
	return (
		<div className="container-fluid shop pb-5">
			<div className="container">
				<h2
					class="text-uppercase shop-header pt-5
                 pb-3 text-center"
				>
					Discover more nfts{" "}
				</h2>
				<div class="navigation d-flex flex-row">
					<div class="item-active item mx-auto">
						<span>All Categories</span>
					</div>
				</div>

				<div className="row mt-5">{renderedElements}</div>
			</div>
		</div>
	);
});
