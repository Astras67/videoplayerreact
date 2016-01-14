import React from 'react';
import VideoListItem from './video_list_item';

const {
	Component
} = React;
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />);
	});
	return (
		<ul className="col-md-4 list-group">
		{videoItems}
		</ul>
		);
};
export default VideoList;

/*var array2 = [1, 2, 3];
		array2.map(function(number) {
			return ('<div>' + number '</div>');
		});

		var array = [1, 2, 3];
		array.map(function(number) {
			return number * 2
		}); */
	