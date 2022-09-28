import React, { useEffect, useState } from 'react';
import fetchFromApi from '../utils/fetchFromAPI';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ChannelCard, Videos } from '.';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box
      minHeight='95vh'
      width='100%'
      display='flex'
      flexDirection='column'>
      <Box>
        <div
          style={{
            background:
              'radial-gradient(circle, rgba(147,0,29,1) 0%, rgba(31,15,17,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard
          channelDetail={channelDetail}
          marginTop='-110px'
        />
      </Box>
      <Box
        p='2'
        sx={{ display: 'flex', margin: '0 auto', width: '90%' }}>
        <Box
          width='100%'
          sx={{ display: 'flex', alignItems: 'center' }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
