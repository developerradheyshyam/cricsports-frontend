import { dmSerif, urbanist } from "@/utils/fonts"
import Image from "next/image"
import { Phone, Mail, MapPin } from 'lucide-react';
const Contact = () => {

    return (
        <div className={`${urbanist.variable} font-urbanist  w-full   `}>
            <section className="min-h-screen relative pt-32">
                <div className="  wraper flex flex-col space-y-6 justify-center items-center z-auto text-white ">
                    <h1 className="text-5xl font-bold">Contact Us
                    </h1>

                    <p className="max-w-5xl text-center"> <span className={`${dmSerif.variable}    font-thin font-dmSerif italic text-3xl `}>Get in touch today! and Your Inquiry </span></p>
                </div>
                <div className="absolute inset-0 -z-10">
                    <Image src="/specialbg.png" alt="Background" fill className="object-fit" priority />
                </div>
                <div className="absolute -z-10 -top-40 right-0">
                    <Image src="/review (1).png" alt="Background" width={800} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  -z-10 -top-64 left-0">
                    <Image src="/review (2).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute  -z-10 right-10 bottom-0">
                    <Image src="/review (3).png" alt="Background" width={100} height={100} className="object-fit" priority />
                </div>
                <div className="absolute -z-10  right-0 -top-20">
                    <Image src="/review (4).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>
                <div className="absolute -z-10 left-0 -bottom-20">
                    <Image src="/review (5).png" alt="Background" width={600} height={200} className="object-fit" priority />
                </div>

            </section>
            <section className="h-[60vh] flex pt-20  -mt-96 bg-white  ">
                <div className="relative md:min-h-[60vh]  h-full w-full  overflow-x-hidden overflow-y-visible">

                    <div className="absolute flex justify-center items-center -translate-x-1/2  z-10 left-1/2   w-full ">
                        <Image
                            src="/contact (2).png"
                            alt="Background"
                            width={1000}
                            height={800}
                            className="object-fir w-auto md:w-[600px] md:h-[400px] z-50"
                            priority
                        />
                    </div>
                    <div className="absolute hidden md:block  items-center top-20 left-56  w-full ">
                        <Image
                            src="/contact (1).png"
                            alt="Background"
                            width={1000}
                            height={800}
                            className="object-fir w-[450px] h-auto "
                            priority
                        />
                    </div>
                    <div className="absolute  items-center top-0 right-10   ">
                        <Image
                            src="/contact (6).png"
                            alt="Background"
                            width={1000}
                            height={800}
                            className="object-fir w-[70px] h-auto "
                            priority
                        />
                    </div>
                </div>
            </section>
            <div className="w-full max-w-5xl  mx-auto px-4 py-12 min-h-screen mt-20">
                <div className="flex flex-col  md:flex-row gap-6  justify-center relative">
                    {/* Left side - Contact Form */}
                    <div className=" md:w-[40%] ">
                        {/* Decorative dots */}


                        <div className=" bg-white   rounded-xl shadow-xl md:h-[80vh] p-8 w-full">
                            <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
                            <p className="text-gray-500 text-sm mb-6">Fill in the form below</p>

                            <form className="space-y-6">
                                <div className="absolute  items-center -top-14 left-10 -z-10 ">
                                    <Image
                                        src="/contact (5).png"
                                        alt="Background"
                                        width={1000}
                                        height={800}
                                        className="object-fit w-[100px] h-auto z-50 ml-10"
                                        priority
                                    />
                                </div>
                                <div className="absolute  items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  -z-10 ">
                                    <Image
                                        src="/contact (3).png"
                                        alt="Background"
                                        width={1000}
                                        height={800}
                                        className="object-fir w-[200px] h-auto z-50 ml-10"
                                        priority
                                    />
                                </div>
                                <div className="absolute  items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  -z-10 ">
                                    <Image
                                        src="/contact (4).png"
                                        alt="Background"
                                        width={1000}
                                        height={800}
                                        className="object-fir w-[400px] h-auto z-50 mt-32"
                                        priority
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Id"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full py-3 px-6 text-white font-medium bg-[#AD020A] hover:bg-red-700 rounded-lg transition duration-200">
                                    Send Request
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right side - Contact Information */}
                    <div className="space-y-6 md:w-[40%] ">
                        {/* Phone Card */}
                        <div className="bg-white rounded-xl shadow-xl p-6 ">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Phone Number</h3>
                                    <p className="text-sm text-gray-500 mb-2">Our Customer care support is to open 24/7</p>
                                    <a href="tel:+9118008001234" className="text-blue-600 font-medium">
                                        +91 1800 800 1234
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-xl shadow-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Email</h3>
                                    <p className="text-sm text-gray-500 mb-2">Our Support team will get back to in 24-48 hours during standard business hours.</p>
                                    <a href="mailto:support@cricsportz.com" className="text-blue-600 font-medium">
                                        support@cricsportz.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="bg-white rounded-xl shadow-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Address</h3>
                                    <p className="text-sm text-gray-500 mb-2">Our Customer care support is to open 24/7</p>
                                    <p className="text-blue-600 font-medium">
                                        Jaipur Rajasthan, India 000000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact