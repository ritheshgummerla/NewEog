import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as actions from "../store/actions";
import Grid from "@material-ui/core/Grid";
import Chart from "./Chart";
import { connect } from "react-redux";
import Map from "./Map";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: "5%"
  },
  loader: {
    margin: "5px"
  }
};

class NowWhat extends Component {
  componentDidMount() {
    this.props.getDrone();
  }
  render() {
    const { classes } = this.props;
    if (!this.props.data.data) {
      return <LinearProgress className={classes.loader} />;
    }
    const chartData = this.props.data.data;
    const location = {
      lat: this.props.latitude,
      lng: this.props.longitude
    };
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader title="Map Visualization" />
              <CardContent>
                <Map data={location} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader title="Chart Visualization" />
              <CardContent>
                <Chart data={chartData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { latitude, longitude, data } = state.weather;
  return {
    latitude,
    longitude,
    data
  };
};

const mapDispatchToProps = dispatch => ({
  getDrone: () =>
    dispatch({
      type: actions.FETCH_DRONE_REQUEST
    })
});
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NowWhat)
);
