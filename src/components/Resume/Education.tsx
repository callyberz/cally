import { cx } from "class-variance-authority";
import React, { useContext } from "react";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { selectedColumnsStyle } from "src/constants/Style";
import { education } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { ResumeColumn } from "src/types/Resume";
import { CommonUtil } from "src/utils/CommonUtil";
import { TypographyH1 } from "../common/TypographyH1";
import { TypographyP } from "../common/TypographyP";

export const Education = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        "flex-1 bg-neutral-900",
        selectedColumn === ResumeColumn.EDUCATION && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <TypographyH1>Education</TypographyH1>
        <TypographyP>My previous study...</TypographyP>
      </CardHeader>
      {education.map((item, index) => {
        return (
          <CardContent className="text-xl text-slate-100" key={index}>
            <p>{item.school}</p>
            <div className="text-sm text-slate-400">
              <p>{item.programme}</p>
              <p>{item.location}</p>
              <p>
                {CommonUtil.getDisplayDateRange(item.dateStart, item.dateEnd)}
              </p>
            </div>
          </CardContent>
        );
      })}
    </Card>
  );
};
