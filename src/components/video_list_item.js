import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // same as writing const video = props.video; ES6 looks at the argument object, sees that it has a prop named video, and creates a new variable called video.
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className='video-list media'>
        <div className='media-left'>
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
