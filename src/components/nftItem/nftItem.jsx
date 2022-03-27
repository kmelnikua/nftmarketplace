import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import { Modal } from "@mui/material";

import "./modal.css";
import IMAGES from "../images";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	
	
};
export const NFTItem = observer(() => {
	let { id } = useParams();

	let data = IMAGES.filter((item) => item.id === parseInt(id));
	data = data[0];
	console.log(data);
	const [inputName, setInputName] = useState("");
	const [inputMail, setInputMail] = useState("");
	const [inputTerms, setInputTerms] = useState(false);
	const handleTermsChange=()=>{
		setInputTerms(!inputTerms);
	}
	const handleInputNameChange = (e) => {
		setInputName(e.target.value);
	};
	const handleInputMailChange = (e) => {
		setInputMail(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.user_name.value);
		if(inputTerms){
			fetch(
				`http://localhost:9000/testAPI?price=${Math.floor(data.price)}&name=${
					e.target.user_name.value
				}&nft_name=${
					data.title
				}&custom_fee=0.50&payment_method=card&custom_fee=0.70`
			)
				.then((res) => res.text())
				.then((res) => console.log(res));
	
			console.log(inputName, inputMail);
		}
		else{

		}
		
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	let element = (
		<div className="container mt-5">
			<div className="post">
				<div className="row">
					<div className="col-md-8 ">
						<img
							src={`../nfts/nft-shop/${data.imagesrc}`}
							className="img-fluid"
							alt={data.title}
						/>
					</div>
					<div className="col-md-4">
						<p className="text-uppercase card-header fw-bold">{data.title}</p>

						<p class="card-description fs-3 ff-DM fw-bold mt-3">
							Created by {data.creator}
						</p>
						<p class="card-description fs-4 ff-DM ">{data.description}</p>
						<p className="card-price--post">{data.price} $</p>
						<button className="buy-now-btn mt-auto" onClick={handleOpen}>
							Buy now
						</button>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
							style={{height:"auto"}}
						>
							<Box sx={style} class="modal-box">
								<div className="row">
									<div className="col-md-6 mx-auto">
										<div className="container">
											<form onSubmit={handleSubmit}>
												<div className="row">
													<div className="col-md-6 mx-auto">
														<h3>Payment</h3>

														<label>Your name:</label><input type="text" value={inputName}name="user_name" onChange={handleInputNameChange}/>
														<label>Your E-Mail:</label><input type="text" value={inputMail} name="user_mail" onChange={handleInputMailChange}/>
														<label for="cname">Name on Card</label>
														<input
															type="text"
															id="cname"
															name="cardname"
															placeholder="John More Doe"
														/>
														<label for="ccnum">Credit card number</label>
														<input
															type="text"
															id="ccnum"
															name="cardnumber"
															placeholder="1111-2222-3333-4444"
														/>
														<label for="expmonth">Exp Month</label>
														<input
															type="text"
															id="expmonth"
															name="expmonth"
															placeholder="September"
														/>

														<div className="row">
															<div className="col-50">
																<label for="expyear">Exp Year</label>
																<input
																	type="text"
																	id="expyear"
																	name="expyear"
																	placeholder="2018"
																/>
															</div>
															<div className="col-50">
																<label for="cvv">CVV</label>
																<input
																	type="text"
																	id="cvv"
																	name="cvv"
																	placeholder="352"
																/>
															</div>
															<label>
													<input
														type="checkbox"
														{ ...inputTerms ? `checked`:``}
														name="sameadr"
														onChange={()=>handleTermsChange()}
														
													/>
													<span>I agree the </span>
													<Link to="/termsofuse" style={{ color: "blue" }}>
														Terms of use
													</Link>
												</label>
														</div>
													</div>
												</div>
												
												<input
													type="submit"
													value="Continue to checkout"
													className="btn"
													
												/>
											</form>
										</div>
									</div>
								</div>
							</Box>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
	return <div>{element}</div>;
});
