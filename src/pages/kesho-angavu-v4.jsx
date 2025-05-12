import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Globe, Zap, ChevronRight, Users, Building, Award, Menu } from "lucide-react"

// Components
const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    link: 'text-blue-600 underline-offset-4 hover:underline p-0'
  };
  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3 text-lg'
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-xl border bg-white shadow-sm ${className}`} {...props}>{children}</div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    outline: 'border border-gray-300 bg-transparent text-gray-700'
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Separator = () => <hr className="my-4 border-gray-200" />;

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex space-x-1 rounded-xl bg-gray-100 p-1">
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
  <button
    className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
      activeTab === value ? 'bg-white shadow' : 'text-gray-500 hover:text-gray-700'
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, activeTab }) => (
  activeTab === value ? <div>{children}</div> : null
);

const Mail = () => <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>;
const MapPin = () => <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const Phone = () => <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>;

function KeshoAngavuPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  return (
   <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text">Kesho Angavu</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </a>
            <a href="#team" className="text-sm font-medium transition-colors hover:text-primary">
              Our Team
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hidden md:flex">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container py-4 space-y-3">
              <a href="#about" className="block py-2 text-sm font-medium hover:text-primary">
                About
              </a>
              <a href="#services" className="block py-2 text-sm font-medium hover:text-primary">
                Services
              </a>
              <a href="#team" className="block py-2 text-sm font-medium hover:text-primary">
                Our Team
              </a>
              <a href="#testimonials" className="block py-2 text-sm font-medium hover:text-primary">
                Testimonials
              </a>
              <a href="#contact" className="block py-2 text-sm font-medium hover:text-primary">
                Contact
              </a>
              <Button className="w-full mt-2">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <Badge className="px-3 py-1 text-sm" variant="secondary">Empowering Youth</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Building a Brighter Tomorrow for Tanzanian Youth
                 </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Kesho Angavu empowers out-of-school youth through skills training, health education, and economic opportunities to create sustainable futures.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 transition-all hover:bg-muted">
                    Support Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-primary/50 opacity-30 blur-xl"></div>
                  <img
                    src="https://via.placeholder.com/550"
                    width={550}
                    height={550}
                    alt="Youth Training"
                    className="relative rounded-xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-gray-600">Youth Impacted</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-gray-600">Programs Launched</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-gray-600">Community Awards</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">2</h3>
                <p className="text-gray-600">Regions Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">About Us</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                Our Mission
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Kesho Angavu, meaning "Brighter Tomorrow," is an initiative by TUCASA MUHAS to empower out-of-school youth aged 15-24 in Tanzania through skills development, health education, and economic opportunities.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-xl group-hover:opacity-40 transition-all"></div>
                <img
                  src="https://via.placeholder.com/400"
                  width={400}
                  height={400}
                  alt="Youth Center"
                  className="relative mx-auto aspect-video rounded-xl object-cover shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <Tabs defaultValue="vision">
                  <TabsList>
                    <TabsTrigger value="vision">Vision</TabsTrigger>
                    <TabsTrigger value="mission">Mission</TabsTrigger>
                    <TabsTrigger value="values">Values</TabsTrigger>
                  </TabsList>
                  <TabsContent value="vision" className="mt-4 space-y-4">
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="text-gray-600">
                      To create a future where every out-of-school youth in Tanzania is economically empowered and leads a healthy, fulfilling life.
                    </p>
                  </TabsContent>
                  <TabsContent value="mission" className="mt-4 space-y-4">
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide training, mentorship, and economic opportunities to out-of-school youth, addressing poverty, unemployment, and health challenges.
                    </p>
                  </TabsContent>
                  <TabsContent value="values" className="mt-4 space-y-4">
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Empowerment: Equipping youth with skills for success</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Inclusion: Equal opportunities for all</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Sustainability: Creating lasting impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Community: Building strong networks</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Our Programs</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                What We Offer
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Comprehensive training and support programs designed to empower out-of-school youth.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Entrepreneurship Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Skills in poultry, tailoring, agriculture, and bakery to foster self-employment.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Financial Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Training in credit management, savings, and investment for financial independence.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Digital Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Leveraging social media and digital tools for business and education.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Health Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Promoting sexual/reproductive health, nutrition, and exercise.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Infrastructure & Migration</h3>
                    <p className="text-sm text-muted-foreground">
                      Services to optimize performance and reduce costs.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Our Team</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                Meet Our Leadership
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Our dedicated team is passionate about empowering youth and driving change.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 text-center">Leadership Team</h3>
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                <Card className="group overflow-hidden border-0 bg-transparent">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="font-bold">Daniel J Magomele</h4>
                        <p className="text-sm text-white/80">Project Chairperson</p>
                      </div>
                    </div>
                    <img
                      src="https://via.placeholder.com/300"
                      width={300}
                      height={300}
                      alt="Daniel J Magomele"
                      className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="px-2 pt-4">
                    <CardTitle>Daniel J Magomele</CardTitle>
                    <CardDescription>Project Chairperson</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <p className="text-sm text-gray-600">
                      Daniel leads the Kesho Angavu initiative with vision and commitment to youth empowerment.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden border-0 bg-transparent">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="font-bold">Ezekiel Ndege</h4>
                        <p className="text-sm text-white/80">Organization’s Chairperson</p>
                      </div>
                    </div>
                    <img
                      src="https://via.placeholder.com/300"
                      width={300}
                      height={300}
                      alt="Ezekiel Ndege"
                      className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="px-2 pt-4">
                    <CardTitle>Ezekiel Ndege</CardTitle>
                    <CardDescription>Organization’s Chairperson</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <p className="text-sm text-gray-600">
                      Ezekiel oversees TUCASA MUHAS, ensuring the organization’s mission aligns with community needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Impact Stories</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                What Our Community Says
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Hear from the youth and community members whose lives have been transformed.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="bg-white/60 border-2 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-sm"></div>
                      <img
                        src="https://via.placeholder.com/60"
                        width={60}
                        height={60}
                        alt="Amina"
                        className="relative rounded-full h-16 w-16 object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Amina</CardTitle>
                      <CardDescription>Program Participant</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="text-sm text-gray-600 pt-4">
                      The tailoring training gave me skills to start my own business. Now I support my family!
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 border-2 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-sm"></div>
                      <img
                        src="https://via.placeholder.com/60"
                        width={60}
                        height={60}
                        alt="Juma"
                        className="relative rounded-full h-16 w-16 object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Juma</CardTitle>
                      <CardDescription>Entrepreneur</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="text-sm text-gray-600 pt-4">
                      Kesho Angavu’s mentorship helped me grow my poultry business and inspired me to keep going.
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 border-2 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-sm"></div>
                      <img
                        src="https://via.placeholder.com/60"
                        width={60}
                        height={60}
                        alt="Fatuma"
                        className="relative rounded-full h-16 w-16 object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Fatuma</CardTitle>
                      <CardDescription>Community Leader</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="text-sm text-gray-600 pt-4">
                      The health education sessions have reduced stigma and empowered our youth to make better choices.
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Contact Us</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                Get In Touch
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Want to support our mission or learn more? Reach out to us!
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="rounded-xl border-2 p-6 bg-white/60">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <p>P.O. Box 65007, Dar es Salaam, Tanzania</p>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <p>+255 757 346 979 (Daniel) / +255 755 059 155 (Ezekiel)</p>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <p>tucasamuhas@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m10!1d3960.250468735476!2d39.27445861475781!3d-6.769518995104103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c1c8b1c8b1f%3A0x7e6c1b7b1b7b1b7!2sMuhimbili%20University%20of%20Health%20and%20Allied%20Sciences!5e0!3m2!1sen!2stz!4v1698765432109!5m2!1sen!2stz"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Kesho Angavu Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
              <div className="rounded-xl border-2 p-6 bg-white/60">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john.smith@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="gradient-text">Kesho Angavu</span>
              </div>
              <p className="text-sm text-gray-600">
                Empowering out-of-school youth in Tanzania since 2020 through skills, health, and economic opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Entrepreneurship Training</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Financial Skills</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Digital Skills</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Health Education</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">About</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-gray-600 hover:text-blue-600">Our Mission</a></li>
                <li><a href="#team" className="text-sm text-gray-600 hover:text-blue-600">Our Team</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Impact</a></li>
                <li><a href="#contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:tucasamuhas@gmail.com" className="text-sm text-gray-600 hover:text-blue-600">Email Us</a></li>
                <li><a href="http://tucasamuhas.blogspot.com" className="text-sm text-gray-600 hover:text-blue-600">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-center text-sm text-gray-600">
                © {new Date().getFullYear()} TUCASA MUHAS. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default KeshoAngavuPage;