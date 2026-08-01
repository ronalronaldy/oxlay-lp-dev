import { Box, Typography, Button, Stack, Chip } from '@mui/material';

import StoryHighlight from './StoryHighlight';

const StoryContent = ({ story }) => {
  return (
    <Stack spacing={4}>
      <Chip label={story.badge} color="warning" />

      <Typography variant="h2" fontWeight={800}>
        {story.title}
      </Typography>

      <Typography color="text.secondary" lineHeight={1.8}>
        {story.description}
      </Typography>

      <StoryHighlight highlights={story.highlights} />

      <Button variant="contained" size="large">
        Pelajari Produk
      </Button>
    </Stack>
  );
};

export default StoryContent;
