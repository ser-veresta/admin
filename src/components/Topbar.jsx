import { TextField, Badge, Avatar, Typography } from "@material-ui/core";
import { Menu, Notifications, Search, Mail } from "@material-ui/icons";
import { useState } from "react";

export const Topbar = ({ setShow }) => {
  const [show2, setShow2] = useState(false);
  return (
    <div className="topbar">
      <div className="wrapper flex">
        <div className="sm">
          <TextField
            size="small"
            label="Search for..."
            variant="outlined"
            InputProps={{
              endAdornment: <Search />,
            }}
          />
        </div>
        <div className="lg">
          <Menu className="iconContainer" onClick={() => setShow((show) => !show)} />
        </div>
        <div className="flex">
          <div className="iconContainer lg">
            <Search className="icons" onClick={() => setShow2((show) => !show)} />
            <div className={show2 ? "dropdown" : "hide"}>
              <TextField
                size="small"
                label="Search for..."
                variant="outlined"
                InputProps={{
                  endAdornment: <Search />,
                }}
              />
            </div>
          </div>
          <Badge className="iconContainer" badgeContent={5} color="error">
            <Notifications className="icons" />
          </Badge>
          <Badge className="iconContainer" badgeContent={5} color="error">
            <Mail className="icons" />
          </Badge>
          <div className="username flex">
            <Typography variant="body2">Douglas MacGee</Typography>
            <Avatar
              className="avatar"
              alt="avatar"
              src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
