import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from '@mui/material';
import PackageCard from '../../Components/PackageCard';
import bannerImg from '../../assets/Banner/banner3.jpg';

// Package data
const packages = [
  { id: '11', dpkg: '1001', title: 'Europe1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '22', dpkg: '1002', title: 'Thailand1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '33', dpkg: '1003', title: 'Singapore1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '44', dpkg: '1004', title: 'Singapore1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '55', dpkg: '1005', title: 'Baku1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '66', dpkg: '1006', title: 'Baku1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '77', dpkg: '1007', title: 'LADAKH1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '88', dpkg: '1008', title: 'LADAKH1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_389/pkg_389_main.jpg?1751613511735' },
  { id: '99', dpkg: '1009', title: 'Malaysia1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_317/pkg_317_main.png?1751613833268' },
  { id: '100', dpkg: '1010', title: 'Malaysia1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_316/pkg_316_main.png?1751613833268' },
  { id: '111', dpkg: '1011', title: 'Sri Lanka1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '122', dpkg: '2001', title: 'Maharashtra1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '133', dpkg: '2002', title: 'Nepal1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '144', dpkg: '2003', title: 'Uttarakhand1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '155', dpkg: '2004', title: 'Rajasthan1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '166', dpkg: '2005', title: 'Madhya Pradesh1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' }
];

const Yatra = () => {
  const [visibleCount, setVisibleCount] = useState(8); // initially show 8 packages

  const loadMore = () => setVisibleCount((prev) => prev + 8);

  return (
    <>
      {/* Hero Banner */}
      <Box
        sx={{
          height: { xs: 220, md: 300 },
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
          }}
        />
        {/* Banner Text */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" fontWeight="bold" sx={{
            fontSize: { xs: '1.8rem', md: '2rem' },
          }}>
            ICONIC PACKAGES
          </Typography>
          <Typography variant="subtitle1" sx={{
            fontSize: { xs: '1rem', md: '1rem' },
          }}>
            Explore Our Best Travel Deals
          </Typography>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 2, md: 5 }, width: '100%', py: 6 }}>
        {/* Title */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            ICONIC <span style={{ color: 'red' }}>PACKAGES</span>
          </Typography>
          <Divider sx={{ mt: 1, borderColor: '#ccc', borderBottomWidth: 5 }} />
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={3} sx={{ textAlign: 'center', justifyContent: 'center' }}>
          {packages.slice(0, visibleCount).map((pkg, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box sx={{ width: '100%', maxWidth: 320 }}>
                <PackageCard {...pkg} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        {visibleCount < packages.length && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={loadMore}
              sx={{
                width: { xs: '100%', sm: 300 },
                backgroundColor: '#4caf50',
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 3,
                py: 1.5,
                '&:hover': { backgroundColor: '#43a047' },
              }}
            >
              Click More
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Yatra;
