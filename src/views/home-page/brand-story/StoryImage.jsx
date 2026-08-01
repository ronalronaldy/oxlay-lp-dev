import {
  Box,
} from '@mui/material';

const StoryImage = ({ image }) => {

  return (

    <Box
      component="img"
      src={image}
      alt="OX-LAY Brand Story"
      sx={{

        width: '100%',
        display: 'block',

        borderRadius: 5,

        objectFit: 'cover',

        boxShadow:
          '0 30px 80px rgba(0,0,0,.12)',

      }}
    />

  );

};

export default StoryImage;