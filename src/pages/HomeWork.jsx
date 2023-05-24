import { useContext } from "react";
import Button2 from "../../components/Button2";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const HomeWork = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setStateCards } = useContext(Context);

  const endHomeWork = () => {
    if (id) {
      const transformedString = id.toString().replace(".", "_");
      setStateCards((prevState) => ({ ...prevState, [`state_${transformedString}`]: false }));
      navigate("/");
    }
  };

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="w-80 flex gap-2 text-center ">
        <Button2 text={`Finalizar tarea#${id}`} onClick={endHomeWork} />
        <Link to="/" className="w-full">
          <Button2 text="Volver" />
        </Link>
      </div>
    </div>
  );
};

export default HomeWork;
