import {
  makeStyles,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { list } from "./rightTagList";

const useStyles = makeStyles((theme) => ({
}));

const Rightbar = ({toggleDrawer}) => {
  const classes = useStyles();
  return (
    list(toggleDrawer)
  );
};

export default Rightbar;
