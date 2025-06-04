import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Chapters = () => {
  const chapters = [
    {
      number: "01",
      title: "Первоначальный код",
      description:
        "Исследование структурных закономерностей в библейском тексте и их значение",
      themes: [
        "Числовые последовательности",
        "Лингвистические паттерны",
        "Символическая геометрия",
      ],
    },
    {
      number: "02",
      title: "Скрытые послания",
      description:
        "Методы расшифровки завуалированных смыслов в священных писаниях",
      themes: ["Гематрия и нумерология", "Акростихи", "Метафорические уровни"],
    },
    {
      number: "03",
      title: "Пророческие коды",
      description:
        "Анализ пророчеств через призму математических и лингвистических закономерностей",
      themes: ["Временные циклы", "Исторические параллели", "Символика чисел"],
    },
    {
      number: "04",
      title: "Практическое применение",
      description:
        "Как использовать полученные знания для духовного роста и понимания жизни",
      themes: [
        "Медитативные практики",
        "Личностное развитие",
        "Мудрость предков",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            ОСНОВНЫЕ ГЛАВЫ
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Пошаговное погружение в сокровенные тайны Священного Писания
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 hover:border-amber-400 bg-white"
            >
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-amber-600">
                    {chapter.number}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-cormorant text-2xl text-amber-900 mb-2 group-hover:text-amber-700 transition-colors uppercase tracking-wide">
                      {chapter.title}
                    </CardTitle>
                    <CardDescription className="text-slate-700 leading-relaxed">
                      {chapter.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800 mb-3 uppercase tracking-wide">
                    Основные темы:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {chapter.themes.map((theme, themeIndex) => (
                      <span
                        key={themeIndex}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors border border-amber-300"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white border-2 border-amber-300 px-8 py-6 rounded-xl shadow-lg">
            <p className="text-amber-800 font-bold mb-2 text-lg">
              📖 ОБЪЕМ КНИГИ
            </p>
            <p className="text-slate-700 font-medium">
              320 страниц глубинного духовного анализа
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapters;
