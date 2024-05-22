const Seccion = (props) => {
  return (
    <>
      <div class="col-md-6">
        <div class="cardmodu5 mb-3" data-aos="fade-right" data-aos-delay="100">
          <div class="card-headermodu5 px-3 py-2">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="h5 mb-1">{props.titulo}</h3>
                <div class="text-muted text-small">
                  <small>{props.subtitulo}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-3 py-2">
            <p>
              {props.texto}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seccion;
