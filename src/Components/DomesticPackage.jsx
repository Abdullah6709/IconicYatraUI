import React, { useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Divider,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
    title: 'Mussoorie -Rishikesh- Nainital',
    id: '1',
    dpkg: '1',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '8N Amazing Nepal',
    id: '2',
    dpkg: '2',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Manali Volvo 3 Nights Tour : Ex Delhi',
    id: '3',
    dpkg: '3',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
    title: 'Explore Kerala',
    id: '4',
    dpkg: '4',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '07 Nights / 08 Days Scenic Kerala',
    id: '5',
    dpkg: '5',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Southern Hills 4N',
    id: '6',
    dpkg: '6',
  },
];

const DomesticPackage = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const cardWidthPercent = 100 / cardsToShow;

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth / cardsToShow,
          behavior: 'smooth',
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  const handleClick = (id, dpkg) => {
    if (id && dpkg) {
      navigate(`/package-details?id=${id}&Dpkg=${dpkg}`);
    }
  };

  return (
    <Box sx={{ px: 3, py: 5, position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Section Title */}
      <Box textAlign="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          DOMESTIC <span style={{ color: 'red' }}>PACKAGES</span>
        </Typography>
        <Divider sx={{ borderColor: '#ff5722', borderBottomWidth: 3, mx: 'auto', width: '200px' }} />
      </Box>

      {/* Cards */}
      <Grid>
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'scroll',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            width: '100%',
            px: 2,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {packages.map((pkg, i) => (
            <Box
              key={i}
              onClick={() => handleClick(pkg.id, pkg.dpkg)}
              sx={{
                flex: `0 0 calc(${cardWidthPercent}% - 16px)`, // gap adjust
                height: isMobile ? 200 : isTablet ? 220 : 260,
                borderRadius: '15px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                scrollSnapAlign: 'center',
                backgroundImage: `url(${pkg.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.4s ease',
                boxShadow: 4,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 8,
                },
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  fontWeight="bold"
                  color="#fff"
                  textAlign="center"
                  sx={{ mb: 1 }}
                >
                  {pkg.title}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                    borderRadius: '20px',
                    px: 2,
                    backgroundColor: '#ff5722',
                    boxShadow: '0px 3px 8px rgba(0,0,0,0.3)',
                    '&:hover': { backgroundColor: '#e64a19' },
                  }}
                >
                  Send Query
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default DomesticPackage;
