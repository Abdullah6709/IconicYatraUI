import React from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';
import PackageCard from '../../Components/PackageCard';

const packages = [
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
    title: 'Mussoorie -Rishikesh- Nainital',
    id: '1',
    dpkg: '1',
    queryLink: 'https://example.com/query/uttarakhand',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '8N Amazing Nepal',
    id: '2',
    dpkg: '1',
    queryLink: 'https://example.com/query/nepal',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Manali Volvo 3 Nights Tour ',
    id: '3',
    dpkg: '1',
    queryLink: 'https://example.com/query/manali',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
    title: 'Explore Kerala',
    id: '4',
    dpkg: '1',
    queryLink: 'https://example.com/query/kerala',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
    title: 'Best of Kerala 6 N',
    id: '5',
    dpkg: '1',
    queryLink: 'https://example.com/query/kerala-6n',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '07 Nights / 08 Days Scenic Kerala',
    id: '6',
    dpkg: '1',
    queryLink: 'https://example.com/query/scenic-kerala',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Southern Hills 4N',
    id: '7',
    dpkg: '1',
    queryLink: 'https://example.com/query/southern-hills',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
    title: 'Kathmandu-Pokhara / 4N-5D',
    id: '8',
    dpkg: '1',
    queryLink: 'https://example.com/query/kathmandu',
  }
];

const AllLatestPackages = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 5 }, width: '100%' }}>
      {/* Title */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          ALL LATEST <span style={{ color: 'red' }}>PACKAGES</span>
        </Typography>
        <Divider sx={{ mt: 1, borderColor: '#ccc', borderBottomWidth: 5 }} />
      </Box>

      {/* Show all packages */}
      <Grid container spacing={3} sx={{ textAlign: 'center', justifyContent: 'center' }}>
        {packages.map((pkg, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 320, margin: '13px' }}>
              <PackageCard {...pkg} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllLatestPackages;
