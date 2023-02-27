import { Typography } from "@mui/material";

const customStyles = {
  body4: { fontSize: "14px", letterSpacing: "0.02px", lineHeight: "18px" },
  body5: { fontSize: "16px", letterSpacing: "-0.08px", lineHeight: "20px" },
  body6: { fontSize: "18px", letterSpacing: "-0.15px", lineHeight: "22px" },
  body7: { fontSize: "18px", letterSpacing: "-0.13px", lineHeight: "30px" },
  caption1: { fontSize: "18px", letterSpacing: "-0.05px", lineHeight: "24px" },
  caption2: { fontSize: "24px", letterSpacing: "-0.07px", lineHeight: "22px" },
  caption3: { fontSize: "24px", letterSpacing: "-0.07px", lineHeight: "22px" },
  caption4: { fontSize: "24px", letterSpacing: "-0.17px", lineHeight: "30px" },
  caption5: { fontSize: "32px", letterSpacing: "-0.1px", lineHeight: "43px" },
  caption6: { fontSize: "32px", letterSpacing: "-0.1px", lineHeight: "38px" },
  caption7: { fontSize: "40px", letterSpacing: "-0.12px", lineHeight: "43px" },
  subtitle11: { fontSize: "12px", letterSpacing: "0.17px", lineHeight: "15px" },
};
export default function TypographyCustom({ variant = "body4", sx, children }) {
  const styles = sx
    ? Object.assign({}, customStyles[variant], sx)
    : customStyles[variant];
  return (
    <Typography variant="body1" sx={styles}>
      {children}
    </Typography>
  );
}
