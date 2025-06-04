const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-lg">📖</span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-white">
                Ключ к коду Библии
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Древняя мудрость через современную призму духовного познания
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-semibold text-white mb-4">Связь</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span className="text-gray-400">author@biblecode.ru</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <span className="text-gray-400">+7 (xxx) xxx-xx-xx</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center md:text-right">
            <blockquote className="font-cormorant text-lg italic text-amber-200 mb-2">
              "Ищите и найдёте"
            </blockquote>
            <cite className="text-gray-400 text-sm">
              Евангелие от Матфея 7:7
            </cite>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 "Ключ к коду Библии". Все права защищены.
            </p>
            <div className="flex gap-6">
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">
                🕊️
              </span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">
                ✨
              </span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">
                📚
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
