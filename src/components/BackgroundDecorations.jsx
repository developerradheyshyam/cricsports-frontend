import Image from "next/image"

 const BackgroundDecorations = () => (
    <>
      <div className="absolute z-0 -top-20 right-10 hidden sm:block">
        <Image src="/review (1).png" alt="Decoration 1" width={800} height={200} className="object-contain" />
      </div>
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
      {/* Add other decoration elements... */}
    </>
  );
  export default BackgroundDecorations