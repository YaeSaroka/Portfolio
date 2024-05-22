import image from "../img/img_modulo1.png"
import BTON from "../Components/button/index"
import Sub from "../Components/subrayado/index";

const Modulo1 = () => {
    return (
        <>
        
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         
         
         <div class="cover bg-light" id="mod1">
          <div class="container px-3">
            <div class="row">
              <div class="col-lg-6 p-2">
                <img  src={image} alt="nosotras" width={500} />
              </div>
              <div class="col-lg-6">
                <div class="mt-5">
                  <p class="lead text-uppercase mb-1">Hola!</p>
                  <h1 class="intro-title marker" data-aos="fade-left" data-aos-delay="50">Somos Cami y Yae</h1>
                  <Sub/>
                  <p class="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay="100">Estudiantes de Programación e Informática</p>
                  <div class="social-nav" data-aos="fade-up" data-aos-delay="200">
                    <nav role="navigation">
                      <ul class="nav justify-content-left">
                        <li class="nav-item">
                          <a class="nav-link" target="_blank" href="https://www.linkedin.com/" title="LinkedIn">
                          <i class="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li class="nav-item"><a class="nav-link" target="_blank" href="https://github.com/YaeSaroka"
                            title="Github"><i class="fab fa-github"></i></a></li>
                      </ul>
                    </nav>
                  </div>
                  <BTON titulo = {"Contactanos"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="olita"></div>
        
        </>
    );
}

export default Modulo1