import { Box, Typography } from "@mui/material";
import React from "react";
import cloth from '../Assets/cloth.jpg'

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
       
 
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage:`url(${cloth})`
          
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          gutterBottom
        >
          Welcome to Trendy Treasures
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "90px", color: "#000000b8" }}
        >
         
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "90%", fontWeight: "600",fontSize: "40px", color: "black" }}
        >
          Find your flawless fit with us
        </Typography>
      </Box>
    </Box>
  );
}
