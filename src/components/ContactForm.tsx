
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="stars" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="30" cy="30" r="1" fill="%23fbbf24" opacity="0.3"/%3E%3Ccircle cx="10" cy="10" r="0.5" fill="%23a855f7" opacity="0.4"/%3E%3Ccircle cx="50" cy="15" r="0.5" fill="%23f97316" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23stars)"/%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6">
            Связаться с автором
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Поделитесь своими мыслями, вопросами или духовными открытиями
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl flex items-center gap-3">
                  <span className="text-2xl">📖</span>
                  О диалоге
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Автор открыт для обсуждения духовных вопросов и философских размышлений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">✨</span>
                  <span>Вопросы о содержании книги</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">🤝</span>
                  <span>Сотрудничество и обмен опытом</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400">🎓</span>
                  <span>Лекции и духовные беседы</span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-6 rounded-xl border border-amber-400/30">
              <blockquote className="font-cormorant text-lg italic text-amber-100 mb-4">
                "Каждый вопрос — это ключ к новому пониманию. 
                Не стесняйтесь делиться своими размышлениями."
              </blockquote>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-gray-200 text-slate-800">
            <CardHeader>
              <CardTitle className="font-cormorant text-2xl text-center">
                Отправить сообщение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                      className="border-gray-300 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-gray-300 focus:border-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Тема сообщения</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="О чём хотите поговорить?"
                    required
                    className="border-gray-300 focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Поделитесь своими мыслями, вопросами или размышлениями..."
                    rows={6}
                    required
                    className="border-gray-300 focus:border-purple-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
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
