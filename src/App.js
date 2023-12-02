import './App.css';
import {Grid} from '@material-ui/core'
import Youtube from './api/Youtube';
import SearchBar from './Component/SearchBar';
import VideoList from './Component/VideoList';
import Video from './Component/Video';

function App() {
  return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs= {12} >
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/* Seach bar */}
              <SearchBar/>
            </Grid>
            <Grid item xs={8}>
              {/* video */}
              <Video/>
            </Grid>
            <Grid item xs={4}>
              {/* video list*/}
              <VideoList/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default App;
