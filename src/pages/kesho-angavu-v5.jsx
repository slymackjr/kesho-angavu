// export default KeshoAngavuPage;
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Globe, Zap, ChevronRight, Users, Building, Award, Menu } from "lucide-react";
import { AnimatedImageGallery,ContactForm,HeroImageSphere } from '@/elements';
import { photo1, photo2, user1, user2, user3 } from '@/assets';

// Components (unchanged for brevity, but ensure they are responsive)
const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    link: 'text-blue-600 underline-offset-4 hover:underline p-0'
  };
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm', // Adjusted for mobile
    lg: 'h-12 px-6 py-3 text-base' // Slightly smaller for better mobile fit
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-xl bg-white shadow-sm w-full ${className}`} {...props}>{children}</div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-base sm:text-lg font-semibold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-xs sm:text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 pt-0 ${className}`}>{children}</div>
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
    className={`flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium ${
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text">Kesho Angavu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">About</a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">Services</a>
            <a href="#team" className="text-sm font-medium transition-colors hover:text-primary">Our Team</a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">Testimonials</a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</a>
          </nav>

          {/* Desktop "Get Started" + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Only visible on desktop */}
            <div className="hidden md:block">
              <Button className="shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 text-sm">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Only visible on mobile */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b fixed inset-x-0 top-16 z-40 shadow-lg">
            <div className="container mx-auto py-4 px-4 sm:px-6 space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium hover:text-primary"
                >
                  {item.label}
                </a>
              ))}

              {/* Get Started for mobile only */}
              <Button
                className="w-full mt-2 text-sm shadow shadow-primary/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="px-2 sm:px-3 py-1 text-xs sm:text-sm" variant="secondary">Empowering Youth Holistically</Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Nurturing Skills, Values, and Purpose in Tanzania's Next Generation
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[600px]">
                  Through targeted training, spiritual growth, health education, and leadership development, we support Tanzanian youth—especially out-of-school individuals—to become responsible, self-reliant, and purpose-driven citizens.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="default" className="shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="default" className="border-2 transition-all hover:bg-muted">
                    Support Us
                  </Button>
                </div>
              </div>
              {/* Image Section */}
              <div className="flex justify-center mt-6 lg:mt-0">
                <HeroImageSphere />
              </div>
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 mb-2 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">1000+</h3>
                <p className="text-xs sm:text-sm text-gray-600">Lives Transformed</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 mb-2 sm:mb-4">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">5+</h3>
                <p className="text-xs sm:text-sm text-gray-600">Empowerment Programs</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 mb-2 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">3</h3>
                <p className="text-xs sm:text-sm text-gray-600">Community Awards</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 mb-2 sm:mb-4">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">2</h3>
                <p className="text-xs sm:text-sm text-gray-600">Regions Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">About Us</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                A Holistic Approach to Youth Empowerment
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-gray-600">
                Kesho Angavu ("Brighter Tomorrow") is an initiative by TUCASA MUHAS that responds to the pressing needs of out-of-school youth in Tanzania. Through our Youth Center of Excellence, we provide transformative skills, mentorship, and wellness education to empower youth aged 15–24 to overcome poverty, unemployment, and health vulnerabilities.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 sm:py-12 lg:grid-cols-2 lg:gap-12">
              <AnimatedImageGallery />

              <div className="flex flex-col justify-center space-y-6">
                <Tabs defaultValue="vision" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="vision">Vision</TabsTrigger>
                    <TabsTrigger value="mission">Mission</TabsTrigger>
                    <TabsTrigger value="values">Values</TabsTrigger>
                  </TabsList>

                  <TabsContent value="vision" className="mt-4 space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold">Our Vision</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      To build a future where every Tanzanian youth—regardless of background—has the opportunity, skills, and support to lead a productive, healthy, and inspired life.
                    </p>
                  </TabsContent>

                  <TabsContent value="mission" className="mt-4 space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold">Our Mission</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We aim to empower out-of-school youth through practical training in entrepreneurship, financial literacy, digital tools, and reproductive health—while fostering personal growth through mentorship, values education, and community outreach.
                    </p>
                  </TabsContent>

                  <TabsContent value="values" className="mt-4 space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold">Our Values</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-600">Empowerment: Unlocking potential through hands-on skills and opportunity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-600">Equity: Providing equal access to growth, regardless of gender or background</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-600">Sustainability: Driving long-term change through income-generating activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-600">Mentorship: Guiding youth with real-life role models and support networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-600">Wellbeing: Promoting holistic health—mental, physical, and spiritual</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>


        {/* Programs Section */}
        <section id="services" className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Our Programs</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Empowerment Through Action
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-gray-600">
                At Kesho Angavu, we go beyond theory—offering practical, holistic training that helps youth build sustainable livelihoods, lead healthy lives, and become positive agents of change in their communities.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle>Entrepreneurship Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">
                    From tailoring and poultry keeping to agriculture and baking—youth gain hands-on skills that enable self-reliance and business creation.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-xs sm:text-sm">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle>Financial Literacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Courses in savings, credit management, and investment planning to foster long-term financial independence and responsibility.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-xs sm:text-sm">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle>Digital Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Practical IT, social media strategy, and exposure to tech like AI, IoT, and VR—preparing youth for a digital world.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-xs sm:text-sm">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle>Health & Wellness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Promoting healthy lifestyles through sexual/reproductive education, nutrition guidance, physical fitness, and mental wellbeing.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-xs sm:text-sm">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle>Mentorship & Inspiration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Youth are paired with mentors—including past success stories—to boost confidence, ambition, and life planning.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-xs sm:text-sm">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle>Community Outreach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Youth-led health screenings, clean-up campaigns, and awareness events create ripple effects of change in local communities.
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-xs sm:text-sm">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Our Team</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Visionaries Behind the Movement
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-gray-600">
                Kesho Angavu is led by young, passionate changemakers from TUCASA MUHAS who are deeply rooted in the communities they serve. Their leadership reflects the values of resilience, faith, and action that power this initiative.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-center">Leadership Team</h3>
              <div className="mx-auto grid max-w-5xl gap-8 grid-cols-1 sm:grid-cols-2">
                <Card className="group overflow-hidden border-0 bg-transparent">
                  <div className="relative aspect-square overflow-hidden rounded-xl w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 sm:p-6">
                      <div className="text-white">
                        <h4 className="font-bold text-sm sm:text-base">Daniel J Magomele</h4>
                        <p className="text-xs sm:text-sm text-white/80">Project Chairperson</p>
                      </div>
                    </div>
                    <img
                      src={photo2}
                      alt="Daniel J Magomele"
                      className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="px-2 pt-4">
                    <CardTitle>Daniel J Magomele</CardTitle>
                    <CardDescription>Project Chairperson</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <p className="text-xs sm:text-sm text-gray-600">
                      As the visionary behind Kesho Angavu, Daniel translates lived experiences into sustainable action. His leadership blends compassion with strategy, guiding the initiative to reach out-of-school youth with life-changing opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group overflow-hidden border-0 bg-transparent">
                  <div className="relative aspect-square overflow-hidden rounded-xl w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 sm:p-6">
                      <div className="text-white">
                        <h4 className="font-bold text-sm sm:text-base">Ezekiel Ndege</h4>
                        <p className="text-xs sm:text-sm text-white/80">Organization’s Chairperson</p>
                      </div>
                    </div>
                    <img
                      src={photo1}
                      alt="Ezekiel Ndege"
                      className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="px-2 pt-4">
                    <CardTitle>Ezekiel Ndege</CardTitle>
                    <CardDescription>Organization’s Chairperson</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <p className="text-xs sm:text-sm text-gray-600">
                      Ezekiel anchors the broader mission of TUCASA MUHAS. He plays a crucial role in bridging the academic, spiritual, and community dimensions of the program—ensuring every strategy is grounded in impact.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                Together, this team embodies the spirit of youth-led development. With faith, innovation, and grassroots leadership, they’re reimagining what a brighter tomorrow can look like for Tanzania’s most vulnerable youth.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Impact Stories</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Voices of Transformation
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-gray-600">
                Behind every number is a story. These testimonies reflect the courage, growth, and empowerment sparked by Kesho Angavu across communities in Tanzania.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-white/60 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-sm"></div>
                      <img
                        src={user1}
                        alt="Amina"
                        className="relative rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">Amina</CardTitle>
                      <CardDescription>Tailoring Graduate</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="text-xs sm:text-sm text-gray-600 pt-4">
                      I had dropped out of school and thought my dreams had ended. The tailoring course not only gave me skills, but also hope. I now run my own small shop and teach others in my neighborhood.
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-sm"></div>
                      <img
                        src={user2}
                        alt="Juma"
                        className="relative rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">Juma</CardTitle>
                      <CardDescription>Poultry Farmer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="text-xs sm:text-sm text-gray-600 pt-4">
                      The mentorship I received through Kesho Angavu pushed me beyond my fears. Today, I run a poultry business with five employees and I’ve even saved enough to help my younger sister go to school.
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 hover:border-blue-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 opacity-30 blur-sm"></div>
                      <img
                        src={user3}
                        alt="Fatuma"
                        className="relative rounded-full h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">Fatuma</CardTitle>
                      <CardDescription>Community Health Volunteer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="text-xs sm:text-sm text-gray-600 pt-4">
                      Through the health outreach sessions, we’ve seen more youth come forward to get tested and talk about reproductive health. The stigma is slowly fading. We’re building a healthier, braver generation.
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-200">"</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Contact Us</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Get In Touch
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-gray-600">
                Want to support our mission or learn more? Reach out to us!
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 grid-cols-1 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="rounded-xl border p-4 sm:p-6 bg-white/60 shadow-lg border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm">P.O. Box 65007, Dar es Salaam, Tanzania</p>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm">+255 757 346 979 (Daniel) / +255 755 059 155 (Ezekiel)</p>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm">info@keshoangavu.org</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden h-[250px] sm:h-[300px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m10!1d3960.250468735476!2d39.27445861475781!3d-6.769518995104103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c1c8b1c8b1f%3A0x7e6c1b7b1b7b1b7!2sMuhimbili%20University%20of%20Health%20and%20Allied%20Sciences!5e0!3m2!1sen!2stz!4v1698765432109!5m2!1sen!2stz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Kesho Angavu Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
              {/* <div className="rounded-xl border p-4 sm:p-6 bg-white/60 shadow-lg border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-xs sm:text-sm font-medium">First name</label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-xs sm:text-sm font-medium">Last name</label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john.smith@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div> */}
              <ContactForm/>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white/95 backdrop-blur border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-lg sm:text-xl">
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text">Kesho Angavu</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Empowering out-of-school youth in Tanzania since 2020 through skills, health, and economic opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Entrepreneurship Training</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Financial Skills</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Digital Skills</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Health Education</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold">About</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Our Mission</a></li>
                <li><a href="#team" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Our Team</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Impact</a></li>
                <li><a href="#contact" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@keshoangavu.org" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Email Us</a></li>
                <li><a href="http://tucasamuhas.blogspot.com" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-center text-xs sm:text-sm text-gray-600">
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