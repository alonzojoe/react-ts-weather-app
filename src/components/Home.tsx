import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home-items"]}>
        <h3 className={classes.heading}>Discover the Weather, Stay Updated!</h3>
        <p>
          Stay informed with the latest weather updates and plan your day with
          confidence. Our app provides accurate and timely weather information
          to help you make the most of every moment.
        </p>
        <div className={classes["home-search"]}>
          <div className={classes.search}>
            <input type="text" placeholder="Enter City" />
            <a href="#" className={classes["search-icon"]}>
              <i className="bx bx-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
