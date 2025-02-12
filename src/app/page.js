import { dmSerif, urbanist } from "@/utils/fonts"
import Image from "next/image"
import { ArrowRight, Calendar, CheckCircle, Clock, MessageSquare, PresentationIcon, Presentation, Star, Rocket, MessageSquareIcon } from "lucide-react"
import Blog from "@/screens/Blog";
import BackgroundDecorations from "@/components/BackgroundDecorations";

export default function Page() {
  const features = [
    {
      title: "Software to be used for",
      description: "Create programs for mobile devices or websites that can stream continuous cricket matches complete with real-time scores, ball-by-ball commentary, and match updates."
    },
    {
      title: "Playing Fantasy Cricket",
      description: "Create programs for mobile devices or websites that can stream continuous cricket matches complete with real-time scores, ball-by-ball commentary, and match updates."
    },
    {
      title: "Information About Cricket",
      description: "Create programs for mobile devices or websites that can stream continuous cricket matches complete with real-time scores, ball-by-ball commentary, and match updates."
    }
  ]
  const cards = [
    {
      title: "API Features Management",
      description: "Using our Cricket API Services You can Quickly Grow any Current System",
      type: "featured",
      label: "Learn More"
    },
    {
      title: "Schedule API",
      description: "Upcoming, Live, Results, Sports Matches API",
      type: "normal"
    },
    {
      title: "Live Score API",
      description: "Real-time Match Live Score Sports API",
      type: "normal"
    },
    {
      title: "News API",
      description: "Get all the update of Latest News of Sports",
      type: "normal"
    },
    {
      title: "Live Match API",
      description: "Real-time Match Live Score Sports API",
      type: "normal"
    },
    {
      title: "Team API",
      description: "Real-time Match Live Score Sports API",
      type: "normal"
    },
    {
      title: "Record API",
      description: "Get all the update of Latest News of Sports",
      type: "normal"
    },
    {
      title: "Player API",
      description: "Real-time Match Live Score Sports API",
      type: "normal"
    }
  ];
  const cricketFeatures = [
    {
      title: "Live Scores Updated in Real-Time",
      description: "Real-time data that is both quick anddependable, revolving around the game&apos;s facts and happenings.",
      bgColor: "bg-orange-50"
    },
    {
      title: "A Large Number Of Statistics",
      description: "Real-time data that is both quick anddependable, revolving around the game&apos;s facts and happenings.",
      bgColor: "bg-purple-50"
    },
    {
      title: "Huge Scope Of Coverage",
      description: "Real-time data that is both quick anddependable, revolving around the game&apos;s facts and happenings.",
      bgColor: "bg-green-50"
    },
    {
      title: "Tailored Assistance",
      description: "Real-time data that is both quick anddependable, revolving around the game&apos;s facts and happenings.",
      bgColor: "bg-orange-50"
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Cricket Data Feed API from CricSportz empowers your sports platform.',
      icon: <Presentation className="w-8 h-8 text-orange-300" />,
    },
    {
      id: 2,
      title: 'Widest coverage and dependability.',
      icon: <Presentation className="w-8 h-8 text-orange-300" />,
    },
    {
      id: 3,
      title: 'Easy Integration. Development-Friendly.',
      icon: <Presentation className="w-8 h-8 text-orange-300" />,
    },
    {
      id: 4,
      title: 'Mobile App Enhance UX using Widgets.',
      icon: <Presentation className="w-8 h-8 text-orange-300" />,
    },
    {
      id: 5,
      title: 'Customized API Products for All Sports',
      icon: <Presentation className="w-8 h-8 text-orange-300" />,
    },
  ];
  const testimonials = [
    {
      text: " Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Chetan Mayal",
      position: "CEO, Cricsportz",
      rating: 5
    },
    {
      text: " Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Chetan Mayal",
      position: "CEO, Cricsportz",
      rating: 5
    },
    {
      text: " Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Chetan Mayal",
      position: "CEO, Cricsportz",
      rating: 5
    },
  ];
  const whyChooseFeatures = [
    { title: 'Fast Delivery Time' },
    { title: 'Affordable Price' },
    { title: 'Complete Transparency' },
    { title: 'Productive Communication' },
    { title: 'Unmatchable Quality' },
    { title: 'Professional Team' },
  ];


  const ChatWidget = () => (
    <div className="absolute top-1/2 right-0 bg-white rounded-lg p-4 shadow-xl w-64 hidden sm:block">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <MessageSquareIcon />
        </div>
        <span className="font-semibold">Chat With Our Expert</span>
      </div>
      <div className="space-y-2 mb-3">
        <div className="h-2 bg-gray-200 rounded w-full"></div>
        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
      </div>
      <button className="w-full bg-blue-500 text-white rounded py-2 text-sm">
        Get Started
      </button>
    </div>
  );

  const FeatureCard = ({ feature }) => (
    <div className="bg-white/10 h-32 sm:h-40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 group hover:bg-white/20 transition-all duration-300">
      <div className="flex flex-col justify-between gap-3 h-full">
        <div className="p-2">
          <Image src="/shuttle 1.png" alt="Feature icon" width={40} height={40} className="object-contain" />
        </div>
        <span className="text-white text-sm sm:text-base font-medium">{feature.title}</span>
      </div>
    </div>
  );

  const ServiceCard = ({ service }) => (
    <div className="bg-white flex justify-evenly flex-col rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-72 sm:h-80">
      <div className="mb-4">
        <Image src="/cup.png" alt="Service icon" width={50} height={50} className="object-contain" />
      </div>
      <h3 className="text-md sm:text-xl md:max-w-[70%] font-semibold mb-4">
        {service.title}
      </h3>
      <button className="flex items-center gap-2 text-sm text-red-600 border border-red-600 rounded-md w-fit px-4 py-2 hover:bg-red-50 transition-colors">
        <span>View More</span>
        <ArrowRight className="w-4 h-4 bg-red-500 text-white p-1 rounded-full" />
      </button>
    </div>
  );

  const FeaturedServiceCard = () => (
    <div className="relative overflow-hidden h-[400px] sm:h-[500px] rounded-lg p-6 text-white md:col-span-2 lg:col-span-1">
      <div className="absolute inset-0 -z-10">
        <Image src="/sv-bg.png" alt="Featured background" fill className="object-cover" />
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-medium mb-2">API Features Management</h3>
        <p className="mb-4 text-2xl sm:text-3xl font-medium">
          Using our Cricket API Cricket! Grow any Current System
        </p>
        <button className="text-white rounded-full px-6 py-2 mb-8 transition-colors bg-[#8162E8]">
          Work With Us
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/sv-dashbord.png"
          alt="API Features Dashboard"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
  return (
    <main className={`${urbanist.variable} font-urbanist min-h-screen w-full relative `}>
      <div className="relative pt-20 md:pt-32">
        {/* Background Image - Responsive positioning */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Background"
            fill
            className="object-cover" // Changed to object-cover for better responsive behavior
            priority
          />
        </div>

        {/* Main Content Container - Adjusted padding for mobile */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 md:py-16 text-center flex flex-col justify-center items-center space-y-8 md:space-y-14">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {/* Heading - Responsive typography */}
            <h1 className={`${urbanist.variable} text-3xl sm:text-4xl md:text-[3.7rem] leading-tight md:leading-[1] font-bold font-urbanist tracking-wide`}>
              Cricket Score and{' '}
              <span className={`${dmSerif.variable} text-red-600 font-thin font-dmSerif italic`}>
                Statistics API
              </span>{' '}
              for Website & App
            </h1>

            {/* Description - Improved readability on mobile */}
            <p className="text-gray-700 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
              Cricket is more than simply a game; it&apos;s a way of life for millions of devoted followers.
              If you&apos;re a fan of the game, a fantasy cricket player, or a developer looking to address
              cricket scores and statistics in your app or website, you&apos;ve come to the perfect spot!
              Your website or app can now provide something extra with all the real-time cricket data thanks
              to our Cricket API Scores and Statistics API at a marginal.
            </p>

            {/* Buttons - Enhanced touch targets for mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto bg-[#25397e] text-white px-6 md:px-8 py-4 md:py-3 rounded-md hover:bg-[#1a237e]/90 transition-colors text-base md:text-lg">
                Consult Now
              </button>
              <button className="w-full sm:w-auto border border-gray-300 px-6 md:px-8 py-4 md:py-3 rounded-md hover:bg-gray-50 transition-colors text-base md:text-lg">
                Book Free Trial
              </button>
            </div>

            {/* Client Section - Responsive layout */}
            <div className="pt-8 md:pt-12 relative flex justify-center flex-col items-center">
              {/* Decorative Shape - Hidden on mobile */}
              <div className="hidden md:block absolute left-[30%] top-20">
                <Image
                  src="/shape2.png"
                  alt="Decorative shape"
                  width={54}
                  height={54}
                  className="object-cover"
                />
              </div>

              {/* Client Text */}
              <p className="text-gray-600 mb-4 font-semibold text-sm md:text-base">
                Over 50k+ Client all over the world
              </p>

              {/* Client Avatars - Adjusted size for mobile */}
              <div className="flex justify-center -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/Avatar.png"
                      alt={`Client ${i + 1}`}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image - Responsive container */}
          <div className="w-full h-[400px] md:h-[700px] flex justify-center max-w-7xl">
            <Image
              src="/herobg.png"
              alt="Hero background"
              width={1280}
              height={700}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4 overflow-hidden">
        {/* Content Container - Adjusted padding and height for mobile */}
        <div className="relative max-w-7xl mx-auto z-10 min-h-screen sm:h-auto">
          {/* Header Section - Responsive text and spacing */}
          <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 text-center px-4">
            <h2 className={`${urbanist.variable} text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight`}>
              Apps Using{' '}
              <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                Our Cricket API
              </span>{' '}
              for
              <br className="hidden sm:block" />
              <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                Various
              </span>{' '}
              functionalities.
            </h2>
          </div>

          {/* Features Grid - Converted to responsive grid */}
          <div className="mx-auto px-2 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Icon Container - Adjusted for mobile */}
                  <div className="mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <PresentationIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                  </div>

                  {/* Content - Responsive typography and spacing */}
                  <h3 className="text-xl sm:text-2xl font-mono font-bold mb-3 sm:mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Shape - Adjusted positioning */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/shape1.png"
            alt="Background"
            fill
            className="object-cover opacity-50 sm:opacity-100"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center space-y-8 sm:space-y-12 justify-center">
        {/* First Section */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mobile App Preview - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-[500px]">
              <Image
                src="/mobile1.png"
                alt="Cricket Stats App Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-black z-10">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Live Cricket Score and{' '}
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                  Statistics
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic mr-2`}>
                  API
                </span>
                For{' '}
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                  Website and App
                </span>
              </h2>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cricket is more than simply a game; it&apos;s a way of life for millions of devoted followers.
              If you&apos;re a fan of the game, a fantasy cricket player, or a developer looking to address
              cricket scores and statistics in your app or website, you&apos;ve come to the perfect spot!
              Your website or app can now provide something extra with all the real-time cricket data thanks
              to our Cricket API Scores and Statistics API at a marginal.
            </p>

            <button className="w-full sm:w-auto border flex items-center justify-center gap-3 border-[#be5360] text-[#be5360] px-6 py-3 rounded-lg hover:bg-red-100 transition-colors">
              Talk with Consultant
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative flex items-center h-auto sm:h-64 w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                What We Offer API{' '}
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                  Features
                </span>{' '}
                of{' '}
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                  CricSports
                </span>
              </h3>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-black z-10">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Through the usage of our Cricket API for Web and App services, users have access to precise
              information and features pertaining to cricket matches, players, teams, and statistics.
              The bat and the ball are the two primary equipment used in the sport of cricket.
              Our application programming interface was developed to satisfy the requirements of corporations,
              developers, and cricket fans who want precise and up-to-date information.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-center items-center min-h-screen py-8 sm:py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
              relative flex flex-col justify-between overflow-hidden border 
              rounded-xl p-4 sm:p-6 
              ${card.type === 'featured'
                  ? 'col-span-1 md:col-span-2 h-auto min-h-[320px] text-white'
                  : 'h-auto min-h-[300px]'
                }
              transition-all duration-300 hover:shadow-lg
            `}
            >
              {/* Background images for featured cards */}
              {card.type === 'featured' && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/servicebg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 right-0 w-[150px] sm:w-[200px]">
                    <Image
                      src="/shape3.png"
                      alt="Decorative shape"
                      width={200}
                      height={96}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-between h-full relative z-10">
                {/* Card Icons */}
                {card.type === 'normal' && (
                  <div className="mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
                      <Image
                        src="/calender.png"
                        alt="Calendar icon"
                        width={80}
                        height={80}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}

                {card.type === 'featured' && (
                  <div className="mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Image
                        src="/setting.png"
                        alt="Settings icon"
                        width={96}
                        height={96}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="space-y-2 sm:space-y-3 z-10 flex-grow flex flex-col justify-end">
                  <h3 className={`
                  text-sm sm:text-base py-2 w-fit
                  ${card.type === 'featured'
                      ? 'text-base sm:text-lg md:text-xl'
                      : 'border px-3 rounded-full'
                    }
                `}>
                    {card.title}
                  </h3>
                  <p className={`
                  text-xl sm:text-2xl font-semibold
                  ${card.type === 'featured'
                      ? 'text-white/90 w-full sm:w-[80%] md:w-[60%]'
                      : 'text-gray-600'
                    }
                `}>
                    {card.description}
                  </p>
                </div>

                {/* Card Button */}
                {card.label && (
                  <button className={`
                  mt-4 px-4 sm:px-6 py-2 
                  bg-[#8162E8] backdrop-blur-sm text-white 
                  rounded-full hover:bg-white/30 transition-colors 
                  inline-block w-fit text-sm sm:text-base
                `}>
                    {card.label}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Features of Our{' '}
            <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
              Real-Time Cricket
            </span>{' '}
            API
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relafxed px-4">
            In order to build incredible cricket applications, accurate cricket documentation was required.
            Discover at CricSportz the reasons why our clients are so satisfied with our goods.
            The most important advantages that our live Cricket API has over its rivals are outlined
            in the following paragraphs
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          {/* Features List */}
          <div className="space-y-4 sm:space-y-6">
            {cricketFeatures.map((feature, index) => (
              <div
                key={index}
                className={`
                rounded-xl sm:rounded-2xl p-4 sm:p-6 
                ${feature.bgColor} 
                transition-transform hover:scale-[1.02] sm:hover:scale-105
                cursor-pointer
              `}
              >
                <div className="flex gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <button className="
            w-full sm:w-auto mt-6 px-6 sm:px-8 py-3 
            border-2 border-red-600 text-red-600 font-thin 
            rounded-lg hover:bg-red-600 hover:text-white 
            transition-colors text-sm sm:text-base
          ">
              View All Features
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:pl-6 xl:pl-12 mt-8 lg:mt-0 h-full ">
            <div className="relative rounded-2xl sm:rounded-3xl border-2  h-full  shadow-lg">
              {/* Main Image */}
              <div className="relative w-full h-full min-h-[60vh]">
                <Image
                  src="/cricketStats.png"
                  alt="Cricket API Dashboard"
                  fill
                  className="object-fit"
                  priority
                />
              </div>

              {/* Floating Stats Image */}
              <div className="
              absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 
              w-28 sm:w-40 aspect-square
              transform hover:scale-105 transition-transform
              z-10
            ">
                <Image
                  src="/smallstats.png"
                  alt="Cricket Statistics"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFF8EE] py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Cricket Feed{' '}
              <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                Coverage
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              All important tours, series, and domestic tournaments from across the world are included
              in the CricSportz cricket data stream coverage. Our cricket data stream may be utilized
              in a variety of applications, including but not limited to Livescore, fantasy apps,
              betting, and others. The coverage of the feed includes live scorecards, live fantasy
              metrics, as well as pregame and in-play odds from bookmakers.
            </p>
          </div>
        </div>
        <div className="flex justify-center relative px-4">
          <Image
            src="/teamGraph.png"
            alt="Cricket API Dashboard"
            width={1200}
            height={600}
            className="w-full max-w-7xl h-auto object-contain"
          />
        </div>
      </div>

      {/* Dark Features Section */}
      <div className="min-h-screen bg-[#1F242A] py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <Image src="/specialbg.png" alt="Background pattern" fill className="object-cover opacity-50" />
        </div>

        {/* Background Decorative Elements */}
        <BackgroundDecorations />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            {/* Left side with illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-pink-200/20 rounded-full blur-xl" />

              <div className="relative">
                <Image
                  src="/Banner-girl-1.png"
                  alt="Support Representative"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-auto"
                />

                {/* Chat Widget */}
                <ChatWidget />
              </div>
            </div>

            {/* Right side content */}
            <div className="tracking-wide order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
                Why Choose{' '}
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                  Cricsportz
                </span>{' '}
                The Best
                <br />
                <span className={`${dmSerif.variable} font-dmSerif text-red-600 font-thin italic`}>
                  Cricket API
                </span>{' '}
                Service Provider
              </h2>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[...features, ...features].map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen  bg-[#1F242A] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden flex justify-center items-center">
        {/* Background decorations component remains unchanged */}
        <BackgroundDecorations />

        {/* Content container - adjusted max-width and padding for different screens */}
        <div className="w-full max-w-[90rem] mx-auto text-center relative z-10">
          {/* Heading - responsive font sizes and spacing */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 leading-tight">
            Our Happy Users & Their{' '}
            <span className={`${dmSerif.variable} text-red-600 font-thin font-dmSerif italic`}>
              Cricsportz
            </span>{' '}
            API
          </h2>

          {/* Subheading - adjusted width and text size */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
            Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An
            Unknown Printer Took A Galley Of Type And
          </p>

          {/* Testimonials container - modified for better mobile scrolling */}
          <div className="relative w-full overflow-hidden flex   justify-center ">
            <div className="flex max-w-7xl justify-center  snap-x snap-mandatory overflow-x-auto hide-scrollbar">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-[85%] md:w-[45%] lg:w-[32%] snap-center px-3 sm:px-4"
                >
                  {/* Individual testimonial card - adjusted padding and height */}
                  <div className="bg-white/10 backdrop-blur-lg flex flex-col justify-between border-t-[2px] border-t-gray-500 border-l-[2px] border-l-gray-500 rounded-2xl p-6 sm:p-8 h-auto min-h-[20rem] sm:min-h-[22rem]">
                    {/* Star rating - adjusted size and spacing */}
                    <div className="flex space-x-1 mb-4 sm:mb-6  ">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial text - responsive font size and spacing */}
                    <p className="text-sm sm:text-base text-white mb-6 sm:mb-8 text-left">
                    &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author info - adjusted spacing and image size */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src="/Avatar.png"
                        alt={testimonial.author}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                      />
                      <div className="text-left">
                        <h4 className="text-white font-semibold text-base sm:text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots - increased touch target size */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 sm:h-3 rounded-full transition-all touch-target-adjust ${index === 0 ? "bg-white w-6 sm:w-8" : "w-2 sm:w-3 bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div className=" text-2xl sm:text-3xl mb-4 sm:mb-0">
            <h2 className="font-semibold">Explore Our Data Services</h2>
            <div className="flex items-center gap-2">
             
              <span className="font-semibold">Multiple Products  <span className={`${dmSerif.variable} text-nowrap font-dmSerif text-red-600 font-thin italic`}>
                Cricket API
              </span></span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-sm text-red-600 border border-red-600 rounded-full px-4 py-1 hover:bg-red-50 transition-colors">
            View All Feature
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          <FeaturedServiceCard />
        </div>
      </section>
      <Blog />
    </main>
  )
}
const styles = `
  .touch-target-adjust {
    position: relative;
  }
  .touch-target-adjust::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    cursor: pointer;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;


