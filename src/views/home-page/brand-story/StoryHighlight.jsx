import { Stack, Typography } from '@mui/material';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const StoryHighlight = ({ highlights }) => {
  return (
    <Stack spacing={2}>
      {highlights.map((item) => (
        <Stack direction="row" spacing={2} key={item} alignItems="center">
          <CheckCircleRoundedIcon color="success" />

          <Typography>{item}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default StoryHighlight;
