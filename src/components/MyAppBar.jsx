import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

export default function MyAppBar(props) {
  const { title } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
}

MyAppBar.propTypes = {
  title: PropTypes.string.isRequired,
};
