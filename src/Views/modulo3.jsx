import img1 from "../img/basedatos.png"
import img2 from "../img/compu.jpg"
import img3 from "../img/ui.png"
import img4 from "../img/proto.png"
import Seccion from "../Components/secConocimento/index";
import Sub from "../Components/subrayado/index";

const Modulo3 = () => {
    const titulos = ["Desarrollo web", "UX/UI Design", "Database", "Prototipado"];
    const imgs = [img1, img2, img3, img4];

    return (
        <>
        <div class="section px-3 px-lg-4 pt-5" id="mod3">
        <div class="container-narrow">
          <div class="text-center mb-5">
            <h2 class="marker marker-center">Conocimientos</h2>
            <Sub/>
          </div>
        <div class="row py-3">
        {
           titulos.map((item, index) => (
            <Seccion  titulo={item} img={imgs[index]} />
        ))
        }
        </div> 
        </div>
        </div>
        </>
           
)}

export default Modulo3;