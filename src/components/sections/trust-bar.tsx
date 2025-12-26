import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function TrustBar() {
  const logos = PlaceHolderImages.filter(img => img.id.startsWith('trust-logo-'));

  return (
    <div className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by the world's leading financial firms
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <div key={logo.id} className="relative h-10 w-32 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={150}
                height={50}
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
