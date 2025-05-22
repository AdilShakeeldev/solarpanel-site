import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, Users } from "lucide-react";

export default function Home() {
  // This would come from a database/API in a real application
  const subscriberCount = 12458;
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-foreground py-16 text-white">
        <div className="container-magazine grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="magazine-title text-white mb-4">
              SOLAR<span className="text-primary">CLUB</span>DISCOUNT
            </h1>
            <p className="text-xl mb-6 text-white/90">
              The Industry Magazine for Solar Panel Cleaning Professionals
            </p>
            <div className="flex items-center space-x-4 mb-8 text-white/80">
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span>{currentDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{subscriberCount.toLocaleString()} Subscribers</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/digital-edition">View Latest Issue</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/solar-panel-cleaning.jpg"
              alt="Solar panel cleaning professional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-muted">
        <div className="container-magazine">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title inline-block">Our Mission</h2>
            <p className="text-lg mb-8">
              SolarClubDiscount Magazine is dedicated to the solar panel cleaning industry,
              providing professionals with the latest news, techniques, equipment reviews,
              and marketplace opportunities. We connect businesses, technicians, and customers
              to foster a cleaner, more efficient renewable energy future.
            </p>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container-magazine">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">Featured Articles</h2>
            <Link href="/articles" className="text-primary hover:underline font-medium">
              View All Articles
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 */}
            <Card className="article-card">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/article-1.jpg"
                  alt="The Future of Solar Panel Cleaning"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>The Future of Solar Panel Cleaning Technologies</CardTitle>
                <CardDescription className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  May 15, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Discover the latest innovations in robotic cleaners, water-saving systems,
                  and nanotechnology coatings that are revolutionizing the solar panel cleaning industry.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/articles/future-cleaning-tech">Read More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 2 */}
            <Card className="article-card">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/article-2.jpg"
                  alt="Maximizing Solar Efficiency"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Maximizing Solar Efficiency Through Regular Maintenance</CardTitle>
                <CardDescription className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  May 10, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Learn how a proper cleaning and maintenance schedule can increase
                  energy production by up to 25% and extend the lifespan of solar installations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/articles/maintenance-efficiency">Read More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Article 3 */}
            <Card className="article-card">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/article-3.jpg"
                  alt="Building Your Cleaning Business"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Building Your Solar Panel Cleaning Business</CardTitle>
                <CardDescription className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  May 5, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  From startup costs to marketing strategies, this comprehensive guide
                  provides essential tips for entrepreneurs entering the solar cleaning market.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/articles/business-guide">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Marketplace */}
      <section className="py-12 bg-muted">
        <div className="container-magazine">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h2 className="section-title">Cleaning Services</h2>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Looking for Professional Solar Panel Cleaning?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Browse our directory of professional solar panel cleaning services,
                    or post your project to receive estimates from qualified providers.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link href="/services/request-quote">Request Cleaning Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/services/providers">Find Cleaning Providers</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Marketplace */}
            <div>
              <h2 className="section-title">Equipment Marketplace</h2>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Shop for Solar Cleaning Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Discover the latest tools and equipment for solar panel cleaning,
                    including specialized brushes, water filtration systems, and safety gear.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link href="/marketplace/equipment">Browse Equipment</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/marketplace/sell">Sell Your Equipment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-magazine text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Subscribe to SolarClubDiscount Magazine today and connect with thousands
            of solar panel cleaning professionals across the industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/subscribe">Subscribe Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground" asChild>
              <Link href="/advertise">Place an Advertisement</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
