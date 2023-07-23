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
import { ToggleContent } from "../common/ToggleContent";
import { CommonUtil } from "src/utils/CommonUtil";

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
        <CardTitle>Working Experience</CardTitle>
      </CardHeader>
      {experiences.map((item) => {
        return (
          <>
            <CardContent>
              <ToggleContent title={item.company}>
                <div className="dark:text-slate-400">
                  <div className="text-xl text-slate-100">
                    <p>{item.title}</p>
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
                    <ul className="list-inside list-disc" key={index}>
                      <li>{value}</li>
                    </ul>
                  ))}
                </div>
              </ToggleContent>
            </CardContent>
          </>
        );
      })}
    </Card>
  );
};
