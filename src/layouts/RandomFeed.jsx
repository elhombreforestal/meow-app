import { React, useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton
} from "@mui/material";
import { Favorite } from "../icons";

const itemData = [
  {
    img: "/cat.jpg",
    title: "Cat 1"
  },
  {
    img: "/cat2.jpg",
    title: "Cat 2"
  },
  {
    img: "/cat3.jpg",
    title: "Cat 3"
  },
  {
    img: "/cat2.jpg",
    title: "Cat 2"
  },
  {
    img: "/cat.jpg",
    title: "Cat 1"
  },
  {
    img: "/cat3.jpg",
    title: "Cat 3"
  },
  {
    img: "/cat.jpg",
    title: "Cat 1"
  },
  {
    img: "/cat2.jpg",
    title: "Cat 2"
  },
  {
    img: "/cat3.jpg",
    title: "Cat 3"
  },
  {
    img: "/cat2.jpg",
    title: "Cat 2"
  },
  {
    img: "/cat.jpg",
    title: "Cat 1"
  },
  {
    img: "/cat3.jpg",
    title: "Cat 3"
  },
  {
    img: "/cat.jpg",
    title: "Cat 1"
  },
  {
    img: "/cat2.jpg",
    title: "Cat 2"
  },
  {
    img: "/cat3.jpg",
    title: "Cat 3"
  },
  {
    img: "/cat2.jpg",
    title: "Cat 2"
  },
  {
    img: "/cat.jpg",
    title: "Cat 1"
  },
  {
    img: "/cat3.jpg",
    title: "Cat 3"
  }
];
export default function RandomFeed() {
  const location = useLocation();
  return (
    <>
      <ImageList
        variant="masonry"
        sx={{
          columnCount: {
            xs: "1 !important",
            sm: "2 !important",
            md: "3 !important",
            lg: "4 !important",
            xl: "5 !important"
          }
        }}
        gap={8}
      >
        {itemData.map((item, idx) => (
          <ImageListItem
            key={idx}
            component={Link}
            to={{
              pathname: `img${item.img}`,
              state: { background: location }
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position="top"
              sx={{
                background: "none"
              }}
              actionIcon={
                <IconButton>
                  <Favorite />
                </IconButton>
              }
            />

            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Outlet />
    </>
  );
}
