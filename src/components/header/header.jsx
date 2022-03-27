import React from "react";
import logo from "../../img/nfters.svg";
import searchIcon from "../../img/search.svg";
import { Link } from "react-router-dom";
export const Header = () => {
	return (
		<header>
			<div className="container-fluid">
				<div className="container">
					<nav className="navbar navbar-expand-lg ">
						<div className="container-fluid">
							<a className="navbar-brand position-relative p-0" href="/">
								<img className="img-fluid" src={logo} alt="logo" />
							</a>

							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="/navbarNavAltMarkup"
								aria-controls="navbarNavAltMarkup"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div className="navbar-nav ff-DM">
									<a className="nav-link me-3" aria-current="page" href="/">
										Marketplace
									</a>

									<Link className="nav-link me-3" to="/about">
										About
									</Link>
								</div>
							</div>

							<div className="btns ff-DM">
								<form className="d5">
									<input type="text" placeholder="Search" />
									<img className="img-fluid" src={searchIcon} alt="Search" />
								</form>
								<Link to="/soon">
									<button className="common-btn upload-btn">Upload</button>
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};
