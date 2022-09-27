import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{
        height: {
          xs: 'auto', md: '92vh'
        },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
      }}>
        <Sidebar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 Trynko Roman ®
        </Typography>
      </Box>

      <Box>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
        >
          New <span style={{ color: '#fc1503' }}>videos</span>
        </Typography>

      </Box>
    </Stack>
  )
}

export default Feed