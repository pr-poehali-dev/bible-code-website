import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutBook = () => {
  const features = [
    {
      icon: "🔍",
      title: "Глубокий анализ",
      description:
        "Современные методы исследования древних текстов, раскрывающие скрытые смыслы",
    },
    {
      icon: "🌟",
      title: "Духовные открытия",
      description:
        "Практические инсайты для духовного роста и личностного развития",
    },
    {
      icon: "📚",
      title: "Научный подход",
      description:
        "Обоснованные выводы на основе лингвистического и исторического анализа",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            О книге
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "Ключ к коду Библии" — это революционное исследование, которое
            соединяет древнюю мудрость с современным пониманием. Автор
            раскрывает глубинные закономерности священного текста, предлагая
            читателям новый взгляд на вечные истины.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="font-cormorant text-2xl text-slate-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-800 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <blockquote className="font-cormorant text-2xl md:text-3xl italic mb-6 leading-relaxed">
            "Истина не скрыта от нас — мы скрыты от истины. Эта книга поможет
            вам найти путь к пониманию."
          </blockquote>
          <cite className="text-amber-400 font-semibold">
            — Из предисловия автора
          </cite>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
