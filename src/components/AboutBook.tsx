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
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            О КНИГЕ
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Эта книга представляет собой глубокое религиозно-философское
            исследование, раскрывающее сокровенные тайны Священного Писания.
            Автор предлагает читателям уникальный подход к пониманию библейских
            текстов через призму древних знаний и современного духовного опыта.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 text-amber-700">
                  {feature.icon}
                </div>
                <CardTitle className="font-cormorant text-2xl text-amber-900 uppercase tracking-wide">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-700 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-8 md:p-12 text-white text-center border-4 border-amber-600">
          <blockquote className="font-cormorant text-2xl md:text-3xl italic mb-6 leading-relaxed">
            "Блаженны чистые сердцем, ибо они Бога узрят. Эта книга поможет
            очистить ваше духовное зрение."
          </blockquote>
          <cite className="text-amber-200 font-semibold text-lg">
            — Из предисловия автора
          </cite>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
