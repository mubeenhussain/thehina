import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import {
  darken,
  fade,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import Grid from '@material-ui/core/Grid';
import BookIcon from '@material-ui/icons/Book';
import Typography from "@material-ui/core/Typography";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import classNames from "clsx";
import {
  Scheduler,
  MonthView,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  // DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { owners } from "./demo-data/tasks";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import axios from 'axios';
// const appointments = [
//   {
//     // id: 0,
//     title: "mubeen ",
//     startDate: "2018-05-07T15:24",
//     endDate: "2018-05-07T16:24",
//     ownerId: 1,
//   },
//   {
//     id: 2,
//     title: "thehina Consultant 1 ",
//     startDate: "2018-05-06T12:00",
//     endDate: "2018-05-06T13:00",
//     ownerId: 1,
//   },
//   {
//     id: 3,
//     title: "thehina Consultant2 ",
//     startDate: "2018-05-09T09:00",
//     endDate: "2018-05-09T10:00",
//     ownerId: 1,
//   },
//   {
//     id: 4,
//     title: "thehina ",
//     startDate: "2018-05-10T12:00",
//     endDate: "2018-05-10T13:00",
//     ownerId: 1,
//   },
//   {
//     id: 5,
//     title: "thehina Consultant 4 ",
//     startDate: "2018-05-11T15:00",
//     endDate: "2018-05-11T16:00",
//     ownerId: 1,
//   },
//   // , {
//   //   id: 1,
//   //   title: 'Monthly Planning',
//   //   startDate: new Date(2018, 5, 28, 9, 30),
//   //   endDate: new Date(2018, 5, 28, 11, 30),
//   //   ownerId: 1,
//   // }, {
//   //   id: 2,
//   //   title: 'Recruiting students',
//   //   startDate: new Date(2018, 6, 9, 12, 0),
//   //   endDate: new Date(2018, 6, 9, 13, 0),
//   //   ownerId: 2,
//   // }, {
//   //   id: 3,
//   //   title: 'thehina',
//   //   startDate: new Date(2018, 6, 18, 14, 30),
//   //   endDate: new Date(2018, 6, 18, 15, 30),
//   //   ownerId: 2,
//   // }, {
//   //   id: 4,
//   //   title: 'Open Day',
//   //   startDate: new Date(2018, 6, 20, 12, 0),
//   //   endDate: new Date(2018, 6, 20, 13, 35),
//   //   ownerId: 6,
//   // }, {
//   //   id: 5,
//   //   title: 'thehina ',
//   //   startDate: new Date(2018, 6, 6, 13, 0),
//   //   endDate: new Date(2018, 6, 6, 14, 0),
//   //   rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20180816',
//   //   exDate: '20180713T100000Z,20180727T100000Z',
//   //   ownerId: 2,
//   // }, {
//   //   id: 6,
//   //   title: 'Meeting of Instructors',
//   //   startDate: new Date(2018, 5, 28, 12, 0),
//   //   endDate: new Date(2018, 5, 28, 12, 30),
//   //   rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
//   //   exDate: '20180705T090000Z,20180719T090000Z',
//   //   ownerId: 5,
//   // }, {
//   //   id: 7,
//   //   title: 'thehina for Beginners',
//   //   startDate: new Date(2018, 6, 3, 11, 0),
//   //   endDate: new Date(2018, 6, 3, 12, 0),
//   //   rRule: 'FREQ=WEEKLY;BYDAY=TU;UNTIL=20180801',
//   //   exDate: '20180710T080000Z,20180724T080000Z',
//   //   ownerId: 3,
//   // }, {
//   //   id: 8,
//   //   title: 'thehina',
//   //   startDate: new Date(2018, 6, 9, 11, 0),
//   //   endDate: new Date(2018, 6, 9, 12, 0),
//   //   ownerId: 3,
//   // },
// ];

const resources = [
  {
    fieldName: "ownerId",
    title: "Owners",
    instances: owners,
  },
];

const getBorder = (theme) =>
  `1px solid ${
    theme.palette.type === "light"
      ? lighten(fade(theme.palette.divider, 1), 0.88)
      : darken(fade(theme.palette.divider, 1), 0.68)
  }`;

const DayScaleCell = (props) => (
  <MonthView.DayScaleCell
    {...props}
    style={{ textAlign: "center", fontWeight: "bold" }}
  />
);

const styles = (theme) => ({
  cell: {
    color: "#78909C!important",
    position: "relative",
    userSelect: "none",
    verticalAlign: "top",
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    "&:first-child": {
      borderLeft: "none",
    },
    "&:last-child": {
      paddingRight: 0,
    },
    "tr:last-child &": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "white",
    },
    "&:focus": {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      outline: 0,
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
  },
  text: {
    padding: "0.5em",
    textAlign: "center",
  },
  sun: {
    color: "#FFEE58",
  },
  cloud: {
    color: "#90A4AE",
  },
  rain: {
    color: "#4FC3F7",
  },
  sunBack: {
    backgroundColor: "#FFFDE7",
  },
  cloudBack: {
    backgroundColor: "#ECEFF1",
  },
  rainBack: {
    backgroundColor: "#E1F5FE",
  },
  opacity: {
    opacity: "0.5",
  },
  appointment: {
    borderRadius: "10px",
    "&:hover": {
      opacity: 0.6,
    },
  },
  apptContent: {
    "&>div>div": {
      whiteSpace: "normal !important",
      lineHeight: 1.2,
    },
  },
  flexibleSpace: {
    flex: "none",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  tooltipContent: {
    padding: theme.spacing(3, 1),
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: "border-box",
    width: "400px",
  },
  tooltipText: {
    ...theme.typography.body2,
    display: "inline-block",
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  icon: {
    color: theme.palette.action.active,
    verticalAlign: "middle",
  },
  circle: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    verticalAlign: "super",
  },
  textCenter: {
    textAlign: "center",
  },
  dateAndTitle: {
    lineHeight: 1.1,
  },
  titleContainer: {
    paddingBottom: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(1.5),
  },
});

const WeatherIcon = ({ classes, id }) => {
  switch (id) {
    case 0:
      return null;
    // <Opacity className={classes.rain} fontSize="large" />;
    case 1:
      return null;
    //  <WbSunny className={classes.sun} fontSize="large" />;
    case 2:
      return null;
    // <FilterDrama className={classes.cloud} fontSize="large" />;
    default:
      return null;
  }
};

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
  firstRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
  },
  secondRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)',
  },
  thirdRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
  },
  header: {
    height: '260px',
    backgroundSize: 'cover',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
});

