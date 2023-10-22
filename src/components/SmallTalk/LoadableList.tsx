import React, { useState } from "react";
import { Button } from "../ui/button";
import { TypographyP } from "../common/TypographyP";

export const LoadableList = ({ data }: { data: string[] }) => {
  const [list] = useState(data);
  const [page, setPage] = useState(1);
  const [offset] = useState(10);

  const itemsToShow = list.slice(0, page * offset);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="">
      {itemsToShow.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {itemsToShow.length < list.length && (
        <Button variant="outline" className="mt-4" onClick={handleLoadMore}>
          <TypographyP>Load more</TypographyP>
        </Button>
      )}
    </div>
  );
};
