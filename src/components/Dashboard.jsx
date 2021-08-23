import { Button, LinearProgress, makeStyles, Typography, withStyles } from "@material-ui/core";
import { Assignment, AttachMoney, CalendarToday, GetApp, MoreVert, QuestionAnswer } from "@material-ui/icons";
import { Doughnut, Line } from "react-chartjs-2";

const CustomLinearProgress = withStyles((theme) => ({
  root: {
    width: 140,
    height: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[300],
  },
  bar: {
    backgroundColor: "#36b9cc",
  },
}))(LinearProgress);

const color = makeStyles((theme) => ({
  info: {
    backgroundColor: "#36b9cc",
  },
  danger: {
    backgroundColor: "#e74a3b",
  },
  warning: {
    backgroundColor: "#f6c23e",
  },
  primary: {
    backgroundColor: "#4e73df",
  },
  success: {
    backgroundColor: "#1cc88a",
  },
  wh: {
    width: "100%",
    height: 16,
    margin: 0,
    marginTop: 5,
  },
}));

export const Dashboard = () => {
  const classes = color();
  return (
    <div className="dashboard">
      <div className="container">
        <div className="heading flex">
          <Typography variant="h5">Dashboard</Typography>
          <Button variant="contained" color="primary" size="small" startIcon={<GetApp />}>
            Generate Report
          </Button>
        </div>
        <div className="mt3 grid g4">
          <div style={{ borderLeft: "4px solid #4e73df" }} className="card p2 flex">
            <div>
              <Typography style={{ color: "#4e73df" }} variant="subtitle2">
                EARNINGS (MONTHLY)
              </Typography>
              <Typography variant="h5">$40,000</Typography>
            </div>
            <CalendarToday className="icon" fontSize="large" />
          </div>
          <div style={{ borderLeft: "4px solid #1cc88a" }} className="card p2 flex">
            <div>
              <Typography style={{ color: "#1cc88a" }} variant="subtitle2">
                EARNINGS (ANNUAL)
              </Typography>
              <Typography variant="h5">$215,000</Typography>
            </div>
            <AttachMoney className="icon" fontSize="large" />
          </div>
          <div style={{ borderLeft: "4px solid #36b9cc" }} className="card p2 flex">
            <div>
              <Typography style={{ color: "#36b9cc" }} variant="subtitle2">
                TASKS
              </Typography>
              <div style={{ justifyContent: "space-between" }} className="flex">
                <Typography variant="h5">50%</Typography>
                <CustomLinearProgress classes={{ bar: classes.info }} variant="determinate" value={50} />
              </div>
            </div>
            <Assignment className="icon" fontSize="large" />
          </div>
          <div style={{ borderLeft: "4px solid #f6c23e" }} className="card p2 flex">
            <div>
              <Typography style={{ color: "#f6c23e" }} variant="subtitle2">
                PENDING REQUESTS
              </Typography>
              <Typography variant="h5">18</Typography>
            </div>
            <QuestionAnswer className="icon" fontSize="large" />
          </div>
        </div>
        <div className="mt3 grid g53">
          <div className="card">
            <div className="cardTitle flex">
              <Typography variant="h6">Earnings Overview</Typography>
              <MoreVert className="icon" />
            </div>
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    label: "data",
                    data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
                    borderColor: "#4e73df",
                    backgroundColor: "rgba(78,115,223,0.1)",
                    fill: "start",
                    tension: 0.3,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    ticks: {
                      callback: (val, i) => (i % 2 === 0 ? `$${val}  ` : ""),
                    },
                    grid: {
                      color: function (context) {
                        return context.index % 2 !== 0 ? "#fff" : "rgba(0,0,0,0.1)";
                      },
                      drawTicks: false,
                      drawBorder: false,
                      borderDash: [1, 1],
                    },
                  },
                  x: {
                    ticks: {
                      callback: function (val, i) {
                        return i % 2 === 0 ? this.getLabelForValue(val) : "";
                      },
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                  },
                },
                layout: {
                  padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                  },
                },
              }}
            />
          </div>
          <div className="card">
            <div className="cardTitle flex">
              <Typography variant="h6">Revenue Sources</Typography>
              <MoreVert className="icon" />
            </div>
            <Doughnut
              data={{
                labels: ["Direct", "Social", "Refferal"],
                datasets: [
                  {
                    label: "data",
                    data: [55, 30, 15],
                    backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
                    borderWidth: 4,
                  },
                ],
              }}
              options={{
                cutout: "85%",
                layout: {
                  padding: {
                    left: 50,
                    right: 50,
                  },
                },
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                      pointStyle: "circle",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="mt3 grid g2">
          <div>
            <div className="card">
              <div className="cardTitle flex">
                <Typography variant="h6">Projects</Typography>
                <MoreVert className="icon" />
              </div>
              <div className="p2">
                <div className="flex" style={{ justifyContent: "space-between", color: "#858796" }}>
                  <Typography variant="subtitle2">Server Migration</Typography>
                  <Typography variant="subtitle2">20%</Typography>
                </div>
                <CustomLinearProgress
                  classes={{ bar: classes.danger }}
                  className={classes.wh}
                  variant="determinate"
                  value={20}
                />
                <div className="flex" style={{ justifyContent: "space-between", color: "#858796", marginTop: "20px" }}>
                  <Typography variant="subtitle2">Sales Tracking</Typography>
                  <Typography variant="subtitle2">40%</Typography>
                </div>
                <CustomLinearProgress
                  classes={{ bar: classes.warning }}
                  className={classes.wh}
                  variant="determinate"
                  value={40}
                />
                <div className="flex" style={{ justifyContent: "space-between", color: "#858796", marginTop: "20px" }}>
                  <Typography variant="subtitle2">Customer Database</Typography>
                  <Typography variant="subtitle2">60%</Typography>
                </div>
                <CustomLinearProgress
                  classes={{ bar: classes.primary }}
                  className={classes.wh}
                  variant="determinate"
                  value={60}
                />
                <div className="flex" style={{ justifyContent: "space-between", color: "#858796", marginTop: "20px" }}>
                  <Typography variant="subtitle2">Payout Details</Typography>
                  <Typography variant="subtitle2">80%</Typography>
                </div>
                <CustomLinearProgress
                  classes={{ bar: classes.info }}
                  className={classes.wh}
                  variant="determinate"
                  value={80}
                />
                <div className="flex" style={{ justifyContent: "space-between", color: "#858796", marginTop: "20px" }}>
                  <Typography variant="subtitle2">Account Setup</Typography>
                  <Typography variant="subtitle2">Complete!</Typography>
                </div>
                <CustomLinearProgress
                  classes={{ bar: classes.success }}
                  className={classes.wh}
                  variant="determinate"
                  value={100}
                />
              </div>
            </div>
            <div className="mt3 grid g2">
              <div style={{ backgroundColor: "#4e73df", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Primary</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #4e73df
                </Typography>
              </div>
              <div style={{ backgroundColor: "#1cc88a", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Success</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #1cc88a
                </Typography>
              </div>
              <div style={{ backgroundColor: "#36b9cc", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Info</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #36b9cc
                </Typography>
              </div>
              <div style={{ backgroundColor: "#f6c23e", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Warning</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #f6c23e
                </Typography>
              </div>
              <div style={{ backgroundColor: "#e74a3b", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Danger</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #e74a3b
                </Typography>
              </div>
              <div style={{ backgroundColor: "#858796", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Secondary</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #858796
                </Typography>
              </div>
              <div style={{ backgroundColor: "#f8f9fc", color: "#858796" }} className="card p2">
                <Typography variant="subtitle2">Light</Typography>
                <Typography style={{ color: "rgba(0,0,0,0.2)" }} variant="body2">
                  #f8f9fc
                </Typography>
              </div>
              <div style={{ backgroundColor: "#5a5c69", color: "#f8f9fc" }} className="card p2">
                <Typography variant="subtitle2">Dark</Typography>
                <Typography style={{ color: "rgba(255,255,255,0.5)" }} variant="body2">
                  #5a5c69
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="cardTitle">
                <Typography variant="h6">Illustrations</Typography>
              </div>
              <div className="body p2 flex">
                <img
                  alt="illustration"
                  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                />
                <Typography style={{ color: "#858796" }} variant="body2">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  Add some quality, svg illustrations to your project courtesy of <a href="#">unDraw</a>, a constantly
                  updated collection of beautiful svg images that you can use completely free and without attribution!
                </Typography>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Browse Illustrations on unDraw →</a>
              </div>
            </div>
            <div className="card mt3">
              <div className="cardTitle">
                <Typography variant="h6">Development Approach</Typography>
              </div>
              <div className="p2">
                <Typography style={{ color: "#858796", marginTop: "20px" }} variant="body2">
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor
                  page performance. Custom CSS classes are used to create custom components and custom utility classes.
                </Typography>
                <Typography style={{ color: "#858796", marginTop: "20px" }} variant="body2">
                  Before working with this theme, you should become familiar with the Bootstrap framework, especially
                  the utility classes.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
