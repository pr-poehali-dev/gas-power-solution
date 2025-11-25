import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [tariff, setTariff] = useState(10);
  const [consumption, setConsumption] = useState(10000);

  const currentCost = tariff * consumption;
  const newTariff = tariff * 0.8;
  const newCost = newTariff * consumption;
  const savings = currentCost - newCost;
  const savingsPercent = 20;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold">Метан Сити</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#industries" className="hover:text-primary transition-colors">Для кого</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="energy-glow">Получить КП</Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold text-primary mb-4">
              Аренда без капитальных затрат
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Энергия для вашего бизнеса{' '}
              <span className="text-gradient">−20% от тарифа</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Газопоршневые электростанции в аренду. Снижайте расходы на электричество с первого дня!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0₽</div>
                  <div className="text-muted-foreground">Капитальные затраты</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-border/50 energy-glow">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">−20%</div>
                  <div className="text-muted-foreground">От тарифа МРСК</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <div className="text-muted-foreground">КПД когенерации</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="text-lg energy-glow">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать экономию
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Почему газопоршневые электростанции?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современное решение для энергонезависимости вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <CardTitle>Энергетическая независимость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работайте стабильно 24/7 без рисков аварийных и плановых отключений в сетях
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <CardTitle>Высокая эффективность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  КПД до 90% с когенерацией — получайте электричество и бесплатное тепло
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Hammer" className="text-primary" size={24} />
                </div>
                <CardTitle>Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Проверено на нефтегазовых месторождениях и промышленных объектах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Leaf" className="text-primary" size={24} />
                </div>
                <CardTitle>Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Соответствие строгим природоохранным стандартам и нормативам
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Калькулятор экономии
              </h2>
              <p className="text-xl text-muted-foreground">
                Узнайте, сколько вы сэкономите с нашим оборудованием
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Рассчитайте вашу выгоду</CardTitle>
                <CardDescription>
                  Стоимость аренды = Тариф МРСК Урала − 20%
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tariff">Текущий тариф (руб/кВт·ч)</Label>
                    <Input
                      id="tariff"
                      type="number"
                      value={tariff}
                      onChange={(e) => setTariff(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="consumption">Потребление (кВт·ч/месяц)</Label>
                    <Input
                      id="consumption"
                      type="number"
                      value={consumption}
                      onChange={(e) => setConsumption(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Текущие расходы:</span>
                    <span className="text-2xl font-bold">{currentCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Ваш новый тариф:</span>
                    <span className="text-2xl font-bold text-primary">{newTariff.toFixed(2)} ₽/кВт·ч</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Расходы с нами:</span>
                    <span className="text-2xl font-bold text-primary">{newCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Ваша экономия в месяц:</span>
                      <span className="text-3xl font-bold text-gradient">{savings.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm text-muted-foreground">
                        Это <span className="text-primary font-bold">{savingsPercent}%</span> экономии с первого дня!
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full energy-glow" size="lg">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Получить коммерческое предложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Для кого это решение?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Идеально подходит для энергоёмких отраслей бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Fuel" className="text-primary" size={24} />
                </div>
                <CardTitle>Нефтегазовые компании</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Бурение, ЭГРП, энергоснабжение месторождений
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Factory" className="text-primary" size={24} />
                </div>
                <CardTitle>Промышленность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Производственные и сельскохозяйственные предприятия
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="HardHat" className="text-primary" size={24} />
                </div>
                <CardTitle>Строительство</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Строительные площадки и крупные объекты
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Warehouse" className="text-primary" size={24} />
                </div>
                <CardTitle>Логистика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Логистические центры и складские комплексы
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Получите расчет экономии
              </h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и получите индивидуальное коммерческое предложение
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input id="name" placeholder="Иван Петров" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания *</Label>
                      <Input id="company" placeholder="ООО «Пример»" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="ivan@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Расскажите о вашем проекте</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваши потребности в электроэнергии..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full energy-glow" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={28} />
                <span className="text-xl font-bold">Метан Сити</span>
              </div>
              <p className="text-muted-foreground">
                Газопоршневые электростанции в аренду для вашего бизнеса
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (000) 000-00-00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@metancity.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Меню</h3>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a></div>
                <div><a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a></div>
                <div><a href="#industries" className="hover:text-primary transition-colors">Для кого</a></div>
                <div><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground text-sm">
            © 2024 Метан Сити. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
