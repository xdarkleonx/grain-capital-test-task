import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';

const FormTextField = (props) => {
  const { input, meta } = props;

  const classes = useStyles();

  const error = meta.touched && meta.invalid
    ? meta.error
    : '';
  
  return (
    <TextField
      fullWidth
      type={props.type}
      variant="standard"
      label={`${props.label} ${error}`}
      placeholder={props.placeholder}
      InputLabelProps={{ shrink: true }}
      style={styles.textField}
      className={classes.textField}
      error={meta.touched && meta.invalid}
      value={input.value}
      onChange={input.onChange}
    />
  )
}

export default FormTextField;

const useStyles = makeStyles(() => ({
  textField: {
    marginTop: 10,
    width: '100%',
    '& .MuiInput-underline:before': {
      borderBottomColor: '#e0e0e0',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#d6d6d6',
    },
    '& .MuiInputBase-input': {
      paddingLeft: 5,
      color: '#474d5b',
      fontWeight: 500,
    },
  },
}))

const styles = {
  textField: {
    marginTop: 10
  },
}