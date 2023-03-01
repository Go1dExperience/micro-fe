import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "../Button";
import Typography from "../Typography";

const InfoCard = ({ amount, title, subtitle, canViewAll, canAddNew }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "250px",
        marginTop: "50px",
        border: "1px solid #707070",
        background: "#f4f7f9",
        borderRadius: "15px",
        padding: "13px 16px",
      }}
    >
      <Stack display="flex" flexDirection="column">
        <Typography
          variant="caption4"
          sx={{ fontWeight: 700, color: "#1E2E7F" }}
        >
          {amount}
        </Typography>
        <Typography variant="body5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle11"
          sx={{ color: "#707070", fontWeight: "bold" }}
        >
          {subtitle}
        </Typography>
      </Stack>
      <Stack>
        {canViewAll && (
          <Button
            title="View All"
            sx={{ marginBottom: "5px" }}
          />
        )}
        {canAddNew && (
          <Button
						fill={false}
            variant="hollow"
            title="Add New"
          />
        )}
      </Stack>
    </Box>
  );
};
export default InfoCard;
