import BlogScreen from "@/screens/Blog"
import FAQSection from "@/screens/FAQ"
import { dmSerif, urbanist } from "@/utils/fonts"
import Image from "next/image"
const Pricing = () => {
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
        <div className={`${urbanist.variable} font-urbanist  w-full   `}>
            <section className="min-h-screen mb-64 relative pt-20 ">
                <div className="wraper    flex flex-col space-y-6 mt-10 justify-center items-center z-auto text-white ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Pricing Plan</h1>
                    <span className={`${dmSerif.variable} text-2xl sm:text-3xl font-thin font-dmSerif italic text-center px-1`}>

                    Cricsportz  API and Website & Apps</span>
                    <p className="max-w-4xl text-center">Cricket Live Score (Live Score, Live Scorecards, Ball by Ball, Lineups, Standings, Tours/Series Schedules,
                        Player profile, Team squads, Historical results)</p>
                </div>
                <div className="absolute inset-0 -z-10">
                    <Image src="/specialbg.png" alt="Background" fill className="object-fit" priority />
                </div>
                <div className="absolute  z-0 -top-20 right-10 ">
                    <Image src="/review (1).png" alt="Background" width={800} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 -top-64 left-0">
                    <Image src="/review (2).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 right-10 bottom-0 ">
                    <Image src="/review (3).png" alt="Background" width={100} height={100} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 right-0 -top-20 ">
                    <Image src="/review (4).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 left-0 -bottom-20">
                    <Image src="/review (5).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  flex justify-center items-center -translate-x-1/2 left-1/2 -bottom-40 sm:-bottom-60 md:-bottom-96 w-full">

                   <div className="px-6 py-16 bg-white rounded-xl">

                    <Image
                        src="/pricing.png"
                        alt="Background"
                        width={800}
                        height={600}
                        className="object-contain w-full max-w-[800px] sm:max-w-[1000px] md:max-w-[1200px] h-auto sm:h-[500px] md:h-[600px] z-50"
                        priority
                    />
                   </div>
                </div>
            </section>
         
            <FAQSection />
            <BlogScreen />
        </div>
    )
}

export default Pricing