import { TextField } from '@mui/material';

const TextTrx = (props) => {
  return (
    <TextField 
      {...props}
      variant="outlined"
      InputProps={{
        ...props.InputProps,
        sx: {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      }}
    />
  );
};

export default TextTrx;
