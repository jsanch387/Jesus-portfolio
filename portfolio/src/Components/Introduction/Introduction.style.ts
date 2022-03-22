import { makeStyles } from "@mui/styles";

const useIntroductionStyles = makeStyles({
  container: {
    margin: "0 150px",
  },
  hello: {
    fontSize: 70,
    fontFamily: "Hubballi, cursive",
    letterSpacing: 3,
  },
  name: {
    fontSize: 70,
    fontFamily: "Hubballi, cursive",
    fontWeight: "bold",
    color: "#128FFF",
    letterSpacing: 3,
  },
  title: {
    fontSize: 40,
    fontFamily: "Hubballi, cursive",
    color: "#B3B3B3",
    letterSpacing: 2,
  },
  divider: {
    border: "2px solid #128FFF",
    width: "80%",
    marginLeft: 0,
    marginTop: 20,
  },
  paragraph: {
    fontFamily: "Hubballi, cursive",
    fontSize: 25,
    color: "#B3B3B3",
  },
});

export default useIntroductionStyles;
