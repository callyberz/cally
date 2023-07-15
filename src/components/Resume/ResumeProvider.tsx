import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { ResumeColumn } from "src/types/Resume";

export const ResumeContext = createContext<{
  selectedColumn: ResumeColumn | undefined;
  setSelectedColumn: React.Dispatch<
    React.SetStateAction<ResumeColumn | undefined>
  >;
}>({
  selectedColumn: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedColumn: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ResumeProvider = ({ children }: Props) => {
  const router = useRouter();
  const [selectedColumn, setSelectedColumn] = useState<
    ResumeColumn | undefined
  >(undefined);

  useEffect(() => {
    const onHashChangeStart = (url: string) => {
      if (!url.includes("#")) {
        setSelectedColumn(undefined);
        return;
      }
      const typeAfterReplace = url
        .replace("/#", "")
        .toUpperCase() as keyof typeof ResumeColumn;
      if (!(typeAfterReplace in ResumeColumn)) {
        return;
      }
      setSelectedColumn(ResumeColumn[typeAfterReplace]);
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  return (
    <ResumeContext.Provider value={{ selectedColumn, setSelectedColumn }}>
      {children}
    </ResumeContext.Provider>
  );
};
