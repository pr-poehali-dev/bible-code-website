import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-white to-amber-50 text-slate-800 overflow-hidden">
      {/* Background cross pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22cross%22%20width=%2240%22%20height=%2240%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M18%200%20L22%200%20L22%2018%20L40%2018%20L40%2022%20L22%2022%20L22%2040%20L18%2040%20L18%2022%20L0%2022%20L0%2018%20L18%2018%20Z%22%20fill=%22%23d97706%22%20opacity=%220.05%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23cross)%22/%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        {/* Sacred symbol */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-xl border-4 border-amber-300">
            <span className="text-4xl">✝️</span>
          </div>
        </div>

        <h1 className="font-cormorant text-6xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight text-amber-900">
          КЛЮЧ К КОДУ
          <span className="block text-amber-700 text-5xl md:text-7xl mt-2">
            БИБЛИИ
          </span>
        </h1>

        <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
          Религиозно-философское исследование сокровенных тайн Священного
          Писания.
          <br />
          Путь к глубинному пониманию божественной мудрости.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-12">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-amber-600"
          >
            ЧИТАТЬ КНИГУ
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300"
          >
            СВЯЗАТЬСЯ С АВТОРОМ
          </Button>
        </div>

        {/* Biblical quote */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border-2 border-amber-200 shadow-lg">
          <blockquote className="font-cormorant text-2xl md:text-3xl italic text-amber-900 mb-4">
            "Истина освободит вас"
          </blockquote>
          <cite className="text-amber-700 font-semibold">
            Евангелие от Иоанна 8:32
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Hero;
