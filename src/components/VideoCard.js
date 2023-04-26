import React from 'react'



const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics } = info;
    const {channelTitle, title, thumbnails} = snippet;
  
    const formatViewCount = (count) => {
      if (count < 10000) {
        return count;
      } else if (count >= 10000 && count < 1000000) {
        return `${(count / 1000).toFixed(1)}K`;
      } else if (count >= 1000000 && count < 1000000000) {
        return `${(count / 1000000).toFixed(1)}M`;
      } else {
        return `${(count / 1000000000).toFixed(1)}B`;
      }
    }

   
  
    return (
      <div className='p-2 m-2 w-72' >
          <img className='rounded-lg ' alt='thumbnail' src={thumbnails.high.url} />
          <ul>
              <li className='font-bold'>{title}</li>
              <li>{channelTitle}</li>
              <li>{formatViewCount(statistics.viewCount)} views</li>
          </ul>
      </div>
    )
  }
  
  export default VideoCard;
  