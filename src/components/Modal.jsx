import { React, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  ImageListItemBar,
  IconButton
} from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import { Favorite } from "../icons";

export default function Modal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <Dialog fullScreen={false} open={open} onClose={handleClose}>
      <img src={`/${id}`} alt={id} />
      <DialogContent>
        <DialogContentText>{id}</DialogContentText>
      </DialogContent>
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
    </Dialog>
  );
}
