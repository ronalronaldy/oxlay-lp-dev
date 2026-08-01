// StepTotalIncome.jsx
import { Typography } from '@mui/material';

const StepTotalIncome = ({ excelData, products }) => {
  const productMap = Object.fromEntries(products.map(p => [p.sku, p]));

  const totalIncome = excelData.reduce((sum, row) => {
    const price = productMap[row.sku]?.estimatedIncome || 0;
    return sum + price * Number(row.qty || 0);
  }, 0);

  return (
    <Typography variant="h5" fontWeight="bold">
      💰 Total Pendapatan: Rp {totalIncome.toLocaleString('id-ID')}
    </Typography>
  );
};

export default StepTotalIncome;
