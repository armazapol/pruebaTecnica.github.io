import { useState, useEffect, useContext } from "react";
import Card from "../../components/Card";
import { Context} from '../../context/Context';

const data = [1, 1, 2, 3, 2, 1];
const Home =()=> {

  const { stateCards } = useContext(Context);

  return (
    <div className="text-center my-10">
      <h2 className="text-xl font-semibold uppercase pb-10">
        prueba desarrollador react js
      </h2>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 w-[30rem] gap-4">
          {data.map((number, key) => (
            <Card key={key} value={number} numberCard={key} stateCards={stateCards} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
