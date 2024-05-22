const Seccion = (props) => {
    return (
        <>
            <div class="col-md-3 text-center" data-aos="fade-up" data-aos-delay="100"><img class="mb-2"
                src={props.img} width="96" height="96" alt="web design" />
              <div class="h5">{props.titulo}</div>
            </div>
        </>
        );
}

export default Seccion