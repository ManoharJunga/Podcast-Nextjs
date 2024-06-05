import React from 'react';

const PodcastDetails = ({ params }: { params: { postId: string } }) => {
  return (
    <p className='text-white-1'>PodcastDetails for {params.postId}</p>
  );
};

export default PodcastDetails;
