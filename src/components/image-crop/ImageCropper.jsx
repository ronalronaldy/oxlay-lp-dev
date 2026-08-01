import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';

import { CloudUpload, ContentCopy, Download, ImageOutlined, Refresh } from '@mui/icons-material';

import Cropper from 'react-easy-crop';

/* =========================================================
   Create Image
========================================================= */

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = url;
  });

/* =========================================================
   Crop Image
========================================================= */

const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Gagal membuat gambar.'));
          return;
        }

        resolve(blob);
      },
      'image/jpeg',
      0.95,
    );
  });
};

/* =========================================================
   Component
========================================================= */

const ImageCropper = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const [aspect, setAspect] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [croppedImage, setCroppedImage] = useState(null);

  const [base64, setBase64] = useState('');

  const [error, setError] = useState('');

  const [success, setSuccess] = useState('');

  /* =========================================================
     Upload
  ========================================================= */

  const handleUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Minimum 1024 KB = 1 MB
    const minimumSize = 1024 * 1024;

    if (file.size < minimumSize) {
      setError(
        `Ukuran gambar minimal 1024 KB (1 MB). File Anda hanya ${(file.size / 1024).toFixed(
          1,
        )} KB.`,
      );

      event.target.value = '';
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('File yang dipilih harus berupa gambar.');

      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);

      setCrop({
        x: 0,
        y: 0,
      });

      setZoom(1);

      setCroppedImage(null);
      setBase64('');
    };

    reader.readAsDataURL(file);

    event.target.value = '';
  };

  /* =========================================================
     Crop Complete
  ========================================================= */

  const handleCropComplete = useCallback((_, croppedAreaPixelsValue) => {
    setCroppedAreaPixels(croppedAreaPixelsValue);
  }, []);

  /* =========================================================
     Generate Crop
  ========================================================= */

  const handleGenerate = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      const blob = await getCroppedImg(imageSrc, croppedAreaPixels);

      const objectUrl = URL.createObjectURL(blob);

      setCroppedImage(objectUrl);

      /* Convert Blob -> Base64 */

      const reader = new FileReader();

      reader.onloadend = () => {
        setBase64(reader.result);
      };

      reader.readAsDataURL(blob);

      setSuccess('Gambar berhasil di-crop.');
    } catch (err) {
      console.error(err);

      setError('Gagal melakukan crop gambar.');
    }
  };

  /* =========================================================
     Aspect Ratio
  ========================================================= */

  const handleAspectChange = (event) => {
    const value = Number(event.target.value);

    setAspect(value);

    setCrop({
      x: 0,
      y: 0,
    });

    setZoom(1);

    setCroppedImage(null);
    setBase64('');
  };

  /* =========================================================
     Copy Base64
  ========================================================= */

  const handleCopy = async () => {
    if (!base64) return;

    try {
      await navigator.clipboard.writeText(base64);

      setSuccess('Base64 berhasil disalin.');
    } catch (err) {
      console.error(err);

      setError('Gagal menyalin Base64.');
    }
  };

  /* =========================================================
     Download
  ========================================================= */

  const handleDownload = () => {
    if (!croppedImage) return;

    const link = document.createElement('a');

    link.href = croppedImage;

    link.download = aspect === 1 ? 'image-crop-1x1.jpg' : 'image-crop-3x4.jpg';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  /* =========================================================
     Reset
  ========================================================= */

  const handleReset = () => {
    if (croppedImage) {
      URL.revokeObjectURL(croppedImage);
    }

    setImageSrc(null);
    setCroppedImage(null);
    setBase64('');

    setCrop({
      x: 0,
      y: 0,
    });

    setZoom(1);

    setAspect(1);
  };

  /* =========================================================
     Cleanup
  ========================================================= */

  useEffect(() => {
    return () => {
      if (croppedImage) {
        URL.revokeObjectURL(croppedImage);
      }
    };
  }, [croppedImage]);

  /* =========================================================
     Render
  ========================================================= */

  return (
    <>
      <Card>
        <CardContent>
          {/* =================================================
              Header
          ================================================= */}

          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            justifyContent="space-between"
            alignItems={{
              xs: 'flex-start',
              sm: 'center',
            }}
            spacing={2}
            mb={3}
          >
            <Box>
              <Typography variant="h5" fontWeight={600} mb={0.5}>
                Image Cropper
              </Typography>

              <Typography variant="body2" color="textSecondary">
                Crop gambar dan generate Base64 secara langsung.
              </Typography>
            </Box>

            {imageSrc && (
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<Refresh />}
                onClick={handleReset}
              >
                Reset
              </Button>
            )}
          </Stack>

          {/* =================================================
              Upload
          ================================================= */}

          {!imageSrc && (
            <Box
              sx={{
                border: '2px dashed',
                borderColor: 'primary.main',
                borderRadius: 2,
                minHeight: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 4,
                bgcolor: 'action.hover',
              }}
            >
              <Stack alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ImageOutlined fontSize="large" />
                </Box>

                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    Upload gambar
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Format JPG, JPEG, PNG, WEBP
                  </Typography>

                  <Typography variant="caption" color="textSecondary">
                    Ukuran minimum 1024 KB
                  </Typography>
                </Box>

                <Button component="label" variant="contained" startIcon={<CloudUpload />}>
                  Pilih Gambar
                  <input hidden type="file" accept="image/*" onChange={handleUpload} />
                </Button>
              </Stack>
            </Box>
          )}

          {/* =================================================
              Editor
          ================================================= */}

          {imageSrc && (
            <Grid container spacing={3}>
        {/* =====================================================
        Aspect Ratio
        ====================================================== */}
              <Grid item xs={12}>
                <FormControl size="small" sx={{ minWidth: 160 }}>
                  <InputLabel>Aspect Ratio</InputLabel>

                  <Select value={aspect} label="Aspect Ratio" onChange={handleAspectChange}>
                    <MenuItem value={1}>1 : 1</MenuItem>

                    <MenuItem value={3 / 4}>3 : 4</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* =====================================================
        Crop Area
    ====================================================== */}
              <Grid item xs={12} lg={8}>
                <Typography variant="subtitle1" fontWeight={600} mb={1.5}>
                  Crop Area
                </Typography>

                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: {
                      xs: 350,
                      sm: 450,
                      md: 500,
                    },
                    bgcolor: '#111',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={aspect}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={handleCropComplete}
                  />
                </Box>

                {/* Zoom */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" color="textSecondary">
                    Zoom
                  </Typography>

                  <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(_, value) => setZoom(value)}
                  />
                </Box>

                <Button fullWidth variant="contained" size="large" onClick={handleGenerate}>
                  Crop & Generate Base64
                </Button>
              </Grid>

              {/* =====================================================
        Preview
    ====================================================== */}
              <Grid item xs={12} lg={4}>
                <Typography variant="subtitle1" fontWeight={600} mb={1.5}>
                  Preview
                </Typography>

                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 350,
                    mx: 'auto',
                    aspectRatio: aspect === 1 ? '1 / 1' : '3 / 4',
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {croppedImage ? (
                    <Box
                      component="img"
                      src={croppedImage}
                      alt="Cropped"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <Stack alignItems="center" spacing={1}>
                      <ImageOutlined color="disabled" />

                      <Typography variant="body2" color="textSecondary">
                        Preview hasil crop
                      </Typography>
                    </Stack>
                  )}
                </Box>

                {croppedImage && (
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Download />}
                    onClick={handleDownload}
                    sx={{ mt: 2 }}
                  >
                    Download JPG
                  </Button>
                )}
              </Grid>

              {/* =====================================================
        Base64 Header
    ====================================================== */}
              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction={{
                    xs: 'column',
                    sm: 'row',
                  }}
                  justifyContent="space-between"
                  alignItems={{
                    xs: 'flex-start',
                    sm: 'center',
                  }}
                  spacing={2}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6" fontWeight={600}>
                      Base64 Output
                    </Typography>

                    {base64 && (
                      <Chip size="small" label={`${(base64.length / 1024).toFixed(1)} KB`} />
                    )}
                  </Stack>

                  <Button
                    variant="contained"
                    startIcon={<ContentCopy />}
                    disabled={!base64}
                    onClick={handleCopy}
                  >
                    Copy Text
                  </Button>
                </Stack>
              </Grid>

              {/* =====================================================
        Base64 Content
    ====================================================== */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: '#111827',
                    color: '#e5e7eb',
                    borderRadius: 2,
                    p: 2,

                    minHeight: 180,
                    maxHeight: 300,

                    overflow: 'auto',

                    fontFamily: 'Consolas, Monaco, monospace',

                    fontSize: 12,
                    lineHeight: 1.7,

                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {base64 || 'Base64 akan muncul setelah Anda melakukan crop...'}
                </Box>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>

      {/* =================================================
          Error
      ================================================= */}

      <Snackbar open={Boolean(error)} autoHideDuration={5000} onClose={() => setError('')}>
        <Alert severity="error" variant="filled" onClose={() => setError('')}>
          {error}
        </Alert>
      </Snackbar>

      {/* =================================================
          Success
      ================================================= */}

      <Snackbar open={Boolean(success)} autoHideDuration={2500} onClose={() => setSuccess('')}>
        <Alert severity="success" variant="filled" onClose={() => setSuccess('')}>
          {success}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ImageCropper;
