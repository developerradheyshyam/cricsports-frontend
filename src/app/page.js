import { dmSerif, urbanist } from "@/utils/fonts"
import Image from "next/image"
import { ArrowRight, Calendar, CheckCircle, Clock, MessageSquare, PresentationIcon, Presentation, Star, Rocket } from "lucide-react"
import Blog from "@/screens/Blog";

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
              <div className="hidden md:block absolute left-1/4 top-20">
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
          <div className="mx-auto px-4 sm:px-6">
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
        <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed px-4">
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
        <div className="lg:pl-6 xl:pl-12 mt-8 lg:mt-0">
          <div className="relative rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-lg">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/cricketStats.png"
                alt="Cricket API Dashboard"
                fill
                className="object-cover rounded-2xl sm:rounded-3xl"
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
      <div className="w-full bg-[#FFF8EE] min-h-screen   mx-auto py-16">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cricket Feed <span className={`${dmSerif.variable} font-dmSerif text-red-600  font-thin italic`}>Coverage</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All important tours, series, and domestic tournaments from across the world are included in the CricSportz cricket data stream coverage.
              Our cricket data stream may be utilized in a variety of applications, including but not limited to Livescore, fantasy apps, betting, and others.
              The coverage of the feed includes live scorecards, live fantasy metrics, as well as pregame and in-play odds from bookmakers.
            </p>
          </div>
        </div>
        <div className="flex justify-center relative  ">
          <img
            src="/teamGraph.png"
            alt="Cricket API Dashboard"
            className="max-w-7xl h-auto"
          />
        </div>
      </div>
      <div className="min-h-screen bg-[#1F242A] py-20 px-4 relative overflow-hidden flex justify-center items-center">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <Image src="/specialbg.png" alt="Background" fill className="object-fit" priority />
        </div>
        <div className="absolute  z-0 -top-20 right-10">
          <Image src="/review (1).png" alt="Background" width={800} height={200} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 -top-64 left-0">
          <Image src="/review (2).png" alt="Background" width={600} height={200} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 right-10 bottom-0">
          <Image src="/review (3).png" alt="Background" width={100} height={100} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 right-0 bottom-30">
          <Image src="/review (4).png" alt="Background" width={600} height={200} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 left-0 -bottom-20">
          <Image src="/review (5).png" alt="Background" width={600} height={200} className="object-fit" priority />
        </div>
        {/* Main container */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            {/* Left side with illustration */}
            <div className="relative">
              {/* Circle background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-xl" />

              {/* Placeholder for the main image */}
              <div className="relative">
                <img
                  src="/Banner-girl-1.png"
                  alt="Support Representative"
                  className="relative z-10"
                />

                {/* Chat widget overlay */}
                <div className="absolute top-1/2 right-0 bg-white rounded-lg p-4 shadow-xl w-64">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
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
              </div>
            </div>

            {/* Right side with heading and features */}
            <div className="tracking-wide">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
                Why Choose <span className={`${dmSerif.variable} font-dmSerif text-red-600  font-thin italic`}>Cricsportz</span> The Best
                <br />
                <span className={`${dmSerif.variable} font-dmSerif text-red-600  font-thin italic`}>Cricket API</span> Service Provider
              </h2>

              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 h-40 backdrop-blur-lg rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col justify-between  gap-3 h-full">
                      <div className="p-2 ">
                        <Image src="/shuttle 1.png" alt="Background" width={50} height={50} className="object-fit" priority />
                      </div>
                      <span className="text-white font-medium">{feature.title}</span>
                    </div>
                  </div>
                ))}
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 h-40 backdrop-blur-lg rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col justify-between  gap-3 h-full">
                      <div className="p-2 ">
                        <Image src="/shuttle 1.png" alt="Background" width={50} height={50} className="object-fit" priority />
                      </div>
                      <span className="text-white font-medium">{feature.title}</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#1F242A] py-20 px-4 relative overflow-hidden flex justify-center items-center">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <Image src="/specialbg.png" alt="Background" fill className="object-fit" priority />
        </div>
        <div className="absolute  z-0 -top-20 right-10">
          <Image src="/review (1).png" alt="Background" width={800} height={200} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 -top-64 left-0">
          <Image src="/review (2).png" alt="Background" width={600} height={200} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 right-10 bottom-0">
          <Image src="/review (3).png" alt="Background" width={100} height={100} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 right-0 bottom-30">
          <Image src="/review (4).png" alt="Background" width={600} height={200} className="object-fit" priority />
        </div>
        <div className="absolute  z-0 left-0 -bottom-20">
          <Image src="/review (5).png" alt="Background" width={600} height={200} className="object-fit" priority />
        </div>
        {/* Content container */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Happy Users & Their <span className={`${dmSerif.variable} text-red-600  font-thin font-dmSerif italic`}>Cricsportz</span> API
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-16">
            Lorem Ipsum Has Been The Industry&apos;s
            Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And
          </p>

          {/* Testimonials slider */}
          <div className="flex overflow-hidden  w-full">
            <div className="flex sapce-x-3 "
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-1 px-4">
                  <div className="bg-white/10 backdrop-blur-lg flex justify-evenly flex-col  border-t-[2px] border-t-gray-500 border-l-[2px] border-l-gray-500  rounded-2xl p-8 mx-auto max-w-lg h-96">
                    {/* Star rating */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-white text-lg mb-8 text-left">"{testimonial.text}"</p>

                    {/* Author info */}
                    <div className="flex items-center  gap-4">
                      <img
                        src="/Avatar.png"
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="text-left">
                        <h4 className="text-white font-semibold">{testimonial.author}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={` h-2 rounded-full transition-all ${index === 0 ? "bg-white w-6" : "w-2 bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-3xl">
            <h2 className=" font-semibold">Explore Our Data Services</h2>
            <div className="flex items-center gap-2">
              <span className={`${dmSerif.variable} font-dmSerif text-red-600  font-thin italic`}>Cricket API</span>
              <span className="font-semibold">Multiple Products</span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-sm text-red-600 border border-red-600 rounded-full px-4 py-1 hover:bg-red-50 transition-colors">
            View All Feature
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-6">
          {/* First 5 Service Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white flex justify-evenly flex-col rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-80"
              >
                <div className="mb-4">
                  <Image src="/cup.png" alt="Background" width={50} height={50} className="object-fit" priority />
                </div>
                <h3 className="text-xl max-w-[70%] font-semibold mb-4">
                  {service.title}
                </h3>
                <button className="flex space-x-3 items-center gap-1 text-sm text-red-600 border border-red-600 rounded-md max-w-[40%] px-4 py-2  hover:bg-red-50 transition-colors">
                  <span>View More</span>
                  <ArrowRight className="w-4 h-4 bg-red-500 text-white flex justify-center items-center p-1 rounded-full" />
                </button>
              </div>
            ))}
            <div className="relative overflow-hidden h-[60vh] rounded-lg p-6 text-white md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="absolute inset-0 -z-10">
                <Image src="/sv-bg.png" alt="Background" fill className="object-fit" priority />
              </div>
              <h3 className="text-lg font-medium mb-2">API Features Management</h3>
              <p className="mb-4 text-3xl font-medium ">Using our Cricket API Cricket! Grow any Current System</p>
              <button className=" text-white rounded-full px-6 py-2 mb-8 transition-colors bg-[#8162E8]">
                Work With Us
              </button>
              <div className="mt-4  w-full h-full">
                <img
                  src="/sv-dashbord.png "
                  alt="API Features Dashboard"
                  className="w-full h-auto rounded-lg absolute bottom-0"
                />
              </div>
            </div>
          </div>

          {/* API Features Card */}

        </div>
      </section>

      <Blog />
    </main>
  )
}

