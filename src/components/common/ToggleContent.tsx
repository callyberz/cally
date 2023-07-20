import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";

export interface Props {
  title: string;
  children: React.ReactNode;
}

export const ToggleContent = ({ title, children }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full rounded-md">
      <AccordionItem value="item-1" className="px-4">
        <AccordionTrigger className="whitespace-nowrap">
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
