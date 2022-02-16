import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import './Tabs.css';

function App() {
  return (
    <AppBar className="appbar">
      <Toolbar className="tabs">
        <Tabs>
          <Tab label="home"></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default App;
