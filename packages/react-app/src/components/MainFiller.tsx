import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import MenuIcon from '@mui/icons-material/Menu';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import BookRoundedIcon from '@mui/icons-material/BookRounded';

const MainFiller = () => (
    <Sheet
    variant="outlined"
    sx={{
      borderRadius: 'sm',
      gridColumn: '1/-1',
      bgcolor: 'transparent',
      borderColor: 'transparent',
      display: { xs: 'none', sm: 'grid' },
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      '& > *': {
        p: 2,
        '&:nth-child(n):not(:nth-last-child(-n+4))': {
          borderBottom: '1px solid',
          borderColor: 'antiquewhite',
        },
      },
    }}
  >
    <Typography level="body3" fontWeight="md" noWrap>
      Type
    </Typography>
    <Typography level="body3" fontWeight="md" noWrap>
      Date
    </Typography>
    <Typography level="body3" fontWeight="md" noWrap>
      Hash
    </Typography>
    <Typography level="body3" fontWeight="md" noWrap>
      Source
    </Typography>

    <Typography
      level="body2"
      startDecorator={<ArrowBackIcon color="primary" />}
      sx={{ alignItems: 'flex-start' }}
    >
      Receive
    </Typography>
    <Typography level="body2">21 June 2022, 3PM</Typography>
    <Typography level="body2" sx={{ color: '#000' }}>
      987.5MB
    </Typography>
    <Box>
      <AvatarGroup
        size="sm"
        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
      >
        <Avatar
          src="https://i.pravatar.cc/24?img=6"
          srcSet="https://i.pravatar.cc/48?img=6 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=7"
          srcSet="https://i.pravatar.cc/48?img=7 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=8"
          srcSet="https://i.pravatar.cc/48?img=8 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=9"
          srcSet="https://i.pravatar.cc/48?img=9 2x"
        />
      </AvatarGroup>
    </Box>
    <Typography
      level="body2"
      startDecorator={<ArrowForwardIcon color="primary" />}
      sx={{ alignItems: 'flex-start' }}
    >
      Send
    </Typography>
    <Typography level="body2">26 May 2022, 7PM</Typography>
    <Typography level="body2" sx={{ color: 'success.600' }}>
      123.3KB
    </Typography>
    <Box>
      <AvatarGroup
        size="sm"
        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
      >
        <Avatar
          src="https://i.pravatar.cc/24?img=6"
          srcSet="https://i.pravatar.cc/48?img=6 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=7"
          srcSet="https://i.pravatar.cc/48?img=7 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=8"
          srcSet="https://i.pravatar.cc/48?img=8 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=9"
          srcSet="https://i.pravatar.cc/48?img=9 2x"
        />
      </AvatarGroup>
    </Box>
    <Typography
      level="body2"
      startDecorator={<CompareArrowsIcon color="primary" />}
      sx={{ alignItems: 'flex-start' }}
    >
      Send
    </Typography>
    <Typography level="body2">20 May 2022, 7PM</Typography>
    <Typography level="body2" sx={{ color: 'success.600' }}>
      123.3KB
    </Typography>
    <Box>
      <AvatarGroup
        size="sm"
        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
      >
        <Avatar
          src="https://i.pravatar.cc/24?img=6"
          srcSet="https://i.pravatar.cc/48?img=6 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=7"
          srcSet="https://i.pravatar.cc/48?img=7 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=8"
          srcSet="https://i.pravatar.cc/48?img=8 2x"
        />
        <Avatar
          src="https://i.pravatar.cc/24?img=9"
          srcSet="https://i.pravatar.cc/48?img=9 2x"
        />
      </AvatarGroup>
    </Box>
  </Sheet>
)

export default MainFiller