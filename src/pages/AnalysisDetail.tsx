import React, { FC, useState, useEffect } from "react";
// MUI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
// MUI icons
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import ErrorIcon from "@mui/icons-material/Error";
// Navigation
import { useParams, useNavigate } from "react-router-dom";
// Local imports
import { IRun } from "../types/IRun";
import getRunById from "../services/getRunById";
import Line from "../components/analysisDetail/Line";
import sequencing_result from "../assets/sequencing_result.png";

/*
 * Page with the  detail of a single analysis:
 * ID, name, author, date, sequence, machine used,
 * signal, order and a graph
 * */ // TODO download PDF with Analysis information
const AnalysisDetail: FC = () => {
  const { analysisId } = useParams();
  const navigate = useNavigate();
  const [run, setRun] = useState<IRun>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

  useEffect(() => {
    if (analysisId) {
      let data = getRunById(analysisId);
      setRun(data);
    }
  }, [analysisId]);

  const handleClickDelete = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const header = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
      }}
    >
      <IconButton
        aria-label="back"
        size="small"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>
      <Typography variant="h5" mb={5} color="primary">
        Analysis detail
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "10px",
        }}
      >
        <Fab color="secondary" aria-label="download" size="small">
          <DownloadIcon />
        </Fab>
        <Fab color="primary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
        <Fab
          color="error"
          aria-label="delete"
          size="small"
          onClick={handleClickDelete}
        >
          <DeleteIcon />
        </Fab>
      </Box>
    </Box>
  );

  const resultCard = (
    <Card
      sx={{
        width: "68%",
        marginBottom: "50px",
        padding: "10px",
      }}
    >
      <Typography variant="h6" component="h6" color="secondary">
        Result
      </Typography>
      <Divider />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <img src={sequencing_result} alt="run-graph" />
      </CardContent>
    </Card>
  );

  const infoCard = (
    <Card sx={{ width: "28%", height: "fit-content", padding: "10px" }}>
      <Typography variant="h6" component="h6" color="secondary">
        Info
      </Typography>
      <Divider />
      <CardContent>
        {run && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: "5px",
            }}
          >
            <Line title="ID:" info={run.id} />
            <Line title="Name:" info={run.name} />
            <Line title="Author:" info={run.author} />
            <Line title="Date:" info={run.date} />
            <Line title="Machine:" info={run.date} />
            <Line title="Score:" info={run._score.toString()} />
            <Line title="Order:" info={run.date} />
          </Box>
        )}
      </CardContent>
    </Card>
  );

  const dialog = (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="sm"
      open={openDeleteDialog}
    >
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "5px",
        }}
      >
        <ErrorIcon color="error" />
        <Typography variant="h6">Confirmation</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ margin: "20px 0px" }}>
          Are you sure you want to delete this analysis? <br />
          This action cannot be reversed and all data will be lost.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCloseDeleteDialog} variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={handleCloseDeleteDialog}
          variant="contained"
          color="error"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "50px 100px",
      }}
    >
      {header}
      {dialog}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {resultCard}
        {infoCard}
      </Box>
    </Box>
  );
};

export default AnalysisDetail;
