import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container-magazine">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About SolarClubDiscount</h3>
            <p className="text-sm mb-4">
              The industry-leading magazine focused on the solar panel cleaning business.
              We provide valuable insights, industry news, equipment reviews, and a marketplace
              for solar cleaning professionals.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles/featured" className="hover:text-primary transition-colors">
                  Featured Articles
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="hover:text-primary transition-colors">
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link href="/marketplace/equipment" className="hover:text-primary transition-colors">
                  Equipment Marketplace
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-primary transition-colors">
                  Subscription Information
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-primary transition-colors">
                  Place an Advertisement
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>123 Solar Way, Sunshine City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@solarclubdiscount.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive the latest updates, articles, and offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 pt-6 mt-6 text-sm text-center md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SolarClubDiscount Magazine. All Rights Reserved.
          </div>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
