const TopCard = (props) => {
  return (
    <>
      <div>
        <h5 class=" mb-2">{props.titulo}</h5>
        <div class="text-muted text-small">
          <small>{props.subtitulo}</small>
        </div>
      </div>
      <img src={props.img} width="48" height="48" alt="" />
    </>
  );
};

export default TopCard;
