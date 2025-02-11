import Blog from "@/screens/Blog"
import FAQSection from "@/screens/FAQ"
import { dmSerif, urbanist } from "@/utils/fonts"
import { PlayIcon } from "lucide-react"
import { Play } from "next/font/google"
import Image from "next/image"
const About = () => {
    const serviceFeatures = [
        {
            title: 'Hight Availability Infrastructure',
            description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And',
            bgColor: 'bg-amber-50',
            icon: '/icon (1).png'
        },
        {
            title: 'Open Security Architecture',
            description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And',
            bgColor: 'bg-green-50',
            icon: '/icon (2).png'
        },
        {
            title: 'Custom Security Programming',
            description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And',
            bgColor: 'bg-purple-50',
            icon: '/icon (3).png'
        },
        {
            title: 'API Features Quality Product & Installation',
            description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And',
            bgColor: 'bg-amber-50',
            icon: '/icon (1).png'
        },
        {
            title: 'Superior Development Technology Expertise',
            description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And',
            bgColor: 'bg-red-50',
            icon: '/icon (2).png'
        }
    ];
    return (
        <div className={`${urbanist.variable} font-urbanist  w-full   pt-20`}>
            <section className="min-h-screen">
                <div className="wraper flex flex-col space-y-6 mt-10 justify-center items-center z-auto text-white ">
                    <h1 className="text-5xl font-bold">About</h1>
                    <span className={`${dmSerif.variable}   text-3xl font-thin font-dmSerif italic`}>

                        Cricsportz  API and Website & Apps</span>
                    <p className="max-w-7xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="absolute inset-0 -z-10">
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
                <div className="absolute flex justify-center items-center -translate-x-1/2  z-0 left-1/2 -bottom-72  w-full ">
                    <Image
                        src="/about-girl.png"
                        alt="Background"
                        width={1000}
                        height={800}
                        className="object-fir w-[1200px] h-[700px] z-50"
                        priority
                    />
                </div>
            </section>
            <section className="min-h-screen flex  items-end justify-center">
                <div className="pb-40 px-4 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Headings */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Trusted by Thousands Business
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-serif italic text-red-600 mb-16">
                            More than  <span className={`${dmSerif.variable}   text-3xl font-thin font-dmSerif italic`}>100+</span> Products are using Cricsportz
                        </h3>

                        {/* Logo grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                            {[...Array(9)].slice(0, 5).map((_, index) => (
                                <div
                                    key={`top-${index}`}
                                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src="/logo (1).png"
                                        alt={`Company logo ${index + 1}`}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Second row with 4 logos */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {[...Array(9)].slice(5, 9).map((_, index) => (
                                <div
                                    key={`bottom-${index}`}
                                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src="/logo (1).png"
                                        alt={`Company logo ${index + 6}`}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
            <section className="pb-20 flex  justify-center">
                <div className="w-full max-w-7xl p-3 mx-auto  ">
                    <div className="flex w-full  flex-col items-center space-y-20">
                        {/* Left side - Text content */}
                        <div className=" w-full px-4 flex justify-between items-center space-y-8">
                            <div className="w-1/2 space-y-2">
                                <h2 className="text-4xl font-bold">
                                    About The Company Made<br />
                                    for API the Creator<br />
                                    of <span className="text-red-600">Cricsportz</span>
                                </h2>
                            </div>

                            {/* Lorem ipsum paragraphs */}

                            <div className="max-w-xl space-y-4  text-gray-600">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus donec nam mauris egestas. Id aliquet ultricies ligula tellus arcu dolor. Massa arcu pulvinar in mattis
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus
                                </p>
                            </div>
                            {/* Stats */}
                        </div>
                        <div className="flex flex-wrap justify-evenly w-full  ">
                            <div className="text-center">
                                <p className="text-4xl font-bold italic">100<span className="text-red-600">+</span></p>
                                <p className="text-sm text-gray-600">Team Members</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold italic">80<span className="text-red-600">+</span></p>
                                <p className="text-sm text-gray-600">Business Clients</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold italic">500<span className="text-red-600">+</span></p>
                                <p className="text-sm text-gray-600">Total Active Live APP</p>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <button className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                                        <PlayIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-lg">
                                        Watch <span className="text-red-700">API Demo</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right side - Demo button */}

                    </div>
                </div>

            </section>
            <section className="min-h-screen flex  justify-center ">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {/* Header Section */}
                        <div className="space-y-6">
                            <p className="text-sm font-medium">Enterprise API Services Partner</p>
                            <h2 className="text-4xl font-bold">
                                The Best <span className="text-red-600">Cricsportz</span><br />
                                <span className="text-red-600">API</span> Services Of <span className="text-red-600">Partners</span>
                            </h2>
                          
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="wraper flex flex-col space-y-4">

                        <p className="text-gray-600 max-w-2xl">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type.
                            </p>
                            <button className=" max-w-52 px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                                Contact Us
                            </button>
                            </div>
                            {serviceFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`${feature.bgColor} h-52 p-6 rounded-2xl flex items-start justify-around space-x-4`}
                                >
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-20 h-20 object-contain"
                                    />
                                    <div className="space-y-2 max-w-xs">
                                        <h3 className="font-semibold text-xl max-w-[14rem]">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <FAQSection />
            <Blog />
        </div>
    )
}

export default About