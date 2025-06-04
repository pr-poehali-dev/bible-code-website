const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12 border-t-4 border-amber-600">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center border-2 border-amber-300">
                <span className="text-lg">✝️</span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-white uppercase tracking-wide">
                Ключ к коду Библии
              </h3>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Религиозно-философское исследование сокровенных тайн Священного
              Писания
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wide">
              Связь
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span className="text-amber-200">author@biblecode.ru</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <span className="text-amber-200">+7 (xxx) xxx-xx-xx</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center md:text-right">
            <blockquote className="font-cormorant text-lg italic text-amber-200 mb-2">
              "Слово Твое — светильник ноге моей и свет стезе моей"
            </blockquote>
            <cite className="text-amber-300 text-sm">Псалом 118:105</cite>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t-2 border-amber-700 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-amber-200">
              © 2024 "Ключ к коду Библии". Все права защищены.
            </p>
            <div className="flex gap-6">
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform text-amber-300">
                ✝️
              </span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform text-amber-300">
                📖
              </span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform text-amber-300">
                🕊️
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
