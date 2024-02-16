import { Button } from '@repo/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="border mb-5 hover:bg-gray-100">hoge</p>
        <Button appName="私だ">FUGA</Button>
      </div>

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
