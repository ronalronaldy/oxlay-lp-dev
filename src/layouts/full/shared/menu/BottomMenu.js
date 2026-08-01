import { Stack, Tooltip, Typography } from '@mui/material';

export const BottomMenu = ({ icon, title, onClick, active = false }) => {
  return (
    <Tooltip title={title}>
      <Stack
        spacing={0.5}
        alignItems="center"
        onClick={onClick}
        sx={{
          cursor: 'pointer',

          transition: '.3s',

          color: active ? '#020202' : '#666',

          '& svg': {
            transition: '.3s',

            transform: active ? 'translateY(-6px) scale(1.1)' : 'none',
          },

          '& .MuiTypography-root': {
            fontWeight: active ? 700 : 500,
          },

          '&::before': {
            content: '""',

            width: active ? 24 : 0,

            height: 3,

            borderRadius: 50,

            background: '#020202',

            transition: '.3s',

            marginBottom: 2,
          },

          '&:hover': {
            color: '#020202',

            transform: 'translateY(-6px)',
          },
          mb:1
        }}
      >
        {icon}

        <Typography variant='caption'>
          {title}
        </Typography>
      </Stack>
    </Tooltip>
  );
};
