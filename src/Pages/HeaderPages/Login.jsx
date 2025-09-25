import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Email, Lock, Google, Facebook, Apple } from "@mui/icons-material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import loginBanner from "../../assets/Banner/loginBanner.jpg";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* LEFT SIDE - Image + Branding */}
      <Grid
        size={{ xs: 12, md: 6.5 }}
        sx={{
         backgroundImage: `url(${loginBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          p: 3,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Brush Script MT', cursive",
              fontWeight: "bold",
            }}
          >
            Iconic Yatra
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Travel is the only purchase that enriches you in ways
            <br />
            beyond material wealth
          </Typography>
        </Box>
      </Grid>

      {/* RIGHT SIDE - Login Form */}
      <Grid
        size={{ xs: 12, md: 5.5 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          bgcolor: "#fff",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          {/* Header with Home Button + Welcome */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 2,
            }}
          >
            {/* Back Button */}
            <Button
              onClick={() => navigate("/")}
              sx={{
                minWidth: "auto",
                color: "#1976d2",
                "&:hover": { bgcolor: "transparent", color: "#0d47a1" },
              }}
            >
              <ArrowCircleLeftIcon fontSize="large" />
            </Button>

            {/* Centered Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#1976d2",
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              Welcome
            </Typography>

            {/* Empty Box to balance layout */}
            <Box sx={{ width: 40 }} />
          </Box>

          <Typography variant="body2" sx={{ mb: 4 }}>
            Login with Email
          </Typography>

          {/* Email Field */}
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Email Id"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Password"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <Typography
            variant="body2"
            sx={{ textAlign: "right", mt: 1, color: "text.secondary" }}
          >
            Forgot your password?
          </Typography>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
          >
            LOGIN
          </Button>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>OR</Divider>

          {/* Social Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton color="error">
              <Google />
            </IconButton>
            <IconButton sx={{ color: "#1877f2" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <Apple />
            </IconButton>
          </Box>

          {/* Register Link */}
          <Typography variant="body2" sx={{ mt: 3 }}>
            Don’t have an account?{" "}
            <Button variant="text" sx={{ fontWeight: "bold" }}>
              Register Now
            </Button>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
