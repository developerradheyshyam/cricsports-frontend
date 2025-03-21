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
            <section className="min-h-screen relative pt-40 overflow-hidden">
                {/* Main content wrapper */}
                <div className="wraper flex flex-col space-y-4 sm:space-y-6 justify-center items-center z-10 text-white px-4 sm:px-6">
                    {/* Responsive heading with adaptive font sizes */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                        Latest{' '}
                        <span className={`${dmSerif.variable} font-thin font-dmSerif italic`}>
                            News & Blog
                        </span>
                    </h1>

                    {/* Responsive paragraph with controlled width and font size */}
                    <p className="max-w-xl sm:max-w-3xl md:max-w-5xl text-center text-sm sm:text-base">
                    All important tours, series, and domestic tournaments from across the world are included in the CricSportz cricket data stream data stream may be utilized in a variety of applications, including but not limited to </p>
                </div>

                {/* Background image - full coverage */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/specialbg.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Decorative images - hidden on mobile, responsive positioning */}
                <div className="absolute z-0 -top-40 right-0 hidden sm:block">
                    <Image
                        src="/review (1).png"
                        alt="Decorative element 1"
                        width={800}
                        height={200}
                        className="object-contain w-full max-w-[600px] md:max-w-[800px]"
                        priority
                    />
                </div>

                <div className="absolute z-0 -top-64 left-0 hidden sm:block">
                    <Image
                        src="/review (2).png"
                        alt="Decorative element 2"
                        width={600}
                        height={200}
                        className="object-contain w-full max-w-[400px] md:max-w-[600px]"
                        priority
                    />
                </div>

                <div className="absolute z-0 right-10 bottom-0 hidden sm:block">
                    <Image
                        src="/review (3).png"
                        alt="Decorative element 3"
                        width={100}
                        height={100}
                        className="object-contain w-[60px] sm:w-[80px] md:w-[100px]"
                        priority
                    />
                </div>

                <div className="absolute z-0 right-0 -top-20 hidden sm:block">
                    <Image
                        src="/review (4).png"
                        alt="Decorative element 4"
                        width={600}
                        height={200}
                        className="object-contain w-full max-w-[400px] md:max-w-[600px]"
                        priority
                    />
                </div>

                <div className="absolute z-0 left-0 -bottom-20 hidden sm:block">
                    <Image
                        src="/review (5).png"
                        alt="Decorative element 5"
                        width={600}
                        height={200}
                        className="object-contain w-full max-w-[400px] md:max-w-[600px]"
                        priority
                    />
                </div>
            </section>
            <section className="min-h-screen -mt-56 md:-mt-72 bg-white">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
                    {/* Main Slider - Responsive adjustments for height, padding, and layout */}
                    <div className="relative mb-4 sm:mb-8">
                        {/* Navigation buttons - Hidden on mobile, visible on larger screens */}
                        <button className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 p-2 z-10 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="rounded-xl sm:rounded-2xl overflow-hidden relative min-h-[350px] h-[40vh] sm:h-[50vh] md:h-[60vh]">
                            <div className="flex flex-col md:flex-row items-start md:items-center p-4 sm:p-8 md:p-12 h-full">
                                {/* Content container - Full width on mobile, half on desktop */}
                                <div className="w-full md:w-1/2 text-white z-10 h-full">
                                    {/* Tags and date - Responsive spacing and sizing */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:space-x-4 text-xs sm:text-sm mb-4">
                                        <span className="bg-white text-gray-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                                            Resources Team
                                        </span>
                                        <div className="flex items-center space-x-1 border-[1px] border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                                            <div className="rounded-lg flex items-center justify-center">
                                                <Image
                                                    src="/calender.png"
                                                    alt="Calendar"
                                                    width={16}
                                                    height={16}
                                                    className="sm:w-5 sm:h-5"
                                                />
                                            </div>
                                            <span className="text-xs sm:text-sm">17 Jan 2024</span>
                                            <span className="text-xs sm:text-sm">12:45 AM</span>
                                        </div>
                                    </div>

                                    {/* Main content - Responsive text sizes and spacing */}
                                    <div className="flex flex-col justify-evenly  ">
                                        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                                            Boost Your Cricket Website with a Powerful Cricket API Integration.
                                        </h2>

                                        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                                            Elevate your cricket website with our dynamic Cricket API Integration.
                                            Instantly access live-scores. Elevate your cricket website with our
                                            dynamic Cricket API Integration.
                                        </p>

                                        {/* Author info - Consistent sizing across breakpoints */}
                                        <div className="flex items-center space-x-3 mb-14 md:mb-10">
                                            <Image
                                                src="/Avatar.png"
                                                alt="Author"
                                                width={40}
                                                height={40}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium text-sm sm:text-base">Chetan Mayal</p>
                                                <p className="text-xs sm:text-sm text-gray-300">CEO, Cricsports</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background images - Optimized for different screen sizes */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/bloghro (1).png"
                                        alt="Background"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                                        priority
                                    />
                                </div>
                                <div className="absolute inset-0 z-1">
                                    <Image
                                        src="/bloghro (2).png"
                                        alt="Background"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 p-2 z-10 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Bottom Cards Grid - Responsive grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-20">
                        {[3, 2, 1].map((item) => (
                            <div key={item} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden">
                                {/* Card image - Maintained aspect ratio */}
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src={`/blog (${item}).png`}
                                        alt="Card image"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Card content - Responsive padding and text sizes */}
                                <div className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <span className="border-[1px] border-[#7b93d4] text-[#486dd1] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm">
                                            Sports Software
                                        </span>
                                        <div className="flex items-center text-xs sm:text-sm text-gray-500 space-x-2 sm:space-x-3">
                                            <Image
                                                src="/calender.png"
                                                alt="Calendar"
                                                width={16}
                                                height={16}
                                                className="sm:w-5 sm:h-5"
                                            />
                                            <span>17 Jan 2024</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold mb-4">
                                        2024 Professional Year in Cricsports API
                                    </h3>

                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src="/Avatar.png"
                                            alt="Author"
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold text-[#5576d2] text-sm sm:text-base">Chetan Mayal</p>
                                            <p className="text-xs sm:text-sm text-gray-500">CEO, Cricsports</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="h-auto min-h-screen py-4 sm:py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 sm:gap-6">
                        {/* Main Content - Full width on mobile, 70% on desktop */}
                        <div className="w-full lg:w-[70%] space-y-4 sm:space-y-8">
                            {mainPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Main post image - Maintained aspect ratio */}
                                    <div className="relative aspect-[16/9]">
                                        <Image
                                            src={`/blogimg (${post.id}).png`}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 70vw"
                                            priority={post.id === 1}
                                        />
                                    </div>

                                    {/* Post content - Responsive padding and spacing */}
                                    <div className="flex flex-col justify-between p-4 sm:p-6">
                                        {/* Date tag - Consistent sizing across breakpoints */}
                                        <div className="flex items-center space-x-1 border border-gray-200 w-fit rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                                            <div className="rounded-lg flex items-center justify-center">
                                                <Image
                                                    src="/calender.png"
                                                    alt="Calendar"
                                                    width={16}
                                                    height={16}
                                                    className="sm:w-5 sm:h-5"
                                                />
                                            </div>
                                            <span className="text-sm">17 Jan 2024</span>
                                            <span className="text-sm">12:45 AM</span>
                                        </div>

                                        {/* Post title and description - Responsive typography */}
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold my-3 sm:my-4">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                                            {post.description}
                                        </p>

                                        {/* Read More button - Optimized for touch */}
                                        <div className="flex items-center justify-between">
                                            <button className="group flex items-center gap-2 text-sm sm:text-base text-[#AB2735] border border-red-600 rounded-md px-4 py-2 hover:bg-red-50 transition-colors">
                                                <span>Read More</span>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 bg-red-600 text-white rounded-full p-1 group-hover:bg-red-700 transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Posts Sidebar - Full width on mobile, 30% on desktop */}
                        <div className="w-full lg:w-[30%]">
                            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold mb-4">Recent Post</h3>
                                <div className="space-y-4">
                                    {recentPosts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="flex items-start space-x-3 group cursor-pointer"
                                        >
                                            {/* Recent post thumbnail - Fixed size with proper aspect ratio */}
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src="/recentblog.png"
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                            </div>

                                            {/* Recent post content - Responsive text sizing */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                    {post?.description}
                                                </p>
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