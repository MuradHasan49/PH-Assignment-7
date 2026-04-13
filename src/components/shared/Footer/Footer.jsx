import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="w-full flex flex-col items-center py-16 px-6 md:px-12" style={{ backgroundColor: '#285341' }}>
      
      <div className="flex flex-col items-center text-center max-w-3xl w-full mb-16">
        <h1 className="text-white text-5xl font-bold mb-3 tracking-wide">
          KeenKeeper
        </h1>
        
        <p className="text-white/80 text-[15px] mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h2 className="text-white text-lg font-medium mb-4">
          Social Links
        </h2>
        
        <div className="flex gap-3">
          <a href="#" className="flex items-center justify-center w-[38px] h-[38px] bg-white rounded-full text-[#285341] hover:bg-gray-200 transition-colors">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="flex items-center justify-center w-[38px] h-[38px] bg-white rounded-full text-[#285341] hover:bg-gray-200 transition-colors">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="flex items-center justify-center w-[38px] h-[38px] bg-white rounded-full text-[#285341] hover:bg-gray-200 transition-colors">
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] text-[13px] text-white/60">
        <p className="mb-4 md:mb-0">
          © 2026 KeenKeeper. All rights reserved.
        </p>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
      
    </footer>
    );
}

export default Footer;