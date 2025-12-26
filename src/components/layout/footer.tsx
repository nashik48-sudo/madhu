import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  platform: ['Features', 'Pricing', 'FAQ'],
  company: ['About Us', 'Careers', 'Contact'],
  resources: ['Blog', 'API Documentation', 'Support'],
};

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Data-driven insights for financial markets.
            </p>
            <div className="mt-2 text-sm text-muted-foreground">
              <a href="mailto:support@equitystream.com" className="hover:underline">support@equitystream.com</a><br/>
              <a href="tel:+1(555)123-4567" className="hover:underline">+1 (555) 123-4567</a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h4 className="font-semibold text-foreground">Platform</h4>
                <ul className="mt-4 space-y-2">
                  {footerLinks.platform.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Company</h4>
                <ul className="mt-4 space-y-2">
                  {footerLinks.company.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Resources</h4>
                <ul className="mt-4 space-y-2">
                  {footerLinks.resources.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EquityStream. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
