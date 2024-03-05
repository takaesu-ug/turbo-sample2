import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import { Badge } from '@repo/ui/components/badge';

function Test() {
  return (
    <>
      <Badge>デフォルト</Badge>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-purple-600">テストで</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>いきましょ</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export { Test };
