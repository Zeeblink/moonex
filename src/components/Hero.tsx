import Navbar from "./Navbar";
import Star from "./Star";


const Hero = () => {
  return (
    <div className="min-h-screen mb-0 relative ">
      {/* Orbital Lines */}
      <div className="absolute inset-0 ">
        <img
          src="./orbital-rings.svg"
          alt="orbital-rings"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero lighting effects */}
      <div className="absolute h-28 w-72 top-16 left-16 blur-[200px] lg:blur-[140px] bg-[#EDD955] rounded-full"></div>
      <div className="absolute h-20 w-64 top-[30rem] right-28 blur-[170px] bg-[#EDD955] rounded-full"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-[170px] left-[190px] w-[61px] h-[60px] scale-75 animate-twinkle">
          <Star />
        </div>
        <div className="absolute top-[10%] right-[15%] md:top-36 md:right-48 scale-75 opacity-40 animate-twinkle-delayed">
          <svg width="54" height="46" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.4708 0C34.0714 10.8962 30.5357 16.33 26.9708 16.33C23.4058 16.33 19.8701 10.8962 13.5 0C19.8701 10.8962 22.9091 16.6462 21.1266 19.665C19.3442 22.6838 12.7695 23 0 23C13.237 23 19.8117 23.3162 21.3019 26.6512C22.7045 29.7562 19.6656 35.4775 13.5 46C19.8993 35.1037 23.4351 29.67 27 29.67C30.5649 29.67 34.1007 35.1037 40.5 46C33.7208 34.4137 30.7403 28.6637 33.2532 25.7887C35.474 23.2587 42.0195 23 54 23C40.5 23 33.9253 22.655 32.6104 19.1187C31.4123 15.9562 34.4513 10.2638 40.4708 0Z" fill="white" />
          </svg>
        </div>
        <div className="absolute top-[500px] left-[1000px] w-[61px] h-[60px] scale-75 animate-twinkle">
          <Star />
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[90vh] relative">
        <Navbar />
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-36 sm:py-40 lg:py-36 space-y-8 lg:space-y-0">
          {/* Hero Text */}
          <div className="max-w-3xl text-center lg:text-left pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 hero-main-text">
              <span className="text-white">Trusted Multi-Chain
                <br />
                <span className="text-[#FFD700]">DEX </span> Platform
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="text-sm sm:text-base bg-gradient-to-r from-[#E4B40D] to-[#FBD966] text-[#0B1221] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:opacity-80 transition-opacity">
                Connect Wallet
              </button>
              <button className="text-sm sm:text-base border-2 border-[#FFD700] text-[#FFD700] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#FFD700] hover:text-[#0B1221] transition-colors z-10">
                Trade Crypto
              </button>
            </div>
          </div>
          {/* Sphere */}
          <div className="flex-shrink-0 w-36 hidden lg:block h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-62 xl:h-61 relative">
            <img src="./sphere.svg" alt="Sphere" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;