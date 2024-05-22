import Seccion from "../Components/secEducacion/index";
import Sub from "../Components/subrayado/index";

const Modulo5 = () => {
  const titulos = [
    "Bachiller Técnico con orientación en Informática",
    "UX Challenge",
  ];
  const subtitulo = ["Escuela ORT (2019-2024)", "UMAI (2023)"];

  const texto = [
    "Bachiller con especialización en desarrollo de apps moviles",
    "Convocatoria a evento reconocido por su experiencia en diseño UX/UI",
  ];

  return (
    <>
      <div class="section px-3 px-lg-4 pt-5" id="mod5">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="markermodu4 marker-center">Educación</h2>
            <Sub/>
          </div>
          <div class="row" id="rowedu">
            {titulos.map((item, index) => (
              <Seccion
                titulo={item}
                subtitulo={subtitulo[index]}
                texto={texto[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modulo5;
