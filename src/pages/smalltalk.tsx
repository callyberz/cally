import clsx from "clsx";
import { RandomList } from "src/components/SmallTalk/RandomList";
import { TypographyH1 } from "src/components/common/TypographyH1";
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
              isQuestion ? "bg-sky-600" : "bg-green-800"
            )}
          >
            <TypographyH1>{item.title}</TypographyH1>

            <RandomList
              data={item.data}
              buttonText={isQuestion ? "我唔識問 🤔" : "我撚識答 😭"}
            />
          </div>
        );
      })}
    </div>
  );
}
