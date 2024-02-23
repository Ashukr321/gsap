import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const Intro = () => {
  return (
    <Box padding={4}>
      <Typography mb={2} textTransform={"uppercase"} fontWeight={"bold"} variant='h5' textAlign={"center"}>Hello coders... today we introduce with the gsap </Typography>
      <List sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        <ListItem sx={{ backgroundColor: "orange", fontSize: "2rem" }}>FLIP</ListItem>
        <ListItem sx={{ backgroundColor: "purple", fontSize: "2rem" }}>Flip</ListItem>
        <ListItem sx={{ backgroundColor: "pink", fontSize: "2rem" }}>Scrolltrigger</ListItem>
        <ListItem sx={{ backgroundColor: "cyan", fontSize: "2rem" }}>Scroll to</ListItem>
        <ListItem sx={{ backgroundColor: "green", fontSize: "2rem" }}>Dragable</ListItem>
        <ListItem sx={{ backgroundColor: "yellow", fontSize: "2rem" }}>Motion path</ListItem>
        <ListItem sx={{ backgroundColor: "red", fontSize: "2rem" }}>easle</ListItem>
        <ListItem sx={{ backgroundColor: "blue", fontSize: "2rem" }}>pixi</ListItem>
        <ListItem sx={{ backgroundColor: "brown", fontSize: "2rem" }}>text</ListItem>
        <ListItem sx={{ backgroundColor: "teal", fontSize: "2rem" }}>observer</ListItem>
        <ListItem sx={{ backgroundColor: "gray", fontSize: "2rem" }}>slow mo</ListItem>
        <ListItem sx={{ backgroundColor: "violet", fontSize: "2rem" }}>CustomEase</ListItem>
        <ListItem sx={{ backgroundColor: "lime", fontSize: "2rem" }}>ExpoScaleEase</ListItem>
        <ListItem sx={{ backgroundColor: "maroon", fontSize: "2rem" }}>RoughEase</ListItem>

      </List>
    </Box>
  )
}

export default Intro;
