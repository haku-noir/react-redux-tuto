import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function MyInput(props) {
  const { task, ...other } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Task</InputLabel>
        <Input id="component-simple" value={task} {...other} />
      </FormControl>
    </div>
  );
}

MyInput.propTypes = {
  task: PropTypes.string,
};
