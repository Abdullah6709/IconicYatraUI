import React from 'react';
import { Box, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';
import Calendar from './Calendar';
import logo from '../assets/Logo/logoiconic.jpg';
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ width: '100%', background: '#1f3c65', color: '#fff', px: { xs: 3, sm: 5 }, pt: 6, pb: 2 }}>

      {/* Top Footer Sections */}
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ mt: 1 }}>
            <img src={logo} alt="Logo" height="55" style={{ maxWidth: '100%' }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              About Iconic Yatra
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Iconic Yatra is a best and affordable online travel platform, offering an extensive range of travel solutions tailored to meet every traveler’s needs.
            </Typography>
            {/* Social Icons */}
            <Stack direction="row" spacing={0.5} alignItems="center" mt={2}>
              <Typography
                variant="body2"
                sx={{ whiteSpace: "nowrap", fontWeight: 500 }}
              >
                Follow Us:
              </Typography>
              <IconButton
                size="small"
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                sx={{ "&:hover": { color: "#1877f2" } }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                sx={{ "&:hover": { color: "#e1306c" } }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                href="https://wa.me/919999999999"
                target="_blank"
                sx={{ "&:hover": { color: "#25d366" } }}
              >
                <WhatsApp fontSize="small" />
              </IconButton>
            </Stack>
            {/* Support */}
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              <strong>Support (24x7):</strong> +91 120 2555001
            </Typography>
          </Box>
        </Grid>

        {/* Important Links */}
        <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
          <Typography variant="h6" sx={{ letterSpacing: 0.5, py: 2 }}>
            IMPORTANT LINKS
          </Typography>
          <Stack spacing={1} alignItems={{ md: 'flex-start' }}>
            {['Gujarat', 'Himachal', 'Kashmir', 'Chardham', 'Kerala', 'Terms & Conditions', 'Careers'].map((link, idx) => (
              <Link
                key={idx}
                component={RouterLink}
                to={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '')}`}
                underline="hover"
                color="inherit"
                sx={{ '&:hover': { color: '#ffd700' }, transition: '0.3s' }}
              >
                › {link}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* Our Menu */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="h6" sx={{ letterSpacing: 1, py: 2 }}>
            OUR MENU
          </Typography>
          <Stack spacing={1} alignItems={{ md: 'flex-start' }}>
            {['About us', 'Latest Blogs', 'Gallery', 'Honeymoon tours', 'Testimonials', 'Contact', 'Latest News'].map((link, idx) => (
              <Link
                key={idx}
                component={RouterLink}
                to={`/${link.toLowerCase().replace(/ /g, '')}`}
                underline="hover"
                color="inherit"
                sx={{ '&:hover': { color: '#ffd700' }, transition: '0.3s' }}
              >
                › {link}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* Contact Us */}
        <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
          <Typography variant="h6" sx={{ letterSpacing: 1, py: 2 }}>
            CONTACT US
          </Typography>
          <Stack spacing={1} alignItems={{ md: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                Rayos Building, Sector 63 Rd, C Block, Sector 63, Noida, Uttar Pradesh 201301
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CallIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9958120707 / +91 9990273606</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">info@iconicyatra.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">support@iconicyatra.com</Typography>
            </Box>
          </Stack>

          {/* Calendar */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: { md: 'flex-start' } }}>
            <Calendar />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Footer */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.3)', mt: 4, pt: 2, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#ccc' }}>
          © 2025 <Box component="span" sx={{ fontWeight: 'bold', color: '#ffd700' }}>iconicyatra.com</Box>. All rights reserved.
          Recognized by Ministry of Tourism, Govt of India.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
