import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { intervalToDuration, format, addSeconds } from "date-fns";

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyBox = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    // color: theme.palette.primary.contrastText,
    padding: 8,
    borderRadius: 4,
  };
});

const rows = [
  {
    id: 1,
    athlete: "Bob Smith",
    rank: "1",
    completed: 4,
    totalTime: 1542,
  },
  {
    id: 2,
    athlete: "Nigel Pond",
    rank: "2",
    completed: 4,
    totalTime: 1542 + 1542,
  },
  {
    id: 3,
    athlete: "Hugh Rant",
    rank: "3",
    completed: 3,
    totalTime: 1542 + 1542 + 1542,
  },
];

function formattedTime(seconds) {
  var helperDate = addSeconds(new Date(0), seconds);
  return format(helperDate, "hh:mm:ss");
}

const columns = [
  { field: "athlete", sortable: false, headerName: "Athlete", width: 150 },
  { field: "rank", sortable: false, headerName: "Rank", width: 55 },
  {
    field: "completed",
    sortable: false,

    headerName: "Completed",
    width: 150,
  },
  {
    field: "totalTime",
    sortable: false,

    headerName: "Total Time",
    width: 90,

    renderCell: (props) => {
      const { value } = props;
      return formattedTime(value);
    },
  },
];

const Leaderboard = (props) => {
  return (
    <MyBox sx={{ height: "50vh", width: "75vw" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </MyBox>
  );
};

Leaderboard.propTypes = {
  prop: PropTypes.string,
};

export default Leaderboard;
