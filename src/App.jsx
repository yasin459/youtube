import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  MuiThemeProvider,
  SwipeableDrawer,
} from "@material-ui/core";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { Mail } from "@mui/icons-material";
import { isMobile } from "./constants";
import { theme } from "./theme";
import { list } from "./components/rightTagList";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });
  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    console.log("hello: ", isMobile);
    setState({ [anchor]: open });
  };
  
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar toggleDrawer={toggleDrawer(anchor, true)} />

      <Grid container>
        {isMobile ? (
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(toggleDrawer)}
          </SwipeableDrawer>
        ) : null}
        <Grid item sm={3} md={2} className={classes.right}>
          <Rightbar  toggleDrawer= {toggleDrawer}/>
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <Feed />
        </Grid>
      </Grid>
      <Add />
    </MuiThemeProvider>
  );
};

export default App;
