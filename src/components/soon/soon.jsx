import React from "react";
import uploadGif from '../../img/gif/upload.gif';
export const Soon = () => {
	return (
		<div class="container text-center flex-cloumn">
			<h1>:( Will be Soon</h1>
			<h2>We are working on this</h2>
                        <img src={uploadGif} alt="upload soon" class="upload-img"/>
		</div>
	);
};
