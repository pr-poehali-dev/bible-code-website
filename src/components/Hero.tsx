
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%23374151" stroke-width="0.5"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        {/* Sacred symbol */}
        <div className="mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-3xl">📖</span>
          </div>
        </div>

        <h1 className="font-cormorant text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          Ключ к коду
          <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Библии
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
          Откройте древние тайны священного текста. Путешествие к глубинному пониманию 
          божественной мудрости через современную призму духовного познания.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Узнать больше
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Связаться с автором
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-amber-400 opacity-30 animate-pulse">✨</div>
        <div className="absolute bottom-32 right-16 text-orange-400 opacity-40 animate-bounce">🕊️</div>
        <div className="absolute top-1/3 right-8 text-purple-400 opacity-30 animate-pulse delay-1000">⭐</div>
      </div>
    </section>
  );
};

export default Hero;
