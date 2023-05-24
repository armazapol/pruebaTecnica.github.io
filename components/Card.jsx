import CardItem from "../components/CardItem";

const Card = ({ value, numberCard, stateCards }) => {

  const elementos = Array.from({ length: value }, (_, index) => (
    <CardItem text={`${numberCard+1}.${index+1}`} key={index} stateCards={stateCards}  />
  ));

  return (
    <div className="border border-[#5b9bd5] rounded-xl  bg-[#f2f2f2]">
      <div className="border-b-8 border-[#5b9bd5] py-2 uppercase text-xs font-semibold">
        <p className="text-blue-950 ">tarea #{numberCard+1} </p>
      </div>
      <div className="min-h-[11rem] px-5 flex items-center flex-col justify-center gap-1">
        {value === 1 && <CardItem text={numberCard + 1} stateCards={stateCards} />}
        {value > 1 && elementos}
      </div>
    </div>
  );
};

export default Card;
