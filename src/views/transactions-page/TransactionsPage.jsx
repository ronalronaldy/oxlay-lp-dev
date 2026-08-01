import { Box, Button, Paper, Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import StepProductSetup from './StepProductSetup';
import StepUploadExcel from './StepUploadExcel';
import StepSummaryTable from './StepSummaryTable ';
import StepTotalIncome from './StepTotalIncome';
import { productsMaster } from './ProdukMaster';

const steps = ['Setup Produk', 'Upload Excel', 'Summary Transaksi', 'Total Pendapatan'];

const TransactionsPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [products, setProducts] = useState(
    productsMaster.map((p) => ({
      ...p,
      estimatedIncome: 0,
    })),
  );
  const [excelData, setExcelData] = useState([]);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <StepProductSetup products={products} setProducts={setProducts} />;
      case 1:
        return <StepUploadExcel setExcelData={setExcelData} />;
      case 2:
        return <StepSummaryTable excelData={excelData} products={products} />;
      case 3:
        return <StepTotalIncome excelData={excelData} products={products} />;
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    if (activeStep === 0) {
      return products.some((p) => !p.estimatedIncome);
    }
    if (activeStep === 1 && excelData.length === 0) return true;
    return false;
  };

  return (
    <PageContainer title="Transactions" description="Transactions Stepper">
      <Box sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Paper sx={{ p: 3, mt: 4 }}>{renderStepContent()}</Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Kembali
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1 || isNextDisabled()}
          >
            Lanjut
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default TransactionsPage;
