import { Separator } from "@radix-ui/react-separator";
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { experiences } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { selectedColumnsStyle } from "src/constants/Style";
import { cx } from "class-variance-authority";
import { ResumeColumn } from "src/types/Resume";

export const Work = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        // "w-[]",
        "flex-1",
        selectedColumn === ResumeColumn.WORK && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <CardTitle>Working Experience</CardTitle>
      </CardHeader>
      {experiences.map((item, key) => {
        return (
          <>
            <CardContent>
              <p>{item.company}</p>
              <p>{item.title}</p>
              <p>{item.location}</p>
              <p>{`${item.dateStart} ${item?.dateEnd ?? "now"}`}</p>
              {item.descriptions.map((value) => (
                <>{value}</>
              ))}
            </CardContent>
            {key !== experiences.length - 1 && <Separator />}
          </>
        );
      })}
    </Card>
  );
};
