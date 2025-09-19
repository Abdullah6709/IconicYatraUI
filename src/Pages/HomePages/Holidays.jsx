import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Button,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../Components/PackageCard';
import bannerImg from '../../assets/Banner/banner1.jpg';

const packages = [
  { id: '1', dpkg: '101', title: 'Europe', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '2', dpkg: '102', title: 'Thailand', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '3', dpkg: '103', title: 'Singapore', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '4', dpkg: '104', title: 'Singapore', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '5', dpkg: '105', title: 'Baku', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '6', dpkg: '106', title: 'Baku', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '7', dpkg: '107', title: 'LADAKH', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '8', dpkg: '108', title: 'LADAKH', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_389/pkg_389_main.jpg?1751613511735' },
  { id: '9', dpkg: '109', title: 'Malaysia', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_317/pkg_317_main.png?1751613833268' },
  { id: '10', dpkg: '110', title: 'Malaysia', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_316/pkg_316_main.png?1751613833268' },
  { id: '11', dpkg: '111', title: 'Sri Lanka', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '12', dpkg: '201', title: 'Maharashtra', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '13', dpkg: '202', title: 'Nepal', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '14', dpkg: '203', title: 'Uttarakhand', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '15', dpkg: '204', title: 'Rajasthan', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '16', dpkg: '205', title: 'Madhya Pradesh', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
];

const dropdownOptions = {
  fixed: ['Baku', 'Thailand', 'Singapore', 'Europe', 'Ladakh', 'Malaysia', 'Sri Lanka'],
  safari: ['Maharashtra', 'Nepal', 'Uttarakhand', 'Rajasthan', 'Madhya Pradesh'],
};

const Holidays = () => {
  const navigate = useNavigate();
  const [selectedFixed, setSelectedFixed] = useState('');
  const [selectedSafari, setSelectedSafari] = useState('');
  const [visibleCount, setVisibleCount] = useState(8); // initially show 8 packages

  const handleFixedChange = (event) => setSelectedFixed(event.target.value);
  const handleSafariChange = (event) => setSelectedSafari(event.target.value);

  const resetFilters = () => {
    setSelectedFixed('');
    setSelectedSafari('');
    setVisibleCount(8); // reset visible count
  };

  const filteredPackages = packages.filter((pkg) => {
    const fixedMatch = selectedFixed ? pkg.title === selectedFixed : false;
    const safariMatch = selectedSafari ? pkg.title === selectedSafari : false;
    if (!selectedFixed && !selectedSafari) return true;
    return fixedMatch || safariMatch;
  });

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
            HOLIDAY PACKAGES
          </Typography>
          <Typography variant="subtitle1" sx={{
            fontSize: { xs: '1rem', md: '1rem' },
          }}>
            Choose Your Dream Destination
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 5 }, background: '#f8f8f8', minHeight: '100vh' }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            HOLIDAYS <span style={{ color: 'red' }}>PACKAGES</span>
          </Typography>
          <Divider sx={{ mt: 1, borderColor: '#ccc', borderBottomWidth: 5 }} />
        </Box>

        {/* Package Cards */}
        <Grid container spacing={3} sx={{ justifyContent: 'center', textAlign: 'center' }}>
          {filteredPackages.slice(0, visibleCount).map((pkg, idx) => (
            <Grid size={{ xs: 12, md: 3, sm: 6 }} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PackageCard
                title={pkg.title}
                image={pkg.image}
                id={pkg.id}
                dpkg={pkg.dpkg}
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        {visibleCount < filteredPackages.length && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={loadMore}
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 'bold',
                '&:hover': { transform: 'translateY(-2px)' },
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Holidays;
