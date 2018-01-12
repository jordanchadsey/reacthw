import React from "react";


const Wrapper = (props) => {
	console.log();
	return (
		<div>
			{props.children.map(item =>
				<img className="loadedImg" key={item.props.id} src={item.props.image}/>

			)}


		</div>
	);
};

export default Wrapper;