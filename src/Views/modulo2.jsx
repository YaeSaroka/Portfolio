import image from "../img/nosotras.jpg";
const Modulo2 = () => {
  return (
    <>
      <div class="section pt-4 px-3 px-lg-4" id="mod2">
        <div class="container-narrow">
          <div class="row">
            <div class="col-md-6">
              <h2 class="h4 my-2">Hola! Nos llamamos Cami y Yae</h2>
              <p>
                Somos estudiantes de informática de ORT Almagro, una educacion
                especializada en desarrollo web y manejo de base de datos.{" "}
              </p>
              <div class="row mt-3">
                <div class="col-sm-2">
                  <div class="pb-1">Edad:</div>
                </div>
                <div class="col-sm-10">
                  <div class="pb-1 fw-bolder">
                    <span id="age">17 años</span>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="pb-1">Email:</div>
                </div>
                <div class="col-sm-10">
                  <div class="pb-1 fw-bolder">
                    yaesaroka@gmail.com / camibelu1302@gmail.com{" "}
                  </div>
                </div>
              </div>
              <br />
              <yellow class="holder purple">
                <div class="point"></div>
                <div class="pencil">
                  <div class="pencil-body"></div>
                  <div class="body-color"></div>
                  <div class="point-body"></div>
                </div>
              </yellow>
              <div class="holder red">
                <div class="point"></div>
                <div class="pencil">
                  <div class="pencil-body"></div>
                  <div class="body-color"></div>
                  <div class="point-body"></div>
                </div>
              </div>
              <div class="holder orange">
                <div class="point"></div>
                <div class="pencil">
                  <div class="pencil-body"></div>
                  <div class="body-color"></div>
                  <div class="point-body"></div>
                </div>
              </div>
            </div>
            <div
              class="col-md-5 offset-md-1"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img
                class="avatar img-fluid mt-2 rounded-circle"
                src={image}
                width="400"
                height="400"
                alt="Fotito"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modulo2;
