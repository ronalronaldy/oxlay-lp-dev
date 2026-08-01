import {
  Box,
  Card,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import TextTrx from '../../components/shared/TextTrx';

const TransactionsTable = ({ jsonData = [], products = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  /* =============================
   * Helpers
   * ============================= */

  // Bersihkan SKU (hapus size / angka belakang)
  const removeTrailingNumber = (text = '') =>
    String(text)
      .toUpperCase()
      .replace(/[^A-Z\-]/g, '')
      .replace(/\d+$/, '')
      .trim();

  // Format angka singkat (mobile)
  const formatIncomeShort = (value) => {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toLocaleString('id-ID', {
        maximumFractionDigits: 1,
      })} jt`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toLocaleString('id-ID', {
        maximumFractionDigits: 0,
      })} rb`;
    }
    return value.toLocaleString('id-ID');
  };

  // 🔥 SATU fungsi bisnis (inti)
  const calculateBusiness = ({ price, modal, qty }) => {
    const income = price * qty;
    const cost = modal * qty;
    const profit = income - cost;
    return { income, cost, profit };
  };

  /* =============================
   * Product Map (O(1))
   * ============================= */
  const productMap = useMemo(
    () =>
      Object.fromEntries(
        products.map((p) => [removeTrailingNumber(p.sku), p]),
      ),
    [products],
  );

  /* =============================
   * Grouping Excel Data
   * ============================= */
  const data = useMemo(() => {
    const map = {};
    jsonData.forEach((row) => {
      if (!row?.sku) return;
      const cleanSku = removeTrailingNumber(row.sku);
      if (!map[cleanSku]) {
        map[cleanSku] = { sku: cleanSku, qty: 0 };
      }
      map[cleanSku].qty += Number(row.qty || 0);
    });
    return Object.values(map);
  }, [jsonData]);

  /* =============================
   * Empty State
   * ============================= */
  if (!data.length) {
    return (
      <Typography align="center" sx={{ mt: 3 }} color="text.secondary">
        Tidak ada data transaksi
      </Typography>
    );
  }

  /* =============================
   * Render
   * ============================= */
  return (
    <Paper elevation={2} sx={{ p: { xs: 1.5, sm: 2 } }}>
      <Typography
        variant="subtitle1"
        mb={2}
        fontWeight="bold"
        textAlign={{ xs: 'center', sm: 'left' }}
      >
        Summary Transaksi
      </Typography>

      <Stack spacing={2}>
        {data.map((item) => {
          const product = productMap[item.sku];

          const price = product?.estimatedIncome || 0;
          const modal = product?.modal || 0;

          const { income, cost, profit } = calculateBusiness({
            price,
            modal,
            qty: item.qty,
          });

          return (
            <Card
              key={item.sku}
              variant="outlined"
              sx={{
                borderRadius: 3,
                boxShadow: 2,
                p: { xs: 1.5, sm: 2 },
              }}
            >
              <Grid container spacing={2} alignItems="center">
                {/* IMAGE */}
                <Grid item xs={4} sm={3} md={2} textAlign="center">
                  <CardMedia
                    component="img"
                    image={product?.image}
                    alt={product?.name || item.sku}
                    sx={{
                      maxHeight: 120,
                      mx: 'auto',
                      objectFit: 'contain',
                      borderRadius: 2,
                    }}
                  />
                  <Typography fontSize={10} mt={0.5} color="text.secondary">
                    SKU: {item.sku}
                  </Typography>
                </Grid>

                {/* CONTENT */}
                <Grid item xs={8} sm={9} md={10}>
                  <Stack spacing={0.8}>
                    <TextTrx
                      label="Product"
                      value={product?.name || 'Produk Tidak Dikenal'}
                      fullWidth
                    />

                    <Grid container spacing={1}>
                      <Grid item xs={4} sm={2}>
                        <TextTrx label="QTY" value={`x${item.qty}`} />
                      </Grid>

                      <Grid item xs={8} sm={3}>
                        <TextTrx
                          label="Pendapatan"
                          value={
                            isMobile
                              ? formatIncomeShort(income)
                              : `Rp ${income.toLocaleString('id-ID')}`
                          }
                        />
                      </Grid>

                      <Grid item xs={6} sm={3}>
                        <TextTrx
                          label="Modal"
                          value={
                            isMobile
                              ? formatIncomeShort(cost)
                              : `Rp ${cost.toLocaleString('id-ID')}`
                          }
                        />
                      </Grid>

                      <Grid item xs={6} sm={3}>
                        <TextTrx
                          label="Profit"
                          value={
                            isMobile
                              ? formatIncomeShort(profit)
                              : `Rp ${profit.toLocaleString('id-ID')}`
                          }
                          valueColor={
                            profit >= 0 ? 'success.main' : 'error.main'
                          }
                        />
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default TransactionsTable;
