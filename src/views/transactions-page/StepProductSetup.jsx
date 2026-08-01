import {
  Box,
  Card,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { productsMaster } from './ProdukMaster';

const StepProductSetup = ({ products, setProducts }) => {
  const handleChange = (sku, field, value) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.sku === sku
          ? { ...p, [field]: Number(value) }
          : p
      )
    );
  };

  return (
    <Box>
      <Typography variant="h6" mb={3}>
        Setup Harga & Modal Produk
      </Typography>

      <Grid container spacing={2}>
        {productsMaster.map((product) => {
          const current = products.find((p) => p.sku === product.sku);

          const estimatedIncome = current?.estimatedIncome || 0;
          const modal = current?.modal || 0;
          const profit = estimatedIncome - modal;

          return (
            <Grid item xs={12} md={6} key={product.sku}>
              <Card sx={{ p: 2, borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  sx={{
                    height: 120,
                    objectFit: 'contain',
                    mb: 1,
                  }}
                />

                <Typography fontWeight="bold">{product.name}</Typography>
                <Typography fontSize={12} color="text.secondary">
                  SKU: {product.sku}
                </Typography>

                {/* HARGA JUAL */}
                <TextField
                  fullWidth
                  label="Harga Jual"
                  type="number"
                  sx={{ mt: 2 }}
                  value={estimatedIncome || ''}
                  onChange={(e) =>
                    handleChange(product.sku, 'estimatedIncome', e.target.value)
                  }
                />

                {/* MODAL */}
                <TextField
                  fullWidth
                  label="Modal"
                  type="number"
                  sx={{ mt: 2 }}
                  value={modal || ''}
                  onChange={(e) =>
                    handleChange(product.sku, 'modal', e.target.value)
                  }
                />

                {/* PROFIT AUTO */}
                <Typography
                  mt={1}
                  fontSize={13}
                  fontWeight="bold"
                  color={profit >= 0 ? 'success.main' : 'error.main'}
                >
                  Keuntungan: Rp {profit.toLocaleString('id-ID')}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StepProductSetup;
