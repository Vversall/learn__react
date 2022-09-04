import React, { useEffect, useMemo, useState } from "react";
import CardService from "../API/GetCard";
import CardList from "../components/CardList";
import Mybutton from "../components/UI/button/Mybutton";

const Random = () => {
  const [cards, setCards] = useState([]);
  const randomId = () => Math.floor(Math.random() * 826) + 1;

  useEffect(() => {
    fetchCardsById();
  }, []);

  async function fetchCardsById() {
    const response = await CardService.getById(randomId());
    setCards([...cards, response.data]);
  }
  return (
    <div className="random">
      <Mybutton onClick={fetchCardsById}>More</Mybutton>
      <CardList cards={cards} />
    </div>
  );
};

export default Random;