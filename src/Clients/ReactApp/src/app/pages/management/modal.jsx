import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import { CatalogApi, endpoinst } from "../../../constants/api.constants";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const { open, setOpen, rowModal,updateList } = props;
  const { ident, id } = rowModal;
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(rowModal[ident]);
    // eslint-disable-next-line
  }, [rowModal]);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{ident}</h2>
            <TextField
              value={inputValue}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // autoFocus
              onChange={(event) => setInputValue(event.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={async () => {
                try {
                  if (ident === "itemBrend") {
                    handleClose();
                    return;
                  }

                  await axios.put(`${CatalogApi}${endpoinst.item}/${id}`, {
                    ...rowModal,
                    [ident]: inputValue,
                  });

                   updateList();

                  handleClose();
                } catch (error) {
                  alert("error");
                  handleClose();
                }
              }}
            >
              Save
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
