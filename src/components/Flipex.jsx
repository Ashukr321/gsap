import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

const Flipex = () => {
  const refElement = useRef(null);

  useEffect(() => {
    const element = refElement.current;

    // Measure the initial position and size
    const initialBounds = element.getBoundingClientRect();

    // Apply your animation logic using GSAP
    gsap.from(element, {
      x: 100, // Example: move 100 pixels to the right
      opacity: 0,
      duration: 1,
      onComplete: () => {
        // Measure the final position and size after the animation
        const finalBounds = element.getBoundingClientRect();

        // Calculate the differences
        const deltaX = initialBounds.left - finalBounds.left;
        const deltaY = initialBounds.top - finalBounds.top;
        const scaleX = initialBounds.width / finalBounds.width;
        const scaleY = initialBounds.height / finalBounds.height;

        // Apply the flip animation using GSAP Flip
        gsap.fromTo(
          element,
          {
            x: deltaX,
            y: deltaY,
            scaleX,
            scaleY,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            duration: 1,
          }
        );
      },
    });
  }, []);

  return (
    <Box padding={2}>
      <Stack>
        <Typography
          textAlign={"center"}
          sx={{
            backgroundColor: "orange",
            padding: "2rem",
            fontSize: "2rem",
            color: "white",
          }}
          variant="h5"
          color="initial"
        >
          How to use Flip in GSAP
        </Typography>
      </Stack>

      <Box
        marginTop={3}
        ref={refElement}
        sx={{ width: "400px", height: "300px", backgroundColor: "red" }}
      ></Box>
    </Box>
  );
};

export default Flipex;
