import React from "react";
import {
  Box,
  Typography,
  Grid,
  Breadcrumbs,
  Link as MuiLink,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentOption = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        p: { xs: 2, sm: 3, md: 5 },
      }}
    >
      {/* Breadcrumb */}
      <Paper
        elevation={2}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Breadcrumbs>
          <MuiLink
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </MuiLink>
          <Typography color="text.primary">Payment Option</Typography>
        </Breadcrumbs>
      </Paper>

      <Grid container spacing={4}>
        {/* LEFT SIDE */}
        <Grid size={{xs:12, md:8}}>
          <Card elevation={3} sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
              {/* Heading */}
              <Typography
                variant="h5"
                sx={{ mb: 3, fontWeight: "bold", textTransform: "uppercase" }}
              >
                Payment <span style={{ color: "red" }}>Option</span>
              </Typography>

              {/* NET BANKING */}
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "red", mt: 2 }}
              >
                Net Banking Payment Details:
              </Typography>
              <Typography sx={{ mt: 1 }}>
                For more details kindly click and pay at this link. <br />
                <strong>NET BANKING PAYMENT DETAILS:-</strong>
              </Typography>

              {/* YES BANK */}
              <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: "bold", color: "red" }}>
                  Yes Bank Details:
                </Typography>
                <Typography>
                  <strong>Account Name:</strong> ICONIC YATRA
                </Typography>
                <Typography>
                  <strong>Bank Name:</strong> YES Bank
                </Typography>
                <Typography>
                  <strong>Account Number:</strong> 001463400002757
                </Typography>
                <Typography>
                  <strong>IFSC Code:</strong> YESB0000014
                </Typography>
                <Typography>
                  <strong>Address:</strong> Block H1 A Sec 63, Noida UP 201301
                </Typography>
              </Box>

              {/* KOTAK BANK */}
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: "bold", color: "red" }}>
                  Kotak Bank Details:
                </Typography>
                <Typography>
                  <strong>Account Name:</strong> ICONIC YATRA
                </Typography>
                <Typography>
                  <strong>Bank Name:</strong> KOTAK MAHINDRA BANK
                </Typography>
                <Typography>
                  <strong>Account Number:</strong> 7147083682
                </Typography>
                <Typography>
                  <strong>IFSC Code:</strong> KKBK0005033
                </Typography>
                <Typography>
                  <strong>Address:</strong> SEC 18, NOIDA UP, 201301
                </Typography>
              </Box>

              {/* Credit Card Info */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Note:
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  All cards are accepted here. You can pay through Credit/Debit
                  Cards (3% extra). For more details, contact your Tour Expert.
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  For Credit/Debit Card Payment use this link:{" "}
                  <MuiLink
                    href="https://rzp.io/l/Gn0nwLEnCL"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Click Here to Pay
                  </MuiLink>
                </Typography>
              </Box>

              {/* Instructions */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  1. <strong>Local / at par AC Payee Cheque</strong> should be
                  drawn in the name of <strong>Iconic Yatra</strong>.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  2. <strong>Cash payments</strong> at our office during office
                  hours. Please collect receipts against the same.
                </Typography>
                <Typography variant="body2">
                  3. Booking shall be subject to{" "}
                  <span style={{ color: "red" }}>NEFT / RTGS</span> fund
                  transfers to our bank account as mentioned above. Cheque
                  clearance within 3 working days.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT SIDE - QR IMAGES */}
        <Grid size={{xs:12, md:4}}>
          <Card
            elevation={3}
            sx={{ p: 2, borderRadius: 3, height: "100%", textAlign: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: "bold", color: "primary.main" }}
            >
              Pay via QR Code
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid siz={{xs:12}} >
                <img
                  src="https://www.iconicyatra.com/assets/images/QR1.png"
                  alt="PhonePe QR"
                  style={{
                    maxWidth: "100%",
                    borderRadius: 8,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                />
              </Grid>
              <Grid size={{xs:12}}  mt={5} >
                <img
                  src="https://www.iconicyatra.com/assets/images/QR2.png"
                  alt="GPay QR"
                  style={{
                    maxWidth: "100%",
                    borderRadius: 8,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentOption;
