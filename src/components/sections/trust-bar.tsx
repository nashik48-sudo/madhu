import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function TrustBar() {
  const logos = PlaceHolderImages.slice(0, 5).map(img => ({
    name: img.description,
    imageUrl: img.imageUrl,
    imageHint: img.imageHint
  }));

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <div key={logo.name} className="relative h-8 w-32 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert">
              <Image
                src={logo.imageUrl}
                alt={logo.name}
                fill
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
