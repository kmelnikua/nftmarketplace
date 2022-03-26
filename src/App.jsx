import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	Header,
	Footer,
	Hero,
	AmazeNFT,
	VideoComponent,
	Shop,
	NFTItem,
	SendToMailForm,
} from "./components";
import React from "react";
import { observer } from "mobx-react-lite";


const App = observer(() => {
	return (
		<div className="App d-flex flex-column">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Hero />
						<AmazeNFT />
						<VideoComponent />
						<Shop />
					</Route>
					<Route exact path="/nft/:id">
						<NFTItem />
						
						
					</Route>
					
				</Switch>
					
				<Footer></Footer>
			</Router>
		</div>
	);
});
export default App;
