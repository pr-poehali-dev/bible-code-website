import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22biblical%22%20width%3D%2280%22%20height%3D%2280%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M40%2020%20L50%2035%20L40%2050%20L30%2035%20Z%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.1%22/%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%223%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.15%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%222%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23biblical)%22/%3E%3C/svg%3E')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-6">
            СВЯЗАТЬСЯ С АВТОРОМ
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Поделитесь своими размышлениями о духовных вопросах и библейских
            откровениях
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-amber-400/50 text-white">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl flex items-center gap-3 text-amber-200">
                  <span className="text-2xl">✝️</span>О ДУХОВНОМ ДИАЛОГЕ
                </CardTitle>
                <CardDescription className="text-amber-100">
                  Автор открыт для обсуждения библейских вопросов и духовных
                  размышлений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">📖</span>
                  <span>Вопросы о библейских текстах</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">🕊️</span>
                  <span>Духовное сотрудничество</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">⛪</span>
                  <span>Религиозные беседы и лекции</span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-amber-600/30 to-amber-500/30 p-6 rounded-xl border-2 border-amber-400/50">
              <blockquote className="font-cormorant text-lg italic text-amber-100 mb-4">
                "Просите, и дано будет вам; ищите, и найдете; стучите, и отворят
                вам."
              </blockquote>
              <cite className="text-amber-300 text-sm">
                Евангелие от Матфея 7:7
              </cite>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-2 border-amber-300 text-slate-800 shadow-xl">
            <CardHeader className="bg-amber-50">
              <CardTitle className="font-cormorant text-2xl text-center text-amber-900 uppercase tracking-wide">
                Отправить сообщение
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-amber-800 uppercase tracking-wide">
                      Имя
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                      className="border-2 border-amber-300 focus:border-amber-600 bg-amber-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-amber-800 uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-2 border-amber-300 focus:border-amber-600 bg-amber-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-amber-800 uppercase tracking-wide">
                    Тема сообщения
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="О чём хотите поговорить?"
                    required
                    className="border-2 border-amber-300 focus:border-amber-600 bg-amber-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-amber-800 uppercase tracking-wide">
                    Сообщение
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Поделитесь своими духовными размышлениями и вопросами..."
                    rows={6}
                    required
                    className="border-2 border-amber-300 focus:border-amber-600 resize-none bg-amber-50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-600 uppercase tracking-wide"
                >
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
