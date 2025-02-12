import BlogScreen from "@/screens/Blog"
import FAQSection from "@/screens/FAQ"
import { dmSerif, urbanist } from "@/utils/fonts"
import { ArrowRight, ChevronLeft, ChevronRight, Heart, PlayIcon } from "lucide-react"
import Image from "next/image"
const Blog = () => {
    const recentPosts = [
        {
            id: 1, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
        {
            id: 2, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
        {
            id: 3, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
        {
            id: 4, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
        {
            id: 5, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
        {
            id: 6, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
        {
            id: 7, title: 'Cricket', description: 'Elevate your cricket website with our dynamic Cricket API.'
        },
    ];

    const mainPosts = [
        {
            id: 1,
            title: 'Cricket Tournament VS SMVK',
            image: '/api/placeholder/800/400',
            description: 'Elevate your cricket website with our dynamic Cricket API Integration. Instantly access live scores and enhance your cricket website with our powerful Cricket API Integration.'
        },
        {
            id: 2,
            title: 'Live Cricket Score Updates',
            image: '/api/placeholder/800/400',
            description: 'Get real-time cricket scores and comprehensive match statistics with our powerful Cricket API integration. Stay updated with every ball.'
        },
        {
            id: 3,
            title: 'Cricket Match Statistics',
            image: '/api/placeholder/800/400',
            description: 'Access detailed cricket match statistics and analytics through our comprehensive Cricket API integration. Make data-driven decisions.'
        },
        {
            id: 3,
            title: 'Cricket Match Statistics',
            image: '/api/placeholder/800/400',
            description: 'Access detailed cricket match statistics and analytics through our comprehensive Cricket API integration. Make data-driven decisions.'
        },
        {
            id: 4,
            title: 'Cricket Match Statistics',
            image: '/api/placeholder/800/400',
            description: 'Access detailed cricket match statistics and analytics through our comprehensive Cricket API integration. Make data-driven decisions.'
        }
    ];
    return (
        <div className={`${urbanist.variable} font-urbanist  w-full   `}>
            <section className="min-h-screen relative pt-32">
                <div className="  wraper flex flex-col space-y-6 justify-center items-center z-auto text-white ">
                    <h1 className="text-5xl font-bold">Latest    <span className={`${dmSerif.variable}    font-thin font-dmSerif italic`}>News & Blog </span>
                    </h1>

                    <p className="max-w-7xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="absolute inset-0 -z-10">
                    <Image src="/specialbg.png" alt="Background" fill className="object-fit" priority />
                </div>
                <div className="absolute  z-0 -top-40 right-0">
                    <Image src="/review (1).png" alt="Background" width={800} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 -top-64 left-0">
                    <Image src="/review (2).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 right-10 bottom-0">
                    <Image src="/review (3).png" alt="Background" width={100} height={100} className="object-fit" priority />
                </div>
                <div className="absolute  z-0  right-0 -top-20">
                    <Image src="/review (4).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  z-0 left-0 -bottom-20">
                    <Image src="/review (5).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>

            </section>
            <section className="min-h-screen -mt-72 bg-white">
                <div className="w-full max-w-6xl mx-auto px-4 py-8">
                    {/* Main Slider */}
                    <div className="relative mb-8">
                        <button className="absolute -left-2 top-1/2 -translate-y-1/2  p-2  z-10">
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="rounded-2xl overflow-hidden relative h-[60vh] ">
                            <div className="flex items-center p-8 md:p-12 ">
                                <div className="w-full h-[40vh]  md:w-1/2 text-white z-10">
                                    <div className="flex items-center space-x-4 text-sm mb-2">
                                        <span className="bg-white text-gray-900 rounded-full px-4 py-2 ">Resources Team</span>
                                        <div className="flex items-center space-x-1 ml-10 border-[1px] border-white rounded-full px-4 py-2">
                                            <div className="rounded-lg flex items-center justify-center">
                                                <Image src="/calender.png" alt="Background" width={20} height={20} className="object-fit" priority />
                                            </div>
                                            <span>17 Jan 2024</span>
                                            <span>12:45 AM</span>
                                        </div>
                                    </div>
                                    <div className="flex  flex-col justify-evenly h-full ">

                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                            Boost Your Cricket Website with a Powerful Cricket API Integration.
                                        </h2>

                                        <p className="text-gray-300 mb-6">
                                            Elevate your cricket website with our dynamic Cricket API Integration.
                                            Instantly access live-scores. Elevate your cricket website with our
                                            dynamic Cricket API Integration.
                                        </p>

                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="/Avatar.png"
                                                alt="Author"
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium">Chetan Mayal</p>
                                                <p className="text-sm text-gray-300">CEO, Cricsports</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="absolute inset-0 z-0 ">
                                    <Image src="/bloghro (1).png" alt="Background" fill className="object-fit" priority />
                                </div>
                                <div className="absolute inset-0 z-1 ">
                                    <Image src="/bloghro (2).png" alt="Background" fill className="object-fit" priority />
                                </div>
                            </div>
                        </div>

                        <button className="absolute -right-2 top-1/2 -translate-y-1/2 p-2 z-10">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Bottom Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                        {[3, 2, 1].map((item) => (
                            <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden min-h-[70vh]">
                                <img
                                    src={`blog (${item}).png`}
                                    alt="Card image"
                                    className="w-full h-72 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="border-[1px] border-[#7b93d4]  text-[#486dd1] px-4 py-1 rounded-full text-sm">
                                            Sports Software
                                        </span>
                                        <div className="flex items-center text-sm text-gray-500 space-x-3">
                                            <div className=" rounded-lg flex items-center justify-center">
                                                <Image src="/calender.png" alt="Background" width={20} height={20} className="object-fit" priority />
                                            </div>
                                            <span>17 Jan 2024</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4">
                                        2024 Professional Year in Cricsports API
                                    </h3>

                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="/Avatar.png"
                                            alt="Author"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold text-[#5576d2] ">Chetan Mayal</p>
                                            <p className="text-sm text-gray-500">CEO, Cricsports</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="h-auto min-h-screen">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                        {/* Main Content */}
                        <div className="w-full lg:w-[70%] ">
                            {mainPosts.map((post) => (
                                <div key={post.id} className="mb-8 h-auto bg-white  overflow-hidden">
                                    <img
                                        src={`blogimg (${post.id}).png`}
                                        alt={post.title}
                                        className="w-full  h-84 object-fit"
                                    />
                                    <div className=" flex flex-col  justify-between  py-6">
                                        <div className="flex items-center space-x-1  border-[1px] border-gray-200 w-fit rounded-full px-4 py-2">
                                            <div className="rounded-lg flex items-center justify-center">
                                                <Image src="/calender.png" alt="Background" width={20} height={20} className="object-fit" priority />
                                            </div>
                                            <span>17 Jan 2024</span>
                                            <span>12:45 AM</span>
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold my-4">{post.title}</h2>
                                        <p className="text-gray-600 mb-4">{post.description}</p>
                                        <div className="flex items-center justify-between">
                                            <button className="flex space-x-3 items-center gap-1 text-sm text-red-600 border border-red-600 rounded-md max-w-[40%] px-4 py-2  hover:bg-red-50 transition-colors">
                                                <span>Read More</span>
                                                <ArrowRight className="w-4 h-4 bg-red-600 text-white flex justify-center items-center p-1 rounded-full" />
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Posts Sidebar */}
                        <div className="w-full lg:w-[30%]">
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="text-lg font-bold mb-4">Recent Post</h3>
                                <div className="space-y-4">
                                    {recentPosts.map((post) => (
                                        <div key={post.id} className="flex items-start space-x-3">
                                            <img
                                                src="/recentblog.png"
                                                alt={post.title}
                                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="text-sm font-medium hover:text-blue-600 cursor-pointer">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1">{post?.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog