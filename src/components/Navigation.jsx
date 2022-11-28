import { React, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  IconButton
} from "@mui/material/";
import { Link as RouteLink } from "react-router-dom";
import { Cat, Hamburger } from "../icons";

const pages = [
  { to: "/", txt: "Kittyfall" },
  { to: "breeds", txt: "Breeds" },
  { to: "favorites", txt: "Favorites" }
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const menuPane = (
    <Box onClick={handleMenuToggle} sx={{ textAlign: "center" }}>
      <List>
        {pages.map((page) => (
          <ListItem key={page.txt} disablePadding>
            <ListItemButton
              component={RouteLink}
              to={page.to}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={page.txt} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Cat />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((page) => (
              <Button
                key={page.txt}
                sx={{ color: "#fff" }}
                component={RouteLink}
                to={page.to}
              >
                {page.txt}
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            onClick={handleMenuToggle}
            sx={{ display: { sm: "none" } }}
          >
            <Hamburger />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={menuOpen}
        onClose={handleMenuToggle}
        anchor="right"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250
          }
        }}
      >
        {menuPane}
      </Drawer>
    </>
  );
}
