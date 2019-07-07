import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ReactCSSTransistionGroup from 'react-addons-css-transition-group';
import '../styles/MyList.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function MyList(props) {
  const { tasks } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ReactCSSTransistionGroup transitionName="ListItem" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {
            tasks.map((item, i) => {
              return (
                <ListItem key={i}>
                  <ListItemText primary={`・${item}`} />
                </ListItem>
              );
            })
          }
        </ReactCSSTransistionGroup>
      </List>
    </div>
  );
}

MyList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
};
