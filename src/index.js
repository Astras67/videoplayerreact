import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDsyGmIWqInjfQuNuwmKVNYR0tL_pn4fZE';
const { Component } = React;
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	//this.setState({videos: videos }); only works when key and value are same property name
	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
		console.log(videos);
		this.setState({ 
			videos: videos,
			selectedVideo: videos[0]
		 }); 
	});

	}
	render() {
		//creates a version of videoSearch that can only be called every 300ms
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
		
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos}/>
			</div>
			);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));

/*const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container')); */
