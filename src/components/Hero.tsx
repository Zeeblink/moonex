import Navbar from "./Navbar";

const Star = () => (
  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.4708 0C34.0714 10.8962 30.5357 16.33 26.9708 16.33C23.4058 16.33 19.8701 10.8962 13.5 0C19.8701 10.8962 22.9091 16.6462 21.1266 19.665C19.3442 22.6838 12.7695 23 0 23C13.237 23 19.8117 23.3162 21.3019 26.6512C22.7045 29.7562 19.6656 35.4775 13.5 46C19.8993 35.1037 23.4351 29.67 27 29.67C30.5649 29.67 34.1007 35.1037 40.5 46C33.7208 34.4137 30.7403 28.6637 33.2532 25.7887C35.474 23.2587 42.0195 23 54 23C40.5 23 33.9253 22.655 32.6104 19.1187C31.4123 15.9562 34.4513 10.2638 40.4708 0Z" fill="white" />
  </svg>
);



const Hero = () => {
  return (
    <div className="min-h-[850px] mb-0 relative overflow-hidden">
      {/* Orbital Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="./orbital-rings.svg" 
          alt="orbital-rings" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero lighting effects */}
      <div className="absolute h-28 w-72 top-16 left-16 blur-[140px] bg-[#EDD955] rounded-full"></div>  
      <div className="absolute h-20 w-64 top-[30rem] right-28 blur-[170px] bg-[#EDD955] rounded-full"></div>   

      {/* Stars */}
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
      <div className="h-full relative">
        <Navbar />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 py-20 space-y-10 md:space-y-0 md:py-32">
          {/* Hero Text */}
          <div className="max-w-3xl text-center md:text-left pt-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-main-text">
              <span className="text-white">Trusted Multi-Chain
                <br />
                <span className="text-[#FFD700]">DEX </span> Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-gradient-to-r from-[#E4B40D] to-[#FBD966] text-[#0B1221] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity">
                Connect Wallet
              </button>
              <button className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full font-semibold hover:bg-[#FFD700] hover:text-[#0B1221] transition-colors z-10">
                Trade Crypto
              </button>
            </div>
          </div>
          {/* Sphere */}
          <div className="flex-shrink-0 w-48 h-48 md:w-62 md:h-61 relative">
            <img src="./sphere.svg" alt="Sphere" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;