import BlogScreen from "@/screens/Blog"
import FAQSection from "@/screens/FAQ"
import { dmSerif, urbanist } from "@/utils/fonts"
import { PlayIcon } from "lucide-react"
import Image from "next/image"
const About = () => {
    const serviceFeatures = [
        {
            title: "Hight Availability Infrastructure",
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And",
            bgColor: "bg-amber-50",
            icon: "/icon (1).png"
        },
        {
            title: "Open Security Architecture",
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And",
            bgColor: "bg-green-50",
            icon: "/icon (2).png"
        },
        {
            title: "Custom Security Programming",
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And",
            bgColor: "bg-purple-50",
            icon: "/icon (3).png"
        },
        {
            title: "API Features Quality Product & Installation",
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And",
            bgColor: "bg-amber-50",
            icon: "/icon (1).png"
        },
        {
            title: "Superior Development Technology Expertise",
            description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Ummy Text Of The Printing And",
            bgColor: "bg-red-50",
            icon: "/icon (2).png"
        }
    ];
    return (
        <div className={`${urbanist.variable} font-urbanist w-full`}>
            {/* Hero Section */}
            <section className="min-h-screen relative pt-16 sm:pt-20 md:pt-24 ">
                <div className="wraper flex flex-col space-y-4 sm:space-y-6 justify-center items-center z-10 text-white px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">About</h1>
                    <span className={`${dmSerif.variable} text-2xl sm:text-3xl font-thin font-dmSerif italic text-center`}>
                        Cricsportz API and Website & Apps
                    </span>
                    <p className="max-w-7xl text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>

                {/* Background Images */}
                <div className="absolute inset-0 -z-10">
                    <Image src="/specialbg.png" alt="Background" fill className="object-cover" priority />
                </div>

                <div className="absolute z-0 -top-20 right-0 sm:right-10 w-1/2 sm:w-auto hidden sm:block">
                    <Image
                        src="/review (1).png"
                        alt="Review 1"
                        width={800}
                        height={200}
                        className="object-contain w-full sm:w-auto"
                        priority
                    />
                </div>

                <div className="absolute z-0 -top-64 left-0 w-1/2 sm:w-auto hidden sm:block">
                    <Image
                        src="/review (2).png"
                        alt="Review 2"
                        width={600}
                        height={200}
                        className="object-contain w-full sm:w-auto"
                        priority
                    />
                </div>

                <div className="absolute z-0 right-10 bottom-0 hidden sm:block">
                    <Image
                        src="/review (3).png"
                        alt="Review 3"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="absolute z-0 right-0 -top-20 w-1/2 sm:w-auto hidden sm:block">
                    <Image
                        src="/review (4).png"
                        alt="Review 4"
                        width={600}
                        height={200}
                        className="object-contain w-full sm:w-auto"
                        priority
                    />
                </div>

                <div className="absolute z-0 left-0 -bottom-20 w-1/2 sm:w-auto hidden sm:block">
                    <Image
                        src="/review (5).png"
                        alt="Review 5"
                        width={600}
                        height={200}
                        className="object-contain w-full sm:w-auto"
                        priority
                    />
                </div>

                <div className="absolute  flex justify-center items-center -translate-x-1/2 left-1/2 -bottom-40 sm:-bottom-60 md:-bottom-80 w-full">
                    <Image
                        src="/about-girl.png"
                        alt="About Hero"
                        width={1000}
                        height={800}
                        className="object-contain w-full max-w-[800px] sm:max-w-[1000px] md:max-w-[1200px] h-auto sm:h-[500px] md:h-[700px] z-50"
                        priority
                    />
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="min-h-screen flex items-end justify-center mt-40 sm:mt-32 md:mt-20">
                <div className="pb-6 sm:pb-8 md:pb-10 px-4 bg-white w-full">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Trusted by Thousands Business
                        </h2>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-red-600 mb-8 sm:mb-12 md:mb-16">
                            More than <span className={`${dmSerif.variable} font-thin font-dmSerif italic`}>100+</span> Products are using Cricsportz
                        </h3>

                        <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-6">
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={`top-${index}`}
                                    className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src="/logo (1).png"
                                        alt={`Company logo ${index + 1}`}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={`bottom-${index}`}
                                    className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
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

            {/* About Company Section */}
            <section className="min-h-screen flex items-center justify-center py-12 sm:py-16">
                <div className="w-full max-w-7xl p-3 mx-auto">
                    <div className="flex w-full flex-col items-center space-y-12 sm:space-y-20">
                        <div className="w-full px-4 flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">
                            <div className="w-full lg:w-1/2 space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold">
                                    About The Company Made<br />
                                    for API the Creator<br />
                                    of <span className="text-red-600">Cricsportz</span>
                                </h2>
                            </div>

                            <div className="max-w-xl space-y-4 text-gray-600">
                                <p className="text-base sm:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus donec nam mauris egestas. Id aliquet ultricies ligula tellus arcu dolor. Massa arcu pulvinar in mattis
                                </p>
                                <p className="text-base sm:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus
                                </p>
                                <p className="text-base sm:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus
                                </p>
                            </div>
                        </div>

                        {/* Stats and Demo Button */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-evenly w-full gap-8 sm:gap-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full sm:w-auto">
                                <div className="text-center">
                                    <p className="text-3xl sm:text-4xl font-bold italic">
                                        100<span className="text-red-600">+</span>
                                    </p>
                                    <p className="text-sm text-gray-600">Team Members</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl sm:text-4xl font-bold italic">
                                        80<span className="text-red-600">+</span>
                                    </p>
                                    <p className="text-sm text-gray-600">Business Clients</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl sm:text-4xl font-bold italic">
                                        500<span className="text-red-600">+</span>
                                    </p>
                                    <p className="text-sm text-gray-600">Total Active Live APP</p>
                                </div>
                            </div>

                            <button className="flex items-center space-x-3 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-shadow mx-auto sm:mx-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 rounded-full flex items-center justify-center">
                                    <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <span className="text-base sm:text-lg">
                                    Watch <span className="text-red-700">API Demo</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="min-h-screen flex justify-center py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 sm:space-y-12">
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-sm font-medium">Enterprise API Services Partner</p>
                            <h2 className="text-3xl sm:text-4xl font-bold">
                                The Best <span className="text-red-600">Cricsportz</span><br />
                                <span className="text-red-600">API</span> Services Of <span className="text-red-600">Partners</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="wraper flex flex-col space-y-4">
                                <p className="text-gray-600 max-w-2xl text-base sm:text-lg">
                                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type.
                                </p>
                                <button className="max-w-52 px-4 sm:px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                                    Contact Us
                                </button>
                            </div>

                            {serviceFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`${feature.bgColor} h-auto sm:h-52 p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start justify-around space-y-4 sm:space-y-0 sm:space-x-4`}
                                >
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <div className="space-y-2 max-w-xs">
                                        <h3 className="font-semibold text-lg sm:text-xl max-w-[14rem]">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About