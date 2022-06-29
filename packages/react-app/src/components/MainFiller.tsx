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
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Paper } from '@mui/material';

const MainFiller = () => (

    <Box
    sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 2,
    }}
    >
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
        Origen
    </Typography>

    <Typography
        level="body2"
        startDecorator={<CompareArrowsIcon color="primary" />}
        sx={{ alignItems: 'flex-start' }}
    >
        Approve
    </Typography>
    <Typography level="body2">28 June 2022, 3PM</Typography>
    <Typography level="body2" sx={{ color: 'success.600' }}>
        987.5MB
    </Typography>
    <Box>
        <AvatarGroup
        size="sm"
        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px', }}
        >
        <Avatar
            src="https://i.pravatar.cc/24?img=6"
            srcSet="https://i.pravatar.cc/48?img=6 2x"
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
    <Typography level="body2">26 June 2022, 7PM</Typography>
    <Typography level="body2" sx={{ color: 'success.600' }}>
        123.3KB
    </Typography>
    <Box>
        <AvatarGroup
        size="sm"
        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
        >
        <Avatar
            src="https://i.pravatar.cc/24?img=7"
            srcSet="https://i.pravatar.cc/48?img=7 2x"
        />
        </AvatarGroup>
    </Box>
    <Typography
        level="body2"
        startDecorator={<CompareArrowsIcon color="primary" />}
        sx={{ alignItems: 'flex-start' }}
    >
        Receive
    </Typography>
    <Typography level="body2">23 June 2022, 3PM</Typography>
    <Typography level="body2" sx={{ color: 'success.600' }}>
        987.5MB
    </Typography>
    <Box>
        <AvatarGroup
        size="sm"
        sx={{ '--AvatarGroup-gap': '-8px', '--Avatar-size': '24px' }}
        >
            <Avatar
            src="https://i.pravatar.cc/24?img=9"
            srcSet="https://i.pravatar.cc/48?img=9 2x"
            />
        </AvatarGroup>
    </Box>
    </Sheet>
    <Sheet
    variant="outlined"
    sx={{
        display: { xs: 'inherit', sm: 'none' },
        borderRadius: 'sm',
        bgcolor: 'background.componentBg',
        overflow: 'auto',
        '& > *': {
        '&:nth-child(n):not(:nth-last-child(-n+4))': {
            borderBottom: '1px solid',
            borderColor: 'divider',
        },
        },
    }}
    >
    <List
        aria-labelledby="table-in-list"
        sx={{
        '& .JoyListItemButton-root': { p: '0px' },
        }}
    >
        <ListItem>
        <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
            <ListItemContent sx={{ p: 2 }}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 1,
                }}
            >
                <Typography
                level="body2"
                startDecorator={<FolderOpenIcon color="primary" />}
                sx={{ alignItems: 'flex-start' }}
                >
                Travel pictures
                </Typography>
                <Typography level="body2" sx={{ color: 'success.600' }}>
                987.5MB
                </Typography>
            </Box>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
                }}
            >
                <Box>
                <AvatarGroup
                    size="sm"
                    sx={{
                    '--AvatarGroup-gap': '-8px',
                    '--Avatar-size': '24px',
                    }}
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
                <Typography level="body2">21 June 2022, 3PM</Typography>
            </Box>
            </ListItemContent>
        </ListItemButton>
        </ListItem>
        <ListDivider sx={{ m: 0 }} />
        <ListItem>
        <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
            <ListItemContent sx={{ p: 2 }}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 1,
                }}
            >
                <Typography
                level="body2"
                startDecorator={<FolderOpenIcon color="primary" />}
                sx={{ alignItems: 'flex-start' }}
                >
                Important documents
                </Typography>
                <Typography level="body2" sx={{ color: 'success.600' }}>
                123.3KB
                </Typography>
            </Box>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
                }}
            >
                <Box>
                <AvatarGroup
                    size="sm"
                    sx={{
                    '--AvatarGroup-gap': '-8px',
                    '--Avatar-size': '24px',
                    }}
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
                <Typography level="body2">26 May 2022, 7PM</Typography>
            </Box>
            </ListItemContent>
        </ListItemButton>
        </ListItem>
    </List>
    </Sheet>

    
    <Card component="li" sx={{ flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://lh3.googleusercontent.com/SPNB-h3sm0r92xkA38JlhKXkYJSkjz9s7K-tSmlxlB644yWGYXm-4MvOMG1COOsD810U9Y_uVe1-nAb_toNYoEgJDAIoF3sli3SthEs"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>


      <Card component="li" sx={{ flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://img.seadn.io/files/07508d7d35de52d1e1c0c7f776598c09.png?fit=max&w=600"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>

    <Card component="li" sx={{ flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://lh3.googleusercontent.com/lqNpp74fp5RhDcW8cyoIrSz5uRfv1NgpljESOhpqwsnJ4jzfVlSAj4XulOEO-ZXBQxrMcabpIIEP3FhH3cCB-8GMKi_jln5HWsKayq4=s0"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
    

      <Card component="li" sx={{flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://lh3.googleusercontent.com/nNKmTxADfn_HqzMzHg-me89vxFVz5taBiMDnXNQ98od0-fJ51HulfQuFgRDgH5mbfBjeny29VKFX9UJ_Cz-4FrXbYxFeyGHjHMW7O74=s0"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://img.seadn.io/files/e688abcbbcaa359f51f74a44d0c4dadc.png?fit=max"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
    {/* </Box> */}
    <Card component="li" sx={{flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
            <img
                src="https://openseauserdata.com/files/34a280abcb7956b9fe09c5836765d0ba.svg"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                alt=""
            />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Loot
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://lh3.googleusercontent.com/W1c8Nn8vEiJmUxOKTqs-0Sg5BQEYZmKfymJRbjYkQDMtU64dcbuhnm-pdN4YFJvRxGPhbRbX4Q25aNbUUD3xsjWC"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Kitty
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{flexGrow: 1 }}>
        <CardCover sx={{aspectRatio:"1/1"}}>
          <img
            src="https://lh3.googleusercontent.com/Vv8iCkMB-3F-D_COxv9EJiO4r8Z-FtLUnlJNmT_47Q1BjvwUwaWDNO3OfU_kQSo4ncOd-fs9G6GQneypcunkR_OIj7BRlTPNvRBa13w"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Mask
          </Typography>
        </CardContent>
      </Card>
    </Box>
)

export default MainFiller