import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { ProductContext } from '../context/ProductContext';

const Display = () => {
  const { data, loading } = useContext(ProductContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={4} justifyContent="center" style={{ padding: '20px' }}>
                      <Typography variant="h1" component="h1">
                  E-commerce Top 10 Laptop
                </Typography>
      {data.length > 0 ? (
        data.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-photo/high-angle-modern-laptop-device_23-2150805030.jpg" // Replace with your laptop image URL
                alt="Laptop"
              />
              <CardContent>

                <Typography variant="h6" component="h2">
                  {product.productName}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Price:</strong> ${product.price}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Rating:</strong> {product.rating}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Discount:</strong> {product.discount}%
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Availability:</strong> {product.availability}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="body1">Loading products...</Typography>
      )}
    </Grid>
  );
};

export default Display;
