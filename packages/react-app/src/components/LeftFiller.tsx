import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem, { listItemClasses } from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const LeftFiller = () => {

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Box
      sx={{
        width: 320,
        pl: '24px',
      }}
    >
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': 'black',
          '--joy-palette-neutral-plainHoverBg': 'rgba(255,255,255, 0.25)',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },

          '--List-insetStart': '32px',
          '--List-item-paddingY': '0px',
          '--List-item-paddingRight': '16px',
          '--List-item-paddingLeft': '21px',
          '--List-item-startActionWidth': '0px',
          '--List-item-startActionTranslateX': '-50%',

          [`& .${listItemButtonClasses.root}`]: {
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderColor: 'currentColor',
          },
          [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
            border: 'none',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem nested>
          <ListItem component="div" startAction={<ReceiptLong />}>
            <Typography level="body3" sx={{ textTransform: 'uppercase' , color: 'black'}}>
              Navigation
            </Typography>
          </ListItem>
          <List sx={{ '--List-gap': '0px' }}>
            <ListItem>
              <ListItemButton selected>Overview</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ '--List-gap': '0px' }}>
          <ListItemButton>Quick Start</ListItemButton>
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItemButton>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Tutorials
            </Typography>
            <Typography component="span" level="body3" sx={{ ml: 1 , color: 'darkkhaki'}}>
              3
            </Typography>
          </ListItemButton>
          {open && (
            <List sx={{ '--List-item-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>
                  0. Connecting To Your External Account
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  1. Create and Deploy Your First Contract Wallet
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                    2. Transferring Tokens With Your Contract Wallet
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen2((bool) => !bool)}
            >
              <KeyboardArrowDown
                sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItemButton>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open2 ? 'bold' : undefined,
                color: open2 ? 'text.primary' : 'inherit',
              }}
            >
              Wallets
            </Typography>
            <Typography component="span" level="body3" sx={{ ml: 1 , color: 'darkkhaki'}}>
              2
            </Typography>
          </ListItemButton>
          {open2 && (
            <List sx={{ '--List-item-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Example</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>New Wallet</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  )
}

export default LeftFiller