import {Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about4 from '../Assets/about4.jpg';

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={about4}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "50px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              Trendy & Modern
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify", fontSize: "20px" }}
            >
              Welcome to Trendy Treasures, where fashion meets effortless style. Our mission is to empower you to express yourself through clothing that is not only chic but comfortable. We believe that every piece you wear should make you feel confident and ready to take on the world.
              Founded in 2019, we are passionate about offering the latest trends and timeless classics that are perfect for every occasion.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify", fontSize: "20px" }}
            >
              At Trendy Treasures, we believe in sustainable fashion, which is why we prioritize eco-friendly materials and ethical production practices.Stay stylish, stay confident.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
