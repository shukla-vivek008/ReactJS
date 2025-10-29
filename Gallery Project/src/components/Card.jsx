const Card = (props) => {
  return (
    <div >
      <a href={props.elem.url} target="_blank">
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
          />
        </div>
        <h2 className="font-bold text-sm">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
