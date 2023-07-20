import { Separator } from "@radix-ui/react-separator";
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { skills } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { cx } from "class-variance-authority";
import { selectedColumnsStyle } from "src/constants/Style";
import { ResumeColumn } from "src/types/Resume";
import { Badge } from "src/components/ui/badge";

export const Skills = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        "w-[250px]",
        selectedColumn === ResumeColumn.ABOUT && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardDescription>My programming skills</CardDescription>
      </CardHeader>
      {skills.map((skill, key) => {
        return (
          <>
            <CardContent>
              <p>{skill.type.toUpperCase()}</p>
              {skill.items.map((value, key) => (
                <Badge variant="outline" key={key} className="mr-2">
                  {value}
                </Badge>
              ))}
              {/* {skill.highlights.map((value, key) => (
                <div key={key}>{value}</div>
              ))} */}
            </CardContent>
          </>
        );
      })}
    </Card>
  );
};
