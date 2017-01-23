import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}//functional components have props objects from the parent component passed as an argument. class components have access directly to parent props without needing it to be passed as an argument, so they can be called with this.props at any time.

export default VideoList;
