import { makeAutoObservable } from "mobx";

const linktoDB = "https://62379b86f5f6e28a154db22f.mockapi.io/nfttemplate";
class nftStore {
	nftList = [];
	setNFTList = ({ searchID }) => {
		console.log(searchID);
		if (searchID>=0) {
			console.log('search with param')
			fetch(`${linktoDB}/${searchID}`)
				.then((response) => response.json())
				.then((json) => {
					this.nftList = [json];
				});
			
		} else {
			console.log('common search')
			fetch(linktoDB)
				.then((response) => response.json())
				.then((json) => {
					this.nftList = [...json];
				});
		}
	};
	constructor() {
		makeAutoObservable(this);
	}
}
export default new nftStore();
