import { Avatar, Grid } from "@mui/material";
import { Divider } from "@mui/material";
import useIntroductionStyles from "./Introduction.style";

const Introduction = (): JSX.Element => {
  const classes = useIntroductionStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={6} container direction="column">
          <span className={classes.hello}>Hello, I'm</span>
          <span className={classes.name}>Jesus Sanchez</span>
          <span className={classes.title}>Frontend Developer</span>
          <hr className={classes.divider} />
          <p className={classes.paragraph}>
            I am a Frontend Developer looking to learn Full Stack Development. I enjoy
            designing and developing web applications. I hope to
            create various full stack apps in the future.
          </p>
        </Grid>
        <Grid item container xs={6}>
          <Avatar />
        </Grid>
      </Grid>
    </div>
  );
};
export default Introduction;
