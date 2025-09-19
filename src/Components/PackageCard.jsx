import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom'; // For navigation on click

/**
 * Reusable card displaying:
 *  - Image
 *  - Floating “Send Query” button
 *  - Title with location icon
 *  - Entire card clickable via CardActionArea
 */
const PackageCard = ({ image, title, id, dpkg }) => {
  const navigate = useNavigate();

  const Click = () => {
    navigate(`/package-details?id=${id}&Dpkg=${dpkg}`);
  };

  return (
    <Card sx={{ width: 308, borderRadius: 2, boxShadow: 10, backgroundPosition:'center', }}>
      <CardActionArea
        onClick={Click}
        sx={{ position: 'relative' }}
      >
        <CardMedia component="img" height="260" image={image} alt={title} />
        <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
          <Button variant="contained" size="small" sx={{ textTransform: 'none' }}>
            Send Query
          </Button>
        </Box>
      </CardActionArea>

      <CardContent
        sx={{
          backgroundColor: '#222',
          display: 'flex',
          alignItems: 'center',
          color: '#fff',

          
        }}
      >
        <LocationOnIcon fontSize="small" />
        <Typography variant="body2" sx={{  }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

PackageCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  dpkg: PropTypes.string,
};

PackageCard.defaultProps = {
  image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png',
  title: 'No title provided',
  id: '20',
  dpkg: '1',
};

export default PackageCard;
