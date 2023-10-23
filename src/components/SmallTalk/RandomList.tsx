import React, { useState } from "react";
import { Button } from "../ui/button";

export const RandomList = ({
  data,
  buttonText,
}: {
  data: string[];
  buttonText?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [randomItem, setRandomItem] = useState("");

  const handleButtonClick = () => {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    if (!randomItem) {
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setRandomItem(randomItem);
    }, 300);
  };

  return (
    <div>
      <Button variant="outline" className="mt-4" onClick={handleButtonClick}>
        {buttonText ? buttonText : "Pick One"}
      </Button>

      <div className="mt-4">
        {loading && <div>Loading...</div>}
        {!loading && randomItem && <div className="text-2xl">{randomItem}</div>}
      </div>
    </div>
  );
};
