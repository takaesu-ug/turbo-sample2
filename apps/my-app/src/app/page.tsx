import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Test,
} from '@repo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="border-8 p-8 font-bold text-3xl">my-app-1</h1>
      <div className="w-full">
        <h2>アコーディオン</h2>
        <Accordion type="single" collapsible={true} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-purple-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full">
        <h2>バッジ</h2>
        <Badge>デフォルト</Badge>
        <Badge variant="secondary" className="ml-2">
          セカンダリ
        </Badge>
        <Badge variant="destructive" className="ml-2">
          デストラクティブ
        </Badge>
        <Badge variant="outline" className="ml-2">
          アウトライン
        </Badge>
      </div>

      <div className="w-full">
        <h2>test</h2>
        <Test />
      </div>
    </main>
  );
}
