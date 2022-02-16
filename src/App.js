import { AppBar, Container, Grid, Typography, Toolbar, Tabs, Tab } from '@mui/material'
import { styled } from '@mui/system';

const CustomizedToolbar = styled(Toolbar)({
  justifyContent: 'flex-end',
  alignItems: 'center',
})

const CustomizedTab = styled(Tab)({
  color: 'black',
  fontWeight: 400,
  fontFamily: 'Helvetica'
})

function App() {
  return (
    <>
    <AppBar position="relative">
      <CustomizedToolbar>
        <Tabs>
          <CustomizedTab label="home"></CustomizedTab>
          <CustomizedTab label="What I can do for you"></CustomizedTab>
          <CustomizedTab label="Projects"></CustomizedTab>
        </Tabs>
      </CustomizedToolbar>
    </AppBar>
    <Container>
      <Grid>
        <Typography>ABC</Typography>
      </Grid>
    </Container>
    </>
  );
}

export default App;
