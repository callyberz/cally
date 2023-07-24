import React, { useContext } from "react";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { experiences } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { selectedColumnsStyle } from "src/constants/Style";
import { cx } from "class-variance-authority";
import { ResumeColumn } from "src/types/Resume";
import { ToggleContent } from "../common/ToggleContent";
import { CommonUtil } from "src/utils/CommonUtil";
import { TypographyH1 } from "../common/TypographyH1";
import { TypographyP } from "../common/TypographyP";

export const WorkExperience = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        "flex-1 bg-neutral-900",
        selectedColumn === ResumeColumn.WORK && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <TypographyH1>Working Experience</TypographyH1>
        <TypographyP>My previous corporates...</TypographyP>
      </CardHeader>
      {experiences.map((item, index) => {
        return (
          <CardContent key={index}>
            <ToggleContent title={item.company}>
              <div className="dark:text-slate-400">
                <div className="text-xl text-slate-100">
                  <TypographyP>{item.title}</TypographyP>
                </div>

                <div className="text-sm text-slate-100">
                  <p>
                    {CommonUtil.getDisplayDateRange(
                      item.dateStart,
                      item?.dateEnd ?? "Now"
                    )}
                  </p>
                  <p>{item.location}</p>
                </div>

                {item.descriptions.map((value, index) => (
                  <ul className="ml-3 list-disc [&>li]:mt-2" key={index}>
                    <li>{value}</li>
                  </ul>
                ))}
              </div>
            </ToggleContent>
          </CardContent>
        );
      })}
    </Card>
  );
};
