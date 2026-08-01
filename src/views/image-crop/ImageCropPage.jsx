import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

import PageContainer from '../../components/container/PageContainer';
import ImageCropper from '../../components/image-crop/ImageCropper';

const ImageCropPage = () => {
  return (
    <PageContainer title="Image Cropper" description="Image Cropper and Base64 Generator">
      <Box>
        {/* Breadcrumb */}

        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>

          <Typography color="text.primary">Image Cropper</Typography>
        </Breadcrumbs>

        {/* Page */}

        <ImageCropper />
      </Box>
    </PageContainer>
  );
};

export default ImageCropPage;
