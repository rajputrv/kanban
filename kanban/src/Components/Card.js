function Card(id, title, tags) {
  return (
    <div className="wrapper">
      <h2>{id}</h2>
      <h2>{title}</h2>
      <img src="../../public/icons/3 dot menu.svg" className="3dot-menu" />
      <div className="round"></div>
      <h4>{tags[0]}</h4>
    </div>
  );
}

export default Card;
