import React, { useState } from 'react';

// MUI Components
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Divider,
  Box,
  Grid,
} from '@mui/material';
import Item from '../../components/shared/Item';
import ProductCarousel from '../sample-page/ProductListPage';

const PRODUCTS = [
  {
    id: 1,
    name: 'Sepatu Kerja Safety',
    price: 250000,
    sizes: ['39', '40', '41', '42', '43'],
  },
  {
    id: 2,
    name: 'Sepatu Formal',
    price: 200000,
    sizes: ['39', '40', '41', '42'],
  },
  {
    id: 3,
    name: 'Sepatu Casual',
    price: 180000,
    sizes: ['38', '39', '40', '41'],
  },
];

const products = [
  {
    name: 'Apple Watch 8',
    price: '$500',
    status: 'Instock',
    statusColor: 'success',
    image: 'botR4Black1',
  },
  {
    name: 'Apple Watch 9',
    price: 'Rp.75000',
    status: 'Instock',
    statusColor: 'success',
    image: 'sonJ1',
  },
  {
    name: 'Apple Ultra',
    price: '$650',
    status: 'Low Stock',
    statusColor: 'warning',
    image: 'r4Red1',
  },
  {
    name: 'Apple Watch SE',
    price: '$420',
    status: 'Instock',
    statusColor: 'success',
    image: 'r4Blcak1',
  },
  {
    name: 'Apple Watch Hermes',
    price: '$1250',
    status: 'Pre Order',
    statusColor: 'info',
    image: 'sonDoff1',
  },
  {
    name: 'Apple Watch Nike',
    price: '$600',
    status: 'Instock',
    statusColor: 'success',
    image: 'botR4Red1',
  },
];

const InvoicePage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    productId: '',
    size: '',
    qty: 1,
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === Number(form.productId));

  const total = selectedProduct ? selectedProduct.price * Number(form.qty) : 0;

  return (
    <>
      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <Card>
          <CardContent>
            <Typography variant="h5">Checkout Produk</Typography>
            {/* ++++++++++++Code sekarang++++++++++++++++++++++ */}
            <ProductCarousel />
            {/* ====================== ++++++++======================*/}
            <TextField
              fullWidth
              label="Nama Customer"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="No. HP"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              margin="normal"
            />

            <Typography sx={{ mt: 2 }}>Pilih Produk</Typography>
            <Select
              fullWidth
              name="productId"
              value={form.productId}
              onChange={handleChange}
              sx={{ mt: 1 }}
            >
              {PRODUCTS.map((p) => (
                <MenuItem key={p.id} value={p.id}>
                  {p.name} - Rp {p.price.toLocaleString('id-ID')}
                </MenuItem>
              ))}
            </Select>

            {selectedProduct && (
              <Select
                fullWidth
                name="size"
                value={form.size}
                onChange={handleChange}
                sx={{ mt: 2 }}
              >
                {selectedProduct.sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    Size {size}
                  </MenuItem>
                ))}
              </Select>
            )}

            <TextField
              fullWidth
              type="number"
              label="Qty"
              name="qty"
              inputProps={{ min: 1 }}
              value={form.qty}
              onChange={handleChange}
              margin="normal"
            />

            <Typography sx={{ mt: 2 }}>
              Subtotal: <b>Rp {total.toLocaleString('id-ID')}</b>
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              disabled={!form.customerName || !form.productId || !form.size}
              onClick={() => setStep(2)}
            >
              Lanjut ke Alamat
            </Button>
          </CardContent>
        </Card>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <Card>
          <CardContent>
            <Typography variant="h6">Alamat Pengiriman</Typography>

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Alamat Lengkap"
              name="address"
              value={form.address}
              onChange={handleChange}
              margin="normal"
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button fullWidth variant="outlined" onClick={() => setStep(1)}>
                Kembali
              </Button>
              <Button
                fullWidth
                variant="contained"
                disabled={!form.address}
                onClick={() => setStep(3)}
              >
                Lihat Ringkasan
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* ================= STEP 3 ================= */}
      {step === 3 && (
        <Card>
          <CardContent>
            <Typography variant="h6">Ringkasan Pesanan</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography>
              <b>Customer</b>
            </Typography>
            <Typography>{form.customerName}</Typography>
            <Typography>{form.phone}</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography>
              <b>Produk</b>
            </Typography>
            <Typography>{selectedProduct?.name}</Typography>
            <Typography>Size: {form.size}</Typography>
            <Typography>Qty: {form.qty}</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Total: Rp {total.toLocaleString('id-ID')}</Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button fullWidth variant="outlined" onClick={() => setStep(2)}>
                Kembali
              </Button>
              <Button fullWidth color="success" variant="contained">
                Konfirmasi Pesanan
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default InvoicePage;
