// StepUploadExcel.jsx
import { Button, Typography } from '@mui/material';
import * as XLSX from 'xlsx';

const StepUploadExcel = ({ setExcelData }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: 'array' });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });
      setExcelData(json);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <Typography variant="h6" mb={2}>
        Upload File Excel
      </Typography>
      <Button variant="contained" component="label">
        Pilih File
        <input hidden type="file" accept=".xlsx,.xls" onChange={handleUpload} />
      </Button>
    </>
  );
};

export default StepUploadExcel;
