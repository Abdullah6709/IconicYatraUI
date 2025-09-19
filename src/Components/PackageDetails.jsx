import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Button,
  Tabs,
  Tab,
  Paper,
  Breadcrumbs,
  Link as MUILink
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareIcon from '@mui/icons-material/Share';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const PackageDetails = () => {
  const query = useQuery();
  const id = query.get('id');
  const dpkg = query.get('Dpkg');

  return (
    <Container maxWidth="xl" sx={{ background: '#eee', py: 4, width:'100vw' }}>
      {/* Breadcrumb */}
      <Paper elevation={1} sx={{ p: 2, mb: 2, mx: 1 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 0.5 }}>
          <MUILink underline="hover" color="inherit" component={Link} to="/">
            Home
          </MUILink>

          <MUILink underline="hover" color="inherit" component={Link} to="/international/all">
            International
          </MUILink>

          {/*  FIXED HERE: removed undeclared selectedDestination */}
          <Typography color="text.primary">
            Best of Kerala
          </Typography>
        </Breadcrumbs>
      </Paper>

      {/* About Section */}
      <Box my={3}>
        <Typography variant="h6" color="error" gutterBottom>
          ABOUT
        </Typography>
        <Typography>
          This is only tentative schedule for sightseeing and travel. Actual sightseeing may get affected due to weather, road conditions, local authority notices, shortage of timing, or off days.
        </Typography>
      </Box>

      {/* Title + Validity */}
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography variant="h5" fontWeight="bold">
          Best of Kerala 5N
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <ShareIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle1" mr={1}>Valid Till :</Typography>
          <CalendarMonthIcon sx={{ color: 'error.main', mr: 1 }} />
          <Typography color="error">30/09/2025</Typography>
        </Box>
      </Box>

      {/* Image + Sidebar */}
      <Box mt={2} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
        <Box flex={1}>
          <img
            src="https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png"
            alt="Package Preview"
            style={{ width: '100%', borderRadius: 8 }}
          />
        </Box>

        <Box flex={1}>
          <Typography variant="subtitle1">Price Per Person</Typography>
          <Typography variant="h6" color="error" gutterBottom>
            Send Query
          </Typography>
          <Typography variant="body2">
            Basis 2 person travelling together
          </Typography>
          <Typography variant="subtitle2" mt={2}>
            <strong>Price is not valid during :</strong>
          </Typography>
          <Typography variant="body2">Diwali, New Year, Long Weekend</Typography>

          <Typography variant="subtitle2" mt={2}>
            <strong>Sightseeing:</strong> (5 Nights / 6 Days)
          </Typography>
          <Typography variant="body2">
            1 N Kochi/Cochin, 2 N Munnar, 1 N Thekkady, 1 N Alleppey/Alappuzha
          </Typography>

          <Box mt={3}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Send Query
            </Button>
            <Button variant="outlined" color="secondary">
              View On Map
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Tabs */}
      <Box mt={5}>
        <Tabs value={0} variant="scrollable" scrollButtons="auto">
          <Tab label="Itinerary" />
          <Tab label="Inclusion / Exclusion" />
          <Tab label="Hotels / Price" />
          <Tab label="Terms & Conditions" />
        </Tabs>

        {/* Dummy itinerary example */}
        <Paper elevation={2} sx={{ mt: 3, p: 2 }}>
  {/* Title Section */}
  <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#f5f5f5' }}>
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
      Day 1 : Kochi Railway Station – Kochi (45Km / 1Hrs)
    </Typography>
  </Paper>

  {/* Image + Text Side-by-Side */}
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    alignItems="flex-start"
    gap={3}
  >
    {/* Left Side - Image */}
    <Box
      component="img"
      src="https://www.travserver.com/travelingfuns/uploads/packages/packagetheme/jungle-theme.jpg?1751539251736"
      alt="Day 1 Image"
      sx={{
        width: { xs: '100%', md: '50%' },
        borderRadius: 2,
        height: '50vh',
        objectFit: 'cover',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    />

    {/* Right Side - Description */}
    <Box flex={1}>
      <Typography
        gutterBottom
        sx={{
          textAlign: 'justify',
          textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)',
          fontSize: '1rem',
        }}
      >
        <strong>Welcome!</strong> Today board our flight to one of the most
        beautiful and elegant city of Paris – known for its haute couture,
        renowned museums, breath-taking beautiful monuments and sensational
        cabarets. On arrival collect your baggage and proceed outside where you
        will be met by your professional tour manager – local Representative
        who will later escort you to your hotel. Check in and relax in the
        comforts of your hotel. Overnight stay at the hotel in Paris.{' '}
        <strong>(Dinner)</strong>
      </Typography>
    </Box>
  </Box>
</Paper>
<Paper elevation={2} sx={{ mt: 3, p: 2 }}>
  {/* Title Section */}
  <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#f5f5f5' }}>
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
     Day 2 : Enjoy your fun filled day at Disneyland® Paris
    </Typography>
  </Paper>

  {/* Image + Text Side-by-Side */}
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    alignItems="flex-start"
    gap={3}
  >
    {/* Left Side - Image */}
    <Box
      component="img"
      src="https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/day_3.jpg?1751803798292"
      alt="Day 1 Image"
      sx={{
        width: { xs: '100%', md: '50%' },
        borderRadius: 2,
        height: '50vh',
        objectFit: 'cover',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    />

    {/* Right Side - Description */}
    <Box flex={1}>
      <Typography
        gutterBottom
        sx={{
          textAlign: 'justify',
          textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)',
          fontSize: '1rem',
        }}
      >
        <strong>Welcome!</strong> 
Get ready for a day full of excitement at Disneyland Paris- a popular amusement park. Enjoy different kind of thrill rides and studio movies with your loved ones. You may choose between Disney Park, where fairy tales take flight across five incredible lands filled with classic attractions, shows and street parades with Disney Characters OR you may visit the Walt Disney Studios Park Studios and be astounded by the outstanding stunt shows, watch a film being made and see real-life sets used for creating blockbuster movies. Overnight stay at the hotel in Paris. (Breakfast, Packed Lunch, Dinner) (Important Note: Keeping in mind the logistical consideration the Tour Manager reserves the right to alter or change the itinerary. However, we will ensure that all the attractions are covered)
        <strong>(Dinner)</strong>
      </Typography>

      <Typography mt={2}>
        Kochi is a major port city on the southwest coast of India blessed with
        beautiful sightseeing.
      </Typography>
    </Box>
  </Box>
</Paper>


      </Box>
    </Container>
  );
};

export default PackageDetails;
