import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle
} from '../utils/constants';

export default function VideoCard({
  video: {
    id: { videoId },
    snippet
  }
}) {
  return (
    <Card
      sx={{
        width: {
          md: '320px',
          xs: '100%'
        },
        boxShadow: 'none',
        borderRadius: 0
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: 106 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }>
          <Typography
            variant='subtitle2'
            fontWeight='bold'
            color='gray'>
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: 'gray',
                ml: '5px'
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
