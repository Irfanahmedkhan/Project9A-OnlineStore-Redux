import React from "react";
import Basket from "./Basket";
import Payment from "./Pyament";
import Shipping from "./Shipping";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import thank from '../Images/thank.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    step: {
      fontWeight: 600,
      textAlign: "left",
      fontSize: " 20px",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: "white",

      backgroundColor: "black",
      width: "130px",
      height: "40px",
      textAlign: "center",
      itemAlign: "center",
      "&:hover": {
        backgroundColor: "#1d4aff",
        width: "135px",
      },
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
      height: "50vh",

    },
    link: {
      textDecoration: "none",

      color: "white",
    },
  })
);

function getSteps() {
  return ["Products in your Basket", "Shipping Address", "Payment"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Basket />;
    case 1:
      return <Shipping />;
    case 2:
      return <Payment />;
    default:
      return "Unknown step";
  }
}

export default function CheckOut() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <Typography className={classes.step}>{label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={activeStep !== 0 ? classes.button : ""}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Confirmed" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <img src={thank} alt=' ' style={{width: "10%"}} />
          <Typography style={{ color: "blue", fontWeight: 500 }}>
            {" "}
            Your Purchase Successfully completed, Your will receive confirmation
            email with Purchase order Number
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Button>
        </Paper>
      )}
    </div>
  );
}
