import Sheet, {SheetProps} from '@mui/joy/Sheet'

const RightContent = (props: SheetProps) => (
  <Sheet
    sx={{
      display: { xs: 'none', sm: 'initial' },
      borderLeft: '1px solid',
      borderColor: 'neutral.outlinedBorder',
    //   bgcolor: 'background.componentBg',
    bgcolor: 'transparent',
    background: 'rgba(255,255,255, 0.25)'
    }}
  >
    
  </Sheet>
)

export default RightContent;
