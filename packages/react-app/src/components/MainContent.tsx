import Box, { BoxProps } from '@mui/joy/Box';

const MainContent = (props: BoxProps) => 

    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ 
        p: 2,
        background: 'rgba(255,255,255, 0.25)',
        boxShadow: 'inset 3px 3px 3px 3px rgb(31 38 35 / 7%)'
      }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />

  export default MainContent