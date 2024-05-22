import img1 from "../img/html.png";
import img2 from "../img/mvc.jpg";
import img3 from "../img/sql.png";
import img4 from "../img/ux.png";
import Sub from "../Components/subrayado/index";
import TopCard from "../Components/HabTop/index";

const Modulo4 = () => {
  const titulos = [
    "Diseño WEB",
    "UX/UI Design",
    "Manejo de Bases de Datos",
    "ASP.NET MVC",
  ];
  const subtitulo = [
    "HTML - CSS",
    "FIGMA",
    "SQL SERVER - POSTGRESS",
    "C# - JS",
  ];
  const imgs = [img1, img4, img3, img2];

  return (
    <>
       <div class="section px-3 px-lg-4 pt-5" id="mod4">
        <div class="modu4 container-narrow">
          <div class="text-center mb-5">
            <h2 class="markermodu4 marker-center">Habilidades</h2>
            <Sub/>
          </div>
          <div class="row">
           
      <div class="row">
        {titulos.map((item, index) => (
          <div class="col-md-6">
            <div class=" modu4card card mb-3" data-aos="fade-left">
            <div class="card-headermodu4 px-3 py-2">
            <div class="d-flex justify-content-between">
                  <TopCard
                    titulo={item}
                    img={imgs[index]}
                    subtitulo={subtitulo[index]}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Modulo4;
