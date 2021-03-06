import * as React from 'react';
import Box, { BoxProps } from '@mui/joy/Box';


const Layout = (props: BoxProps) =>

  <Box
    {...props}
    sx={[
      {
        bgcolor: '#FFDEA6',
        display: 'grid',
        // gridTemplateColumns: {
        //   xs: '1fr',
        //   sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
        //   md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
        // },
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(64px, 1fr) minmax(450px, 1fr)',
            md: '1fr 50% 1.5fr'
        },
        gridTemplateRows: '64px 1fr',
        minHeight: '100vh',
        // gridTemplateAreas: 'header header header header header header nav nav main main main main'
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />

export default Layout;
