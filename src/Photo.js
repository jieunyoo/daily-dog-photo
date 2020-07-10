import React from 'react';

const Photo = (props) => {
	return (
		<section>
				<img class="resize" src={props.url}  />
		</section>
	)
}

export default Photo;
