import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import checkSession from '../../helper/checkSession';
import Logout from '../../services/LogoutService'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let session = checkSession()
  
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Welcome {session[0]}
          </Typography>
          <div hidden={!session[1]}>
          <Button onClick={Logout}   color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
