
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import { tableModel } from "./model";
import "./index.css";

const columns = [
  tableModel.ipType,
  tableModel.ipIdentifier,
  tableModel.inventionTitle,
  tableModel.applicantName,
  tableModel.renewalCost,
  tableModel.jurisdiction,
  tableModel.cart,
];
const rows = [
  {
    id: 1,
    ipType: "Design",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
  {
    id: 2,
    ipType: "Patent",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
  {
    id: 3,
    ipType: "Design",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
  {
    id: 4,
    ipType: "Patent",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
  {
    id: 5,
    ipType: "Patent",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
  {
    id: 6,
    ipType: "Patent",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
  {
    id: 7,
    ipType: "Patent",
    ipIdentifier: "123456789",
    inventionTitle: "ABC",
    applicantName: "CDF",
    renewalCost: "600 AUD",
    jurisdiction: "AUSTRALIA",
    cart: true,
    renewalDate: "2 November 2022",
  },
];
const Table = () => {
  const onPageChange = () => {
    console.log("Page Changed");
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableColumnMenu
        disableSelectionOnClick
        // hideFooterPagination
        components={{
          Pagination: () => (
            <TablePagination
              component="div"
              count={rows.length}
              page={0}
              onPageChange={onPageChange}
              rowsPerPage={5}
              // onRowsPerPageChange={handleChangeRowsPerPage}
            />
          ),
        }}
      />
    </Box>
  );
};

export default Table;
