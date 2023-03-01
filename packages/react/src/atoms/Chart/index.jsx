import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  ipType: {
    labels: ["Patents", "Trademarks", "Designs"],
    datasets: [
      {
        label: "IP Type",
        data: [60, 30, 10],
        backgroundColor: ["#112975", "#EB6B46", "#59BA66"],
      },
    ],
  },
  jurisdiction: {
    labels: ["Australia", "USA", "Other"],
    datasets: [
      {
        label: "Jurisdiction",
        data: [30, 50, 20],
        backgroundColor: ["#112975", "#EB6B46", "#59BA66"],
      },
    ],
  },
  status: {
    labels: ["Complete", "In Progess", "Confirm", "Denied", "Withdrawn"],
    datasets: [
      {
        label: "Status",
        data: [25, 15, 20, 27, 13],
        backgroundColor: [
          "#112975",
          "#EB6B46",
          "#59BA66",
          "#F3F6F8",
          "#fff000",
        ],
      },
    ],
  },
};
const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        display: true,
        generateLabels(chart) {
          const data = chart.data;
          const {
            labels: { pointStyle, color },
          } = chart.legend.options;
          return data.labels.map((label, index) => {
            const meta = chart.getDatasetMeta(0);
            const style = meta.controller.getStyle(index);
            return {
              text: `${label} - ${data.datasets[0].data[index].toString()}%`,
              fillStyle: style.backgroundColor,
              strokeStyle: style.borderColor,
              fontColor: color,
              lineWidth: style.borderWidth + 5,
              pointStyle: pointStyle,
              index,
            };
          });
        },
      },
    },
  },
};
export function Chart() {
  const [chartInfo, setChartInfo] = useState("ipType");
  const handleChange = e => setChartInfo(e.target.value);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: 'center' }}>
        <InputLabel sx={{ paddingX: '10px' }}>By: </InputLabel>
        <Select
          id="portfolio-select"
          value={chartInfo}
          onChange={handleChange}
        >
          <MenuItem value="ipType">IP Type</MenuItem>
          <MenuItem value="jurisdiction">Jurisdiction</MenuItem>
          <MenuItem value="status">Status</MenuItem>
        </Select>
      </Box>
      <Doughnut options={options} data={data[chartInfo]} />
    </Box>
  );
}
