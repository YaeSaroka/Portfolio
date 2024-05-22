const Input = (props) => {
  return (
    <>
      <label htmlFor={props.titulo} className="form-label fw-bolder">
        {props.titulo}
      </label>
      {props.titulo === "mensaje" ? (
        <textarea
          className="form-control"
          style={{ resize: "none" }}
          id={props.titulo}
          name={props.titulo}
          rows="4"
          required
        ></textarea>
      ) : (
        <input
          className="form-control"
          type="text"
          id={props.titulo}
          name={props.titulo}
          required
        />
      )}
    </>
  );
};

export default Input;
