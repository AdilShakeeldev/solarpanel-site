import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PhoneCall, Search, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Logo from '@/components/ui/Logo';

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-1">
        <div className="container-magazine flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>(555) 123-4567</span>
            <span>May Issue 2025</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/digital-edition" className="hover:text-primary transition-colors">
              Digital Edition
            </Link>
            <Link href="/login" className="hover:text-primary transition-colors">
              Login / Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-magazine py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Contact">
              <PhoneCall className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-muted">
        <div className="container-magazine">
          <ul className="flex items-center overflow-x-auto py-2 space-x-8 text-sm font-medium">
            <li>
              <Link href="/" className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/index" className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                Index
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                  Articles
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/articles/featured">Featured Articles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/articles/latest">Latest Articles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/articles/archive">Archive</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/services/cleaning">Cleaning Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/industry">Industry Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                  Marketplace
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/marketplace/equipment">Equipment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/marketplace/miscellaneous">Miscellaneous</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/subscribe" className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                Subscribe
              </Link>
            </li>
            <li>
              <Link href="/advertise" className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                Advertise
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors py-2 inline-block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
