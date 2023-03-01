import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
const ShoppingIcon = props => {
  return (
    <SvgIcon {...props} sx={{ height: "35px", width: "35px", cursor: 'pointer' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="898 1 35 35"
      >
        <g data-name="Add to Cart">
          <g data-name="Rectangle 599">
            <path
              d="M905 1h21a7 7 0 0 1 7 7v21a7 7 0 0 1-7 7h-21a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7z"
              fill="#fff"
              fillRule="evenodd"
            />
            <path
              d="M905.3 1.5h20.4a6.8 6.8 0 0 1 6.8 6.8v20.4a6.8 6.8 0 0 1-6.8 6.8h-20.4a6.8 6.8 0 0 1-6.8-6.8V8.3a6.8 6.8 0 0 1 6.8-6.8z"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="#1e2e7f"
              fill="transparent"
              strokeWidth=".97143"
            />
          </g>
          <g data-name="shopping_cart">
            <path
              d="M911 25c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Zm-6-16v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2h-11.58c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 924 11h-14.79l-.94-2H905Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"
              fill="#112875"
              fillRule="evenodd"
              data-name="Path 573"
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};
export const tableModel = {
  ipType: {
    headerClassName: "table-header",
    field: "ipType",
    headerName: "IP Type",
    width: 100,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    headerAlign: "center",
  },
  ipIdentifier: {
    headerClassName: "table-header",
    field: "ipIdentifier",
    headerName: "IP Identifier",
    width: 150,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    headerAlign: "center",
  },
  inventionTitle: {
    headerClassName: "table-header",
    field: "inventionTitle",
    headerName: "Invention Title",
    width: 300,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    headerAlign: "center",
  },
  applicantName: {
    headerClassName: "table-header",
    field: "applicantName",
    headerName: "Applicant Name",
    width: 150,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    headerAlign: "center",
  },
  renewalCost: {
    headerClassName: "table-header",
    field: "renewalCost",
    headerName: "Renewal Cost",
    width: 150,
    sortable: false,
    editable: false,
    groupable: false,
    headerAlign: "center",
    filterable: false,
  },
  jurisdiction: {
    headerClassName: "table-header",
    field: "jurisdiction",
    headerName: "Jurisdiction",
    width: 150,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    headerAlign: "center",
  },
  renewalDate: {
    headerClassName: "table-header",
    field: "renewalDate",
    headerName: "Renewal Date",
    width: 100,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    type: "date",
    headerAlign: "center",
    align: "center",
    renderCell: params => <ShoppingCart />,
  },
  cart: {
    headerClassName: "table-header",
    field: "cart",
    headerName: "Cart",
    width: 100,
    sortable: false,
    editable: false,
    groupable: false,
    filterable: false,
    headerAlign: "center",
    align: "center",
    renderCell: params => <ShoppingIcon />,
  },
  // inventionTitle: {
  //   field: "inventionTitle",
  //   headerName: "Invention Title",
  //   width: 500,
  //   sortable: false,
  //   editable: false,
  //   groupable: false,
  //   filterable: false,
  // 	disableColumnMenu: true
  // },
};
