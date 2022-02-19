import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

// API-ACCESS-TOKEN = sLUtI-MPZZcfUUZa7RLi

const Layout = () => {
  const [blogs, setBlogs] = useState("");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    // axios
    //   .get("https://the-one-api.dev/v2/sLUtI-MPZZcfUUZa7RLi")

    //   .then(({ data }) => {
    //     setBlogs(data);
    //   });

    fetch(
      "https://imdb-api.com/en/API/MostPopularMovies/k_qve3fzow",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <h1 className="title">Recent Blogs</h1>

      <div className="card__section">
        {blogs &&
          blogs.map((blog) => {
            return <Card blog={blog} key={blogs.id} />;
          })}

        {console.log(blogs)}
      </div>
    </div>
  );
};

export default Layout;
