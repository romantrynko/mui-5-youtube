import React, { useEffect, useState } from 'react';
import fetchFromApi from '../utils/fetchFromAPI';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

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
    <Box minHeight='95vh'>
      <Box>
        <div />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
