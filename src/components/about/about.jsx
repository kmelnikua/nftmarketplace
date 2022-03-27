import React from "react";
import image from "../../img/All-NFT-Categories-Illustration.svg";
export const About = () => {
	return (
		<div className="container py-4 mt-5">
			<div className="row">
				<div className="col-md-6 ">
					<h1>Building an open digital economy</h1>
					<p className="ff-Integral about-us--text mt-4">
						At NFTERS, we're excited about a brand new type of digital good
						called a non-fungible token, or NFT. NFTs have exciting new
						properties: they’re unique, provably scarce, tradeable, and usable
						across multiple applications. Just like physical goods, you can do
						whatever you want with them! You could throw them in the trash, gift
						them to a friend across the world, or go sell them on an open
						marketplace. But unlike physical goods, they're armed with all the
						programmability of digital goods.
					</p>
					<p className="ff-Integral about-us--text">
						A core part of our vision is that open protocols like Ethereum and
						interoperable standards like ERC-721 and ERC-1155 will enable
						vibrant new economies. We're building tools that allow consumers to
						trade their items freely, creators to launch new digital works, and
						developers to build rich, integrated marketplaces for their digital
						items.
					</p>
					<p  className="ff-Integral about-us--text">We’re proud to be the first and largest marketplace for NFTs.</p>
				</div>
				<div className="col-md-6">
					<img src={image} alt="aboutus"/>
				</div>
			</div>
		</div>
	);
};
