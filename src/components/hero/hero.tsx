import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[70dvh]" style={{ backgroundImage: `url('/assets/bg4.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="h-full bg-black/50 text-white">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl lg:text-5xl pb-6">I&apos;m a self-taught freelance <span className="text-green-500 font-semibold lg:text-7xl">web developer</span></h1>
            <p className="text-lg lg:text-xl">Which means I learned everything from YouTube, Google, and sheer panic. I build websites, fix my own mistakes, and pretend I knew what I was doing all along. Fake it till you make it, right?</p>
            <div className="py-12">
              <Link href='/about-me' className="py-4 px-12 uppercase bg-green-500 font-semibold rounded shadow-xl hover:bg-green-700 transition-colors duration-100 ease-in-out">More About Me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
