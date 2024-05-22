
import NavOnclick from "../Components/NavOnclick/index"

const Navbar = () => {
  const titulos = ["Acerca de nosotras", "Conocimientos", "Habilidades","Educación", "Contacto"];
  const links = ["mod1", "mod2", "mod3", "mod4", "mod5", "mod6"];
  return (
    <><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Cami & Yae
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
            {
              titulos.map((item , index) => (
                <NavOnclick titulo={item} links={links[index]} />
              ))
            }
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
