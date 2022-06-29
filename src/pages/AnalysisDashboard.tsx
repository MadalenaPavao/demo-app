import React, { FC, useEffect, useState } from "react";
// MUI components
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// Local imports
import getRuns from "../services/getRuns";
import { IRun } from "../types/IRun";
import columns from "../data/analysisDashboardColumns";

// TODO: loading pane
// TODO: No results found page
// TODO: add download button if something is selected

/*
 * Page with the list of all the performed analysis
 * information: ID, name, author and run date
 * */
const AnalysisDashboard: FC = () => {
  const [rows, setRows] = useState<IRun[]>([]);

  useEffect(() => {
    const data = getRuns();
    setRows(data);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "50px 100px",
      }}
    >
      <Typography variant="h5" mb={5} color="primary">
        Analysis dashboard
      </Typography>
      <Box sx={{ height: "70vh", width: "100%" }}>
        {rows && rows.length > 0 ? (
          <DataGrid
            rows={rows}
            columns={columns}
            autoPageSize
            rowsPerPageOptions={[]}
            checkboxSelection
            disableSelectionOnClick
          />
        ) : (
          "No data found"
        )}
      </Box>
    </Box>
  );
};

export default AnalysisDashboard;
