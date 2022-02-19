import image from "../component/assets/1.jfif";

const Card = ({ blogs }) => {
  return (
    <div className="card__container">
      <div className="main__img__container">
        <div className="img__container">
          <img src={blogs.thumbnailUrl} alt="" />
        </div>
      </div>

      <div className="text">
        <h3>{blogs.title}</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
          dolore! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sunt, dolore! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Sunt, dolore!
        </p>
        <p>{blogs.url}</p>
      </div>
    </div>
  );
};

export default Card;
