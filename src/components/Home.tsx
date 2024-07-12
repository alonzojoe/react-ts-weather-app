import { useState } from "react";
import classes from "./Home.module.css";
import { RootState } from "../types/types";
import WeatherInfo from "./WeatherInfo";
const Home = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [location, setLocation] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RootState | null>(null);
  const search = async (e: any) => {
    e.preventDefault();
    setData(null);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_WEATHER_API
        }?q=${location}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City Not Found");
      }
      const resData: RootState = await response.json();
      setData(resData);
    } catch (error) {
      setError("City Not Found");
      throw error;
    } finally {
      setLoading(false);
      setLocation("");
    }
  };

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
            <form onSubmit={search}>
              <input
                type="text"
                placeholder="Enter City"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                type="submit"
                className={classes["search-icon"]}
                onClick={search}
                disabled={isLoading}
              >
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>
        {error && <p className={classes["error-message"]}>{error}</p>}
        {data && <WeatherInfo data={data} />}
      </div>
    </div>
  );
};

export default Home;
