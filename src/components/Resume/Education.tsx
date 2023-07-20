import { Separator } from "@radix-ui/react-separator";
import { cx } from "class-variance-authority";
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { selectedColumnsStyle } from "src/constants/Style";
import { education } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { ResumeColumn } from "src/types/Resume";

export const Education = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        "flex-1",
        selectedColumn === ResumeColumn.EDUCATION && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>My previous study...</CardDescription>
      </CardHeader>
      {education.map((item, key) => {
        return (
          <>
            <CardContent>
              <p>{item.school}</p>
              <p>{item.location}</p>
              <p>{item.programme}</p>
              <p className="">{`${item.dateStart} ${item.dateEnd}`}</p>
            </CardContent>
            {key !== education.length - 1 && <Separator />}
          </>
        );
      })}
    </Card>
  );
};
