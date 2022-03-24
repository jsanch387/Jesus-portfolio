import { Grid, Typography } from "@mui/material";
import useAboutStyles from "./About.style";

const AboutMe = (): JSX.Element => {
  const classes = useAboutStyles();

  return (
    <section id="about" className={classes.section}>
      <Grid container className={classes.container}>
        <Grid item container>
          <Grid item xs={6}>
            <h1 className={classes.title}>About Me</h1>
            <hr className={classes.divider} />
          </Grid>
          <Grid item container xs={6} justifyContent="right">
            <h1 className={classes.svg}>picture</h1>
          </Grid>
        </Grid>
        <Grid item container direction='column'>
          <Grid item>
            P 1
          </Grid>
          <Grid item>
            P 2
          </Grid>
          <Grid item>
            P 3
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;
