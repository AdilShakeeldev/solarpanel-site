import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export const metadata = {
  title: 'Subscribe to SolarClubDiscount Magazine',
  description: 'Subscribe to the leading magazine for solar panel cleaning professionals. Get the latest industry news, equipment reviews, and more.',
};

export default function SubscribePage() {
  return (
    <div className="py-10">
      <div className="container-magazine">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Subscribe to SolarClubDiscount</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals in the solar panel cleaning industry
            and stay updated with the latest news, techniques, and marketplace opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Subscription Benefits */}
          <div className="space-y-6">
            <h2 className="section-title">Subscriber Benefits</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Monthly Print Magazine</h3>
                  <p className="text-muted-foreground">Receive our high-quality magazine delivered directly to your door every month.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Digital Access</h3>
                  <p className="text-muted-foreground">Full access to our website, digital edition, and archive of past issues.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Exclusive Content</h3>
                  <p className="text-muted-foreground">Special articles and industry insights available only to subscribers.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Marketplace Discounts</h3>
                  <p className="text-muted-foreground">Special discounts on equipment and services from our marketplace partners.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Industry Directory Listing</h3>
                  <p className="text-muted-foreground">List your business in our professional directory for increased visibility.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Subscription Form */}
          <div>
            <h2 className="section-title mb-6">Subscribe Today</h2>
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Subscription Plan</CardTitle>
                <CardDescription>
                  All plans include both print and digital access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plans */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="annual" defaultChecked />
                    <Label htmlFor="annual" className="flex-1 flex justify-between">
                      <span>Annual Subscription</span>
                      <span className="font-semibold">$89.99</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="biannual" />
                    <Label htmlFor="biannual" className="flex-1 flex justify-between">
                      <span>Two-Year Subscription</span>
                      <span className="font-semibold">$149.99</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="monthly" />
                    <Label htmlFor="monthly" className="flex-1 flex justify-between">
                      <span>Monthly Subscription</span>
                      <span className="font-semibold">$9.99/month</span>
                    </Label>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Solar Way" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" />
                    </div>
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="NY" />
                    </div>
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input id="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-8">
          <h2 className="section-title text-center mb-10">What Our Subscribers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "SolarClubDiscount has transformed how I run my cleaning business. The equipment reviews alone have saved me thousands in purchasing decisions."
                </blockquote>
                <div className="font-semibold">Michael Johnson</div>
                <div className="text-sm text-muted-foreground">SunClean Services, TX</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "I've been a subscriber for three years now, and each issue gives me valuable insights into industry trends and new cleaning techniques."
                </blockquote>
                <div className="font-semibold">Sarah Williams</div>
                <div className="text-sm text-muted-foreground">Bright Solar Solutions, CA</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "The marketplace section helped me connect with commercial clients and grow my business by 40% in just one year. Incredible resource!"
                </blockquote>
                <div className="font-semibold">David Rodriguez</div>
                <div className="text-sm text-muted-foreground">Clean Energy Maintenance, FL</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-8">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How often is the magazine published?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>SolarClubDiscount Magazine is published monthly, with 12 issues per year. Subscribers receive the print edition around the first week of each month, and the digital edition is typically available a few days earlier.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you ship internationally?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Yes, we ship to most countries worldwide. International shipping rates apply and vary by location. Please contact our subscription department for specific rates to your country.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my subscription?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Yes, you can cancel your subscription at any time. For annual subscriptions, we offer prorated refunds for the remaining issues. Monthly subscriptions can be cancelled before the next billing cycle.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer bulk subscriptions for businesses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Absolutely! We offer special rates for businesses ordering multiple subscriptions. Please contact our business department at business@solarclubdiscount.com for details and pricing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
