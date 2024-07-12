import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <a href="#" className={classes["text-logo"]}>
          React Weather App
        </a>
      </div>
    </div>
  );
};

export default Navbar;
