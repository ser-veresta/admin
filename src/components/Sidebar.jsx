import { Typography } from "@material-ui/core";
import {
  TableChart,
  ArrowForwardIos,
  Assessment,
  Build,
  Folder,
  SentimentVerySatisfied,
  Settings,
  ShowChart,
} from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem flex">
        <SentimentVerySatisfied className="icon" fontSize="large" />
        <Typography variant="h5">
          SB ADMIN <sup>2</sup>
        </Typography>
      </div>
      <div className="sidebarItem flex flex-start">
        <Assessment className="icon" />
        <Typography variant="body2">Dashboard</Typography>
      </div>
      <div className="sidebarItem">
        <Typography style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }} variant="subtitle2">
          INTERFACE
        </Typography>
        <div style={{ marginTop: "10px" }} className="flex flex-start">
          <Settings className="icon2" fontSize="small" />
          <Typography variant="subtitle2">Components</Typography>
          <ArrowForwardIos style={{ marginLeft: "auto" }} className="icon2" fontSize="small" />
        </div>
        <div style={{ marginTop: "30px" }} className="flex flex-start">
          <Build className="icon2" fontSize="small" />
          <Typography variant="subtitle2">Utilities</Typography>
          <ArrowForwardIos style={{ marginLeft: "auto" }} className="icon2" fontSize="small" />
        </div>
      </div>
      <div className="sidebarItem">
        <Typography style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }} variant="subtitle2">
          ADDONS
        </Typography>
        <div style={{ marginTop: "10px" }} className="flex flex-start">
          <Folder className="icon2" fontSize="small" />
          <Typography variant="subtitle2">Pages</Typography>
          <ArrowForwardIos style={{ marginLeft: "auto" }} className="icon2" fontSize="small" />
        </div>
        <div style={{ marginTop: "30px" }} className="flex flex-start">
          <ShowChart className="icon2" fontSize="small" />
          <Typography variant="subtitle2">Charts</Typography>
        </div>
        <div style={{ marginTop: "30px" }} className="flex flex-start">
          <TableChart className="icon2" fontSize="small" />
          <Typography variant="subtitle2">Tables</Typography>
        </div>
      </div>
    </div>
  );
};
