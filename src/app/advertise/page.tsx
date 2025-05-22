import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export const metadata = {
  title: 'Advertise in SolarClubDiscount Magazine',
  description: 'Reach thousands of solar panel cleaning professionals by advertising in SolarClubDiscount Magazine, the leading industry publication.',
};

export default function AdvertisePage() {
  return (
    <div className="py-10">
      <div className="container-magazine">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Advertise With Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of solar panel cleaning professionals and industry leaders
            through our print magazine, digital edition, and online marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Advertising Benefits */}
          <div className="space-y-6">
            <h2 className="section-title">Why Advertise With Us?</h2>
            <div className="bg-secondary/10 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
                  <div className="text-sm">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">92%</div>
                  <div className="text-sm">Industry Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">45,000+</div>
                  <div className="text-sm">Monthly Website Visits</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8.5</div>
                  <div className="text-sm">Avg. Reader Engagement (minutes)</div>
                </div>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Targeted Audience</h3>
                  <p className="text-muted-foreground">Reach the exact audience you need - solar panel cleaning professionals, business owners, and industry suppliers.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Multi-Platform Presence</h3>
                  <p className="text-muted-foreground">Your advertisement appears in our print magazine, digital edition, and on our website for maximum exposure.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">High Engagement</h3>
                  <p className="text-muted-foreground">Our readers are actively looking for products and services to improve their businesses and operations.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Assistance</h3>
                  <p className="text-muted-foreground">Our advertising team helps you design and optimize your ad for maximum impact and results.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Advertising Options */}
          <div>
            <h2 className="section-title mb-6">Advertising Options</h2>
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Ad Format</CardTitle>
                <CardDescription>
                  Select the advertising option that best fits your needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Ad Types */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fullPage" />
                    <Label htmlFor="fullPage" className="flex-1 flex justify-between">
                      <span>Full Page Ad (Print + Digital)</span>
                      <span className="font-semibold">$1,495</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="halfPage" defaultChecked />
                    <Label htmlFor="halfPage" className="flex-1 flex justify-between">
                      <span>Half Page Ad (Print + Digital)</span>
                      <span className="font-semibold">$895</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="quarterPage" />
                    <Label htmlFor="quarterPage" className="flex-1 flex justify-between">
                      <span>Quarter Page Ad (Print + Digital)</span>
                      <span className="font-semibold">$595</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="businessDirectory" />
                    <Label htmlFor="businessDirectory" className="flex-1 flex justify-between">
                      <span>Business Directory Listing (3 months)</span>
                      <span className="font-semibold">$299</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="serviceRequests" />
                    <Label htmlFor="serviceRequests" className="flex-1 flex justify-between">
                      <span>Service Request Ad (Online)</span>
                      <span className="font-semibold">$199/month</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="equipmentAd" />
                    <Label htmlFor="equipmentAd" className="flex-1 flex justify-between">
                      <span>Equipment Marketplace Listing</span>
                      <span className="font-semibold">$99/month</span>
                    </Label>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" placeholder="Solar Solutions Inc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input id="contactName" placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adDetails">Ad Details / Special Requirements</Label>
                    <textarea
                      id="adDetails"
                      rows={3}
                      className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please provide any specific details about your advertisement..."
                    ></textarea>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Advertising Request</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Ad Specifications */}
        <div className="mb-16">
          <h2 className="section-title text-center mb-8">Advertising Specifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Print Ad Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold">Full Page</div>
                  <p className="text-sm text-muted-foreground">8.5" x 11" (with 0.125" bleed)</p>
                </div>
                <div>
                  <div className="font-semibold">Half Page</div>
                  <p className="text-sm text-muted-foreground">8.5" x 5.5" or 4.25" x 11"</p>
                </div>
                <div>
                  <div className="font-semibold">Quarter Page</div>
                  <p className="text-sm text-muted-foreground">4.25" x 5.5"</p>
                </div>
                <div>
                  <div className="font-semibold">File Format</div>
                  <p className="text-sm text-muted-foreground">High-resolution PDF, CMYK, 300 DPI</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Digital Ad Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold">Website Banner</div>
                  <p className="text-sm text-muted-foreground">728x90px, 300x250px, or 160x600px</p>
                </div>
                <div>
                  <div className="font-semibold">Digital Edition</div>
                  <p className="text-sm text-muted-foreground">Same as print specifications</p>
                </div>
                <div>
                  <div className="font-semibold">File Format</div>
                  <p className="text-sm text-muted-foreground">JPG, PNG, or GIF (animated accepted)</p>
                </div>
                <div>
                  <div className="font-semibold">File Size</div>
                  <p className="text-sm text-muted-foreground">Maximum 150KB</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Marketplace Listings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold">Service Request Ad</div>
                  <p className="text-sm text-muted-foreground">Company name, logo, 50-word description, contact info</p>
                </div>
                <div>
                  <div className="font-semibold">Equipment Listing</div>
                  <p className="text-sm text-muted-foreground">Product name, up to 5 images, 100-word description, price, contact info</p>
                </div>
                <div>
                  <div className="font-semibold">Business Directory</div>
                  <p className="text-sm text-muted-foreground">Company name, logo, category, 25-word description, contact info</p>
                </div>
                <div>
                  <div className="font-semibold">Image Format</div>
                  <p className="text-sm text-muted-foreground">JPG or PNG, minimum 600px wide</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advertiser Testimonials */}
        <div className="py-8">
          <h2 className="section-title text-center mb-10">What Our Advertisers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="relative h-12 w-12 mb-4 mx-auto rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">SC</span>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-4 text-center">
                  "Our equipment sales increased by 35% within three months of advertising in SolarClubDiscount. The targeted audience was exactly what we needed."
                </blockquote>
                <div className="font-semibold text-center">SolarClean Tools</div>
                <div className="text-sm text-muted-foreground text-center">Equipment Manufacturer</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="relative h-12 w-12 mb-4 mx-auto rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">EP</span>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-4 text-center">
                  "As a service provider, the response to our half-page ad was immediate. We received calls from qualified leads the week the magazine was published."
                </blockquote>
                <div className="font-semibold text-center">EcoPower Cleaning</div>
                <div className="text-sm text-muted-foreground text-center">Service Provider</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="relative h-12 w-12 mb-4 mx-auto rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">ST</span>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-4 text-center">
                  "The team at SolarClubDiscount worked with us to create an effective advertising campaign that connected us with commercial solar farms nationwide."
                </blockquote>
                <div className="font-semibold text-center">SunTech Solutions</div>
                <div className="text-sm text-muted-foreground text-center">Technology Provider</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-12 bg-muted rounded-lg mt-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect with Industry Professionals?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our advertising team is ready to help you create a custom advertising plan
            that meets your goals and budget. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:advertising@solarclubdiscount.com">Email Our Advertising Team</a>
            </Button>
            <Button size="lg" variant="outline">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
