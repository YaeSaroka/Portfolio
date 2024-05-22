const Navonclick = (props) => {
    return (
        <>
        <li class="nav-item">
                <a class="nav-link active" aria-current="page" href={`#${props.links}`}>
                  {props.titulo}
                </a>
        </li>
        </>
        );
}

export default Navonclick