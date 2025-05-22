import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export const metadata = {
  title: 'Magazine Index - SolarClubDiscount',
  description: 'Browse the complete index of SolarClubDiscount Magazine, the leading publication for solar panel cleaning professionals.',
};

export default function IndexPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  // These would come from a database in a real application
  const categories = [
    {
      id: 'industry-news',
      title: 'Industry News',
      count: 12,
      description: 'Latest developments in the solar panel cleaning industry',
    },
    {
      id: 'techniques',
      title: 'Cleaning Techniques',
      count: 8,
      description: 'Professional methods and approaches for effective cleaning',
    },
    {
      id: 'equipment',
      title: 'Equipment Reviews',
      count: 15,
      description: 'Analysis and reviews of the latest cleaning equipment',
    },
    {
      id: 'business',
      title: 'Business Strategies',
      count: 9,
      description: 'Tips for growing your solar panel cleaning business',
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      count: 7,
      description: 'Real-world examples of successful cleaning projects',
    },
    {
      id: 'technology',
      title: 'Emerging Technology',
      count: 11,
      description: 'New technologies affecting the solar cleaning industry',
    },
  ];

  return (
    <div className="py-10">
      <div className="container-magazine">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Magazine Index</h1>
          <div className="flex items-center justify-center">
            <CalendarDays className="h-5 w-5 mr-2 text-primary" />
            <span className="text-muted-foreground">{currentDate} Issue</span>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="pl-5 space-y-1">
                  <li className="list-disc list-inside">
                    <Link href="/articles/future-cleaning-tech" className="text-secondary hover:text-primary transition-colors">
                      The Future of Solar Panel Cleaning Technologies (p. 4)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/maintenance-efficiency" className="text-secondary hover:text-primary transition-colors">
                      Maximizing Solar Efficiency Through Regular Maintenance (p. 10)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/business-guide" className="text-secondary hover:text-primary transition-colors">
                      Building Your Solar Panel Cleaning Business (p. 16)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Industry News</h3>
                <ul className="pl-5 space-y-1">
                  <li className="list-disc list-inside">
                    <Link href="/articles/industry-report" className="text-secondary hover:text-primary transition-colors">
                      2025 Solar Cleaning Industry Market Report (p. 22)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/regulations" className="text-secondary hover:text-primary transition-colors">
                      New Regulations Affecting Solar Maintenance Providers (p. 28)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/global-trends" className="text-secondary hover:text-primary transition-colors">
                      Global Trends in Solar Panel Installation and Maintenance (p. 34)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Equipment Reviews</h3>
                <ul className="pl-5 space-y-1">
                  <li className="list-disc list-inside">
                    <Link href="/articles/water-systems" className="text-secondary hover:text-primary transition-colors">
                      Top 5 Water Filtration Systems for 2025 (p. 40)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/cleaning-tools" className="text-secondary hover:text-primary transition-colors">
                      Comparing Professional Cleaning Tools: Which Is Right for You? (p. 46)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/robotic-cleaners" className="text-secondary hover:text-primary transition-colors">
                      The Rise of Autonomous Robotic Cleaners (p. 52)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Service Providers</h3>
                <ul className="pl-5 space-y-1">
                  <li className="list-disc list-inside">
                    <Link href="/articles/service-directory" className="text-secondary hover:text-primary transition-colors">
                      National Directory of Solar Panel Cleaning Services (p. 58)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/articles/case-study" className="text-secondary hover:text-primary transition-colors">
                      Case Study: Commercial Solar Farm Maintenance Protocol (p. 66)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Marketplace</h3>
                <ul className="pl-5 space-y-1">
                  <li className="list-disc list-inside">
                    <Link href="/marketplace/equipment" className="text-secondary hover:text-primary transition-colors">
                      Equipment Listings (p. 72)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/marketplace/miscellaneous" className="text-secondary hover:text-primary transition-colors">
                      Miscellaneous For Sale (p. 80)
                    </Link>
                  </li>
                  <li className="list-disc list-inside">
                    <Link href="/services/cleaning" className="text-secondary hover:text-primary transition-colors">
                      Service Advertisements (p. 86)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              For a digital copy of this issue, please visit our <Link href="/digital-edition" className="text-primary hover:underline">Digital Edition</Link>.
            </div>
          </CardFooter>
        </Card>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="section-title mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center">
                    <span>{category.title}</span>
                    <span className="text-sm bg-primary/10 text-primary-foreground px-2 py-1 rounded-full">
                      {category.count} Articles
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4">
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/articles/category/${category.id}`}>View Articles</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Archive */}
        <div>
          <h2 className="section-title mb-6">Previous Issues</h2>
          <div className="bg-muted rounded-lg p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(12)].map((_, i) => {
                // Calculate the month by subtracting from current month
                const today = new Date();
                const issueDate = new Date(today.getFullYear(), today.getMonth() - i - 1);
                const month = issueDate.toLocaleString('default', { month: 'short' });
                const year = issueDate.getFullYear();

                return (
                  <Link
                    key={i}
                    href={`/archive/${year}/${month.toLowerCase()}`}
                    className="block text-center p-4 bg-card rounded-md hover:shadow-md transition-shadow"
                  >
                    <div className="font-semibold">{month}</div>
                    <div className="text-sm text-muted-foreground">{year}</div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/archive">View Complete Archive</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