// #FOLD_BLOCK
const CellBase = React.memo(
  ({
    classes,
    startDate,
    formatDate,
    otherMonth,
    // #FOLD_BLOCK
  }) => {
    const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
      ? { day: "numeric", month: "long" }
      : { day: "numeric" };
    return (
      <TableCell
        tabIndex={0}
        className={classNames({
          [classes.cell]: true,
          [classes.rainBack]: iconId === 0,
          [classes.sunBack]: iconId === 1,
          [classes.cloudBack]: iconId === 2,
          [classes.opacity]: otherMonth,
        })}
        onClick={() => console.log(formatDate(startDate, formatOptions))}
      >
        <div className={classes.content}>
          <WeatherIcon classes={classes} id={iconId} />
        </div>
        <div className={classes.text}>
          {formatDate(startDate, formatOptions)}
        </div>
      </TableCell>
    );
  }
);


const Appointment = withStyles(styles, { name: "Appointment" })(
  ({ classes, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      className={classes.appointment}
      
      // onClick={() => console.log("Rest Props 2: ", restProps)}
     
    />
  )
);

const AppointmentContent = withStyles(styles, { name: "AppointmentContent" })(
  ({ classes, ...restProps }) => (
    <Appointments.AppointmentContent
      {...restProps}
      className={classes.apptContent}
    />
  )
);

const FlexibleSpace = withStyles(styles, { name: "ToolbarRoot" })(
  ({ classes, ...restProps }) => (
    <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
      <div className={classes.flexContainer}>
        <Typography variant="h5" style={{ marginLeft: "10px" }}>
          <img src="/logo.png" style={{ width: "100px", height: "100px" }} />
        </Typography>
      </div>
    </Toolbar.FlexibleSpace>
  )
);

const Content = withStyles(style, { name: 'Content' })((
    
  {  children, appointments, classes, ...restProps}) => {
    const router = useRouter();
  
  return (

  <AppointmentTooltip.Content {...restProps} appointments={appointments}>
    
    <Grid container alignItems="center">
      <Grid item xs={2} className={classes.textCenter}>
        <BookIcon />
      </Grid>
      <Grid item xs={10}>
        <Button
        color="primary"
        style={{ zIndex: "100" }}
        variant="contained"
        onClick={(e) =>{ 
          e.preventDefault();
          // router.push(`/user/`)
          // router.push(`/user/${restProps.appointmentData.consultantId}`)
          router.push({
            pathname: `/user`,
            query: {
              id: restProps.appointmentData.consultantId,
              start:restProps.appointmentData.startDate,
              end:restProps.appointmentData.endDate
            },
            shallow: true
          })
        }
      }
        fullWidth
      >
        Book Appointment

        {console.log(restProps.consultantId)}
      </Button>
      {console.log("restprops",restProps)}
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
)});

const CommandButton = withStyles(style, { name: 'CommandButton' })(({
  classes, ...restProps
}) => (
  <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
));


export default class Calender extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      open: false,
      popupData: {},
    };

  }

  

  async  consultantData(){
    let data = await axios.get(`http://localhost:3000/api/schedule?consultantId=${this.props.id}`)
    .then(res=>{
      this.setState({data:res.data})
     
    })
  }
  componentDidMount(){
    this.consultantData();
   }

   componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.consultantData()
    }
   }
  
  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }


  
  render() {
    
    const { data, open } = this.state;
    console.log("id in calender",this.props.id);
    // {this.consultantData()}
    return (
     
      <div style={{ padding: "100px", marginTop: "-100px" }}>
        
        <Paper style={{ border: "1px solid #E0E0E0" }}>
          <Scheduler data={data.schedule}>
            {console.log("schedular",data.schedule)}
            <EditingState onCommitChanges={this.commitChanges} />
            <ViewState  />

            {/* <MonthView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          /> */}
            <WeekView startDayHour={9} endDayHour={19} />

            <Appointments
              appointmentComponent={Appointment}
              appointmentContentComponent={AppointmentContent}
            />
            <Resources data={resources} />

            <Toolbar flexibleSpaceComponent={FlexibleSpace} />
            <DateNavigator />

            <EditRecurrenceMenu />

            <AppointmentTooltip
              contentComponent={Content}
              commandButtonComponent={CommandButton}
              showCloseButton
              
              // showOpenButton
            />
            <AppointmentForm />
           
          </Scheduler>
        </Paper>
      </div>
    );
  }
}
