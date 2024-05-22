
import Button from "../button/index";
import Input from "../input/index";

const Form = (props) => {

  return ( 
    <>
      <form method="POST">
        {props.labels.map((item, index) => (
          <div className="form-group my-2">
            <Input titulo={item} />
          </div>
        ))}
        <Button titulo={"Enviar"} />
      </form>
    </>
  );
};

export default Form;
