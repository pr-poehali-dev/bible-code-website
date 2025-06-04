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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Основные главы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Пошаговое погружение в тайны священного текста
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-purple-300 bg-white"
            >
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-amber-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {chapter.number}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-cormorant text-2xl text-slate-800 mb-2 group-hover:text-purple-700 transition-colors">
                      {chapter.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {chapter.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-700 mb-3">
                    Основные темы:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {chapter.themes.map((theme, themeIndex) => (
                      <span
                        key={themeIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
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
          <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-8 py-6 rounded-xl border border-amber-200">
            <p className="text-slate-700 font-medium mb-2">📖 Объем книги</p>
            <p className="text-slate-600">
              320 страниц глубинного анализа и практических инсайтов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapters;
