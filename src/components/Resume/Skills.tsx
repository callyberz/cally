import React, { useContext } from "react";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { skills } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { cx } from "class-variance-authority";
import { selectedColumnsStyle } from "src/constants/Style";
import { ResumeColumn } from "src/types/Resume";
import { Badge } from "src/components/ui/badge";
import { TypographyH1 } from "../common/TypographyH1";
import { TypographyP } from "../common/TypographyP";

export const Skills = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        "w-full flex-1 bg-neutral-900",
        selectedColumn === ResumeColumn.ABOUT && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <TypographyH1>Skills</TypographyH1>
        <TypographyP>My programming skills...</TypographyP>
      </CardHeader>
      {skills.map((skill, index) => {
        return (
          <CardContent key={index}>
            <TypographyP>{skill.type}</TypographyP>
            {skill.items.map((value, key) => (
              <Badge
                variant="outline"
                key={key}
                className="mr-2 dark:text-slate-400"
              >
                {value}
              </Badge>
            ))}
          </CardContent>
        );
      })}
    </Card>
  );
};
