import TransactionsTable from './TransactionsTable';

const StepSummaryTable = ({ excelData, products }) => {
  return <TransactionsTable jsonData={excelData} products={products} />;
};

export default StepSummaryTable;
