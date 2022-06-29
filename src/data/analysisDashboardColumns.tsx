import React from "react";
import { GridColDef, GridValueFormatterParams } from "@mui/x-data-grid";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
    renderCell: ({ id, value }) => (
      <Link component={RouterLink} to={`/analysis/${id}`} underline="always">
        <strong>{value}</strong>
      </Link>
    ),
  },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "author", headerName: "Author", flex: 0.5 },
  {
    field: "date",
    headerName: "Date of run",
    flex: 0.5,
    valueFormatter: (params: GridValueFormatterParams<Date>) => {
      if (!params.value) return "";
      const date = new Date(params.value);
      const formattedDate = date.toLocaleString();
      return `${formattedDate}`;
    },
  },
];

export default columns;
