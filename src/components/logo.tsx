import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 font-headline text-2xl font-bold text-primary', className)}>
      <div className="rounded-md bg-current p-1.5">
        <svg
          className="h-5 w-5 text-background"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.25 15.6818H10.6364V12.9545H17.25V10.2273H10.6364V7.5H18V4H6V20H18V15.6818H17.25Z"
            fill="currentColor"
          />
        </svg>
      </div>
      EquityStream
    </Link>
  );
}
