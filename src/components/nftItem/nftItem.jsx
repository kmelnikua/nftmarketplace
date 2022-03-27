import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import nftStore from "../../store/nftStore.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { init } from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import emailjs from "@emailjs/browser";
import "./modal.css";
init("sEQ_RsU-VlRhFk9s6");
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
	let { nftList, setNFTList } = nftStore;
	const [inputName, setInputName] = useState("");
	const [inputMail, setInputMail] = useState("");
	const handleInputNameChange = (e) => {
		setInputName(e.target.value);
	};
	const handleInputMailChange = (e) => {
		setInputMail(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.user_name.value);
		fetch(
			`http://localhost:9000/testAPI?price=${Math.floor(
				nftList[0].price
			)}&name=${e.target.user_name.value}&nft_name=${
				nftList[0].title
			}&custom_fee=0.50&payment_method=card&custom_fee=0.70`
		)
			.then((res) => res.text())
			.then((res) => console.log(res));

		console.log(inputName, inputMail);
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	let { id } = useParams();
	useEffect(() => {
		setNFTList({ searchID: id });
		console.log(id, nftList);
	}, id);

	if (nftList.length) {
		let element = (
			<div className="container mt-5">
				<div className="post">
					<div className="row">
						<div className="col-md-8 ">
							<img
								src={nftList[0].NFTimg}
								className="img-fluid"
								alt={nftList[0].title}
							/>
						</div>
						<div className="col-md-4">
							<p className="text-uppercase card-header fw-bold">
								{nftList[0].title}
							</p>
							<p className="card-detail">{nftList[0].text}</p>
							<p className="card-description">{nftList[0].NFTHistory}</p>

							<p className="card-price--post">{nftList[0].price} $</p>

							<button className="buy-now-btn" onClick={handleOpen}>
								Buy now
							</button>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<Box sx={style} class="modal-box">
									<div className="row">
										<div className="col-75">
											<div className="container">
												<form action="/action_page.php">
													<div className="row">
														

														<div className="col-md-6 mx-auto">
															<h3>Payment</h3>
															<label for="fname">Accepted Cards</label>
															<div className="icon-container">
																<i
																	className="fa fa-cc-visa"
																	style={{ color: "navy" }}
																></i>
																<i
																	className="fa fa-cc-amex"
																	style={{ color: "blue" }}
																></i>
																<i
																	className="fa fa-cc-mastercard"
																	style={{ color: "red" }}
																></i>
																<i
																	className="fa fa-cc-discover"
																	style={{ color: "orange" }}
																></i>
															</div>
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
															</div>
														</div>
													</div>
													<label>
														<input
															type="checkbox"
															checked="checked"
															name="sameadr"
														/>{" "}
														I agree the <a href="#" style={{color:"blue"}}>Terms of use</a>
													</label>
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
	} else {
		return <div></div>;
	}
});
