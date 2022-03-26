import React from "react";
import { Fragment } from "react/cjs/react.development";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import axios from "axios";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init("0EwVKiKBoL2ZB8CwN");

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
export const SendToMailForm = () => {
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
		fetch("http://localhost:9000/testAPI")
			.then((res) => {res.text();
				console.log(res);
			})
			.then((res) => {
				
			});
		emailjs
			.send("service_80oduff", "template_6s7b5ee", {
				from_name: "иду нахуй",
				to_name: "fds",
				message: "fdsf",
				order_number: "231455",
			})
			.then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
				},
				function (error) {
					console.log("FAILED...", error);
				}
			);
		console.log(inputName, inputMail);
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
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
	);
};
