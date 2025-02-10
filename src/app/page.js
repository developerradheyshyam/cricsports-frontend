import { dmSerif, urbanist } from "@/utils/fonts"
import Image from "next/image"
import { ArrowRight, Calendar, CheckCircle, Clock, MessageSquare, PresentationIcon as PresentationChart, PresentationIcon } from 'lucide-react'

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
      description: "Real-time data that is both quick anddependable, revolving around the game's facts and happenings.",
      bgColor: "bg-orange-50"
    },
    {
      title: "A Large Number Of Statistics",
      description: "Real-time data that is both quick anddependable, revolving around the game's facts and happenings.",
      bgColor: "bg-purple-50"
    },
    {
      title: "Huge Scope Of Coverage",
      description: "Real-time data that is both quick anddependable, revolving around the game's facts and happenings.",
      bgColor: "bg-green-50"
    },
    {
      title: "Tailored Assistance",
      description: "Real-time data that is both quick anddependable, revolving around the game's facts and happenings.",
      bgColor: "bg-orange-50"
    }
  ];
  const blogPosts = [
    {
      id: 1,
      date: '17 Jan, 2024',
      time: '10:45 AM',
      title: 'Boost Your Cricket Website with a Powerful Cricket API Integration',
      description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores.',
    },
    {
      id: 2,
      date: '17 Jan, 2024',
      time: '10:45 AM',
      title: 'Boost Your Cricket Website with a Powerful Cricket API Integration',
      description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores.',
    },
    {
      id: 3,
      date: '17 Jan, 2024',
      time: '10:45 AM',
      title: 'Boost Your Cricket Website with a Powerful Cricket API Integration',
      description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores.',
    },
  ];
  return (
    <main className={`${urbanist.variable} font-urbanist min-h-screen w-full relative `}>
      <div className="relative pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/bg.png" alt="Background" fill className="object-fit" priority />
        </div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center  flex flex-col justify-center items-center space-y-14">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className={`${urbanist.variable} text-4xl md:text-[3.7rem] leading-[1] font-bold font-urbanist tracking-wide `}>
              Cricket Score and <span className={`${dmSerif.variable} text-red-600 font-dmSerif italic`}>Statistics API</span> for Website & App
            </h1>


            <p className="text-gray-700 max-w-4xl mx-auto text-sm md:text-base">
              Cricket is more than simply a game; it's a way of life for millions of devoted followers. If you're a fan of
              the game, a fantasy cricket player, or a developer looking to address cricket scores and statistics in your
              app or website, you've come to the perfect spot! Your website or app can now provide something extra with
              all the real-time cricket data thanks to our Cricket API Scores and Statistics API at a marginal.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <button className="bg-[#25397e] text-white px-8 py-3 rounded-md hover:bg-[#1a237e]/90 transition-colors">
                Consult Now
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Book Free Trial
              </button>
            </div>

            <div className="pt-12 relative  flex justify-center flex-col items-center">
              <div className="absolute left-64 top-20">
                <Image
                  src="/shape2.png"
                  alt={`shape`}
                  width={54}
                  height={54}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4 font-semibold">Over 50k+ Client all over the world</p>
              <div className="flex justify-center -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/Avatar.png"
                      alt={`Client ${i + 1}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[700px] flex justify-center max-w-7xl">
            <img src="/herobg.png" className="object-fit " />
          </div>
        </div>

      </div>

      <div className="relative w-full py-16 px-4 overflow-hidden ">

        {/* Content */}
        <div className="relative max-w-7xl h-screen mx-auto z-10">
          <div className="max-w-7xl mx-auto mb-16 text-center">
            <h2 className={` ${urbanist.variable} text-3xl md:text-4xl font-semibold `}>
              Apps Using <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>Our Cricket API</span> for
              <br />
              <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic `}>Various</span> functionalities.
            </h2>
          </div>

          <div className=" mx-auto flex  ">

            <div className="flex gap-8 px-4 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <PresentationIcon className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-mono max-w-[80%]  font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="z-0">
          <Image src="/shape1.png" alt="Background" fill className="object-fit" priority />
        </div>
      </div>
      <div className="container mx-auto  py-12  flex flex-col items-center space-y-4 justify-center">
        <div className="max-w-7xl flex flex-col lg:flex-row  items-center ">
          {/* Left Column - Mobile App Preview */}
          <div className="w-1/2 flex justify-center">
            <div className="relative  h-[600px] w-full ">
              <img
                src="/mobile1.png"
                alt="Cricket Stats App Interface"
                className="w-full h-full  object-fit"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="max-w-[50%] space-y-6  text-black z-10">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">
                Live Cricket Score and <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>Statistics</span>
              </h1>
              <h2 className="text-3xl">
              <span className={`${dmSerif.variable} font-dmSerif text-red-600 `}>API  </span>  For   <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>Website and App</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Cricket is more than simply a game; it's a way of life for its millions of devoted followers. If you're a fan of the game, a fantasy cricket player, or a developer looking to add live cricket scores and statistics to your app or website, you've come to the perfect spot. Your website or app can now provide consumers with up-to-the-minute cricket data thanks to our Cricket Feed Data API Score and Statistics API.
            </p>


            <button className="border flex gap-3 items-center  border-[#be5360] text-[#be5360] px-6 py-3 rounded-lg hover:bg-red-100 transition-colors">
              Talk with Consultant
            </button>

          </div>
        </div>
        <div className="max-w-7xl flex flex-col lg:flex-row  items-center ">
          <div className="w-1/2 flex justify-center ">
            <div className="relative flex items-center h-64 w-full">
              <h3 className="text-4xl max-w-[80%] font-bold bg">
                What We Offer API <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>Features</span> of <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>CricSports</span>
              </h3>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="max-w-[50%] space-y-6  text-black z-10">
            <p className="text-gray-600 leading-relaxed">
              Through the usage of our Cricket API for Web and App services, users have access to precise information and features pertaining to cricket matches, players, teams, and statistics. The bat and the ball are the two primary equipment used in the sport of cricket. Our application programming interface was developed to satisfy the requirements of corporations, developers, and cricket fans who want precise and up-to-date information.
            </p>

          </div>
        </div>

      </div>
      <div className="mx-auto max-w-7xl  flex justify-center items-center min-h-screen py-12">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between overflow-hidden  border-[1px] h-80 rounded-xl p-6 ${card.type === 'featured'
                ? 'col-span-2   text-white'
                : ' '
                }`}
            >
              {card.type === 'featured'
                && <div className="absolute inset-0 z-0">
                  <Image src="/servicebg.png" alt="Background" fill className="object-fit" priority />
                  <Image src="/shape3.png" alt="Background" width={200} height={96} className="absolute bottom-0 right-2 object-fit" priority />

                </div>}
              <div className="flex flex-col justify-between h-full ">
                {card.type === 'normal' && (
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                      <Image src="/calender.png" alt="Background" width={80} height={80} className="object-fit" priority />
                    </div>
                  </div>
                )}

                {card.type === 'featured' && (
                  <div className="mb-4">
                    <div className="w-12 h-12 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Image src="/setting.png" alt="Background" width={96} height={96} className="object-fit" priority />
                    </div>
                  </div>
                )}

                <div className="space-y-2 z-10 flex-grow b flex flex-col justify-end">
                  <h3 className={`text-sm   py-2 w-fit ${card.type === 'featured' ? 'text-lg md:text-xl' : 'text-base border-[1px] px-3 rounded-full'
                    }`}>
                    {card.title}
                  </h3>
                  <p className={` text-2xl font-semibold ${card.type === 'featured' ? 'text-white/90 w-[60%]' : 'text-gray-600'
                    }`}>
                    {card.description}
                  </p>
                </div>

                {card.label && (
                  <button className={` ${card.type === 'featured' ? "" : " "} mt-4 px-6 py-2 bg-[#8162E8] backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors inline-block w-fit`}>
                    {card.label}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl min-h-screen  container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features of Our <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>Real-Time Cricket</span> API
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            In order to build incredible cricket applications, accurate cricket documentation was required. Discover at CricSportz the reasons why our clients are so satisfied with our goods. The most important advantages that our live Cricket API has over its rivals are outlined in the following paragraphs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {cricketFeatures.map((feature, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${feature.bgColor} transition-transform hover:scale-105`}
              >
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <button className="mt-4 px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
              View All Features
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:pl-12">
            <div className=" relative rounded-3xl border-2 border-gray-200 shadow-lg ">
              <img
                src="/cricketStats.png"
                alt="Cricket API Dashboard"
                className="w-full h-auto"
              />
              <img
                src="/smallstats.png"
                alt="Cricket API Dashboard"
                className="w-40 absolute -bottom-10 -left-10 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFF8EE] min-h-screen   mx-auto py-16">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cricket Feed <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>Coverage</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All important tours, series, and domestic tournaments from across the world are included in the CricSportz cricket data stream coverage. Our cricket data stream may be utilized in a variety of applications, including but not limited to Livescore, fantasy apps, betting, and others. The coverage of the feed includes live scorecards, live fantasy metrics, as well as pregame and in-play odds from bookmakers.
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
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className={`${dmSerif.variable} font-dmSerif text-red-600 italic`}>News & Blogs</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All important tours, series, and domestic tournaments from across the world are included in the CricSportz cricket data stream.
            data stream may be utilized in a variety of applications, including but not limited to
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-[80vh]">
              {/* Card Image Section */}
              <div className="overflow-hidden rounded-xl h-80 bg-purple-900">
                {/* Stadium Light Effects */}
                <img
                  src="/liveCricket.png"
                  alt="Cricket API"
                  className="w-full h- object-fit"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Date and Time */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                <div className="w-4 h-4 rounded-lg flex items-center justify-center">
                      <Image src="/calender.png" alt="Background" width={80} height={80} className="object-fit" priority />
                    </div>
                  <span>{post.date} | {post.time}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>

                {/* Read More Button */}
                <button className="flex space-x-3 items-center mt-4 px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                  <span> Read More
                  </span>                
                   <ArrowRight className="bg-red-700 p-1 rounded-full text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

