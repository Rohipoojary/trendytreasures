import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/single-image1.png";
import cloth3 from '../Assets/cloth3.jpg'
const Banner = () => {
  return (
    <Box 
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage: `url(${cloth3})`,
        
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 },color: "black" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Upgrade your wardrobe with our latest collection
            </Typography>
            <Typography
              variant=" h3"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                fontSize: "18px",
                pb: 3,
                color: "black"
              }}
            >
              Stay classy, stay stylish
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
