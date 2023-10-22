import clsx from "clsx";
import { LoadableList } from "src/components/SmallTalk/LoadableList";
import { TypographyH1 } from "src/components/common/TypographyH1";
import { TypographyP } from "src/components/common/TypographyP";
import { Button } from "src/components/ui/button";
import { trashQuestions, trashAnswers } from "src/constants/SmallTalkConsts";

const displayQuestionAnswer = [
  {
    title: "Question",
    data: trashQuestions,
  },
  {
    title: "Answer",
    data: trashAnswers,
  },
];

export default function SmallTalk() {
  return (
    <div className="flex min-h-screen">
      {displayQuestionAnswer.map((item, index) => {
        const isQuestion = item.title === "Question";
        return (
          <div
            key={index}
            className={clsx(
              "w-1/2  text-center",
              isQuestion ? "bg-yellow-600" : "bg-green-800"
            )}
          >
            <TypographyH1>{item.title}</TypographyH1>
            <Button variant="outline" className="mt-4">
              <TypographyP>
                {isQuestion ? "我唔識問 🤔" : "我撚識答 😭"}
              </TypographyP>
            </Button>
            <LoadableList data={item.data} />
          </div>
        );
      })}
    </div>
  );
}
