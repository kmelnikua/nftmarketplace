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
			)}&name=${e.target.user_name.value}`
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
								<Box sx={style}>
									<form onSubmit={handleSubmit} action="./send.php">
										<label>
											Name:
											<input
												type="text"
												name="user_name"
												value={inputName}
												onChange={handleInputNameChange}
												required
											/>
										</label>
										<br />
										<label>E-mail</label>
										<input
											type="text"
											name="user_email"
											value={inputMail}
											onChange={handleInputMailChange}
											required
										></input>
										<button type="submit">submit</button>
									</form>
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
