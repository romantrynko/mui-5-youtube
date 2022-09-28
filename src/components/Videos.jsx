import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      alignItems='start'
      gap={2}>
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && (
              <ChannelCard
                channelDetail={item}
                marginTop='0'
              />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
