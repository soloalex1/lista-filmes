const Card = ({ object, ...attr }) => {
  return (
    <div {...attr} className="shadow-md rounded-md">
      <img src={object.poster_path} alt="" />
    </div>
  );
};

export default Card;
