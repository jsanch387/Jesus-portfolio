import Introduction from "../../Components/Introduction/Introduction";
import useHomeStyles from "./Home.style";

const Home = (): JSX.Element => {
  const classes = useHomeStyles();
  return (
    <section className={classes.section} id="home">
      <h1>Home Section</h1>
      <Introduction/>
    </section>
  );
};

export default Home;
