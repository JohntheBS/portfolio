// import React, { useState } from "react";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";

// import Slide from "@mui/material/Slide";
// const Navbar = () => {

//   const Slider = () => (

//   );

//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };
//   return (
//     <>
//       {/* <Box component="nav">
//         <AppBar position="sticky">
//           <Toolbar className="bg-stone-700 justify-between">

//             <Typography variant="h5">John The Boss</Typography>
//           </Toolbar>
//         </AppBar>
//       </Box> */}
//       <FormControlLabel
//         control={<Switch checked={checked} onChange={handleChange} />}
//         label="Show"
//       />
//       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//         {Slider}
//       </Slide>
//     </>
//   );
// };

// export default Navbar;
import * as React from "react";
import {
  FaBars,
  FaHome,
  FaClipboardList,
  FaElementor,
  FaPhoneSquare,
} from "react-icons/fa";
import pic1 from "../images/pic1.jpeg";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Theme } from "@mui/material/styles";

const links = [
  {
    id: 1,
    listIcon: () => <FaHome className="text-2xl" />,
    listText: "Home",
  },
  {
    id: 2,
    listIcon: () => <FaClipboardList className="text-2xl" />,
    listText: "About",
  },
  {
    id: 3,
    listIcon: () => <FaElementor className="text-2xl" />,
    listText: "Resume",
  },
  {
    id: 4,
    listIcon: () => <FaPhoneSquare className="text-2xl" />,
    listText: "Contact",
  },
];

const icon = (
  <Paper elevation={4} sx={{ m: 1 }}>
    <Box component="nav">
      <Box className="w-[75%] fixed  left-0 h-full z-20 shadow-2xl my-10">
        <img
          src={pic1}
          alt="pic1"
          className="h-[100px] w-[100px] rounded-full text-center m-5"
        />
        <List className=" font-bold">
          {links.map((link) => {
            return (
              <ListItem
                style={{
                  borderBottom: "1px solid black",
                  margin: "8px auto",
                }}
                button
                key={link.id}
              >
                <ListItemIcon>{link.listIcon()}</ListItemIcon>
                <ListItemText>{link.listText}</ListItemText>
              </ListItem>
            );
          })}
        </List>
        {/* <Box className="bottom-0 absolute">FaQ</Box> */}
      </Box>
    </Box>
  </Paper>
);

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box component="nav">
      <AppBar>
        <Toolbar className="flex justify-between">
          <FormControlLabel
            control={
              <IconButton checked={checked} onClick={handleChange}>
                <FaBars />
              </IconButton>
            }
            label="menu"
          />
          <Typography variant="h5">John The Boss</Typography>
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            {icon}
          </Slide>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
