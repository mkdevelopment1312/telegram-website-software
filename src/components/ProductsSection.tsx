
import { useState } from 'react';
import { Check, Star, Zap, Users, ShoppingCart, Sparkles, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PurchaseModal } from '@/components/PurchaseModal';

export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Telegram Spam Software',
      description: 'Zaawansowane narzędzie do masowej komunikacji w Telegram z AI-powered targeting',
      icon: Zap,
      features: [
        'Automatyczne wysyłanie wiadomości',
        'AI-powered targeting użytkowników',
        'Zaawansowana analityka i raporty',
        'Multi-proxy support z rotacją',
        'Inteligentna ochrona anti-ban',
        'Smart scheduler z time zones',
        'Bulk message templates',
        'Real-time delivery tracking'
      ],
      monthlyPrice: 50,
      yearlyPrice: 500,
      color: 'neon-green',
      popular: false,
      stats: { users: '2.5k+', success: '99.2%', uptime: '99.9%' }
    },
    {
      id: 2,
      name: 'Telegram Joining Software',
      description: 'Automatyczne dołączanie do grup i kanałów z zaawansowanym filtrowaniem',
      icon: Users,
      features: [
        'Auto-joining z smart detection',
        'Advanced filtering algorithms',
        'AI-powered captcha solver',
        'Intelligent rate limiting',
        'Multi-account proxy rotation',
        'Group analytics & insights',
        'Member extraction tools',
        'Automated engagement boost'
      ],
      monthlyPrice: 50,
      yearlyPrice: 500,
      color: 'neon-blue',
      popular: false,
      stats: { users: '1.8k+', success: '97.8%', uptime: '99.7%' }
    },
    {
      id: 3,
      name: 'Complete Package',
      description: 'Kompletny ecosystem - Spam + Joining + Shop Bot + Advanced Analytics',
      icon: ShoppingCart,
      features: [
        'Wszystkie funkcje Spam Software',
        'Wszystkie funkcje Joining Software',
        'Advanced Telegram Shop Bot',
        'E-commerce integration (Stripe/PayPal)',
        'Automated payment processing',
        'Smart inventory management',
        'AI customer support bot',
        'Advanced analytics dashboard',
        'Multi-language support',
        'Custom branding options',
        'Priority 24/7 support',
        'Monthly strategy consultations'
      ],
      monthlyPrice: 100,
      yearlyPrice: 1000,
      color: 'neon-purple',
      popular: true,
      stats: { users: '5k+', success: '99.8%', uptime: '99.9%' }
    }
  ];

  const handlePurchase = (product: any, billingType: 'monthly' | 'yearly') => {
    setSelectedProduct({ ...product, billingType });
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-neon-purple mr-3" />
            <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 px-4 py-2">
              Produkty Premium
            </Badge>
            <Sparkles className="w-8 h-8 text-neon-purple ml-3" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display">
            <span className="gradient-text">Nasze Produkty</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Wybierz idealne rozwiązanie dla swoich potrzeb. Wszystkie produkty z licencjami miesięcznymi i rocznymi.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center glass-card px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-neon-green mr-2" />
              <span className="text-sm font-medium">Bezpieczne płatności</span>
            </div>
            <div className="flex items-center glass-card px-6 py-3 rounded-full">
              <Target className="w-5 h-5 text-neon-blue mr-2" />
              <span className="text-sm font-medium">Instant delivery</span>
            </div>
            <div className="flex items-center glass-card px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-neon-purple mr-2" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`relative glass-card-hover transition-all duration-700 cursor-pointer ${
                product.popular ? 'scale-105 border-neon-purple/50 neon-border-intense' : 'border-border/30'
              } ${hoveredProduct === product.id ? 'transform-gpu scale-105' : ''}`}
              style={{animationDelay: `${index * 0.2}s`}}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-neon-purple to-neon-pink text-background px-6 py-2 neon-glow-intense animate-pulse">
                    <Star className="w-4 h-4 mr-1" />
                    NAJPOPULARNIEJSZY
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6 relative">
                <div className="flex justify-center mb-6">
                  <div className={`relative p-6 bg-gradient-to-br from-${product.color}/20 to-${product.color}/10 rounded-2xl border border-${product.color}/30 backdrop-blur-sm`}>
                    <div className={`absolute inset-0 bg-${product.color}/10 blur-xl rounded-2xl`}></div>
                    <product.icon className={`relative w-12 h-12 text-${product.color} z-10`} />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground font-display">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {product.description}
                </p>

                <div className="flex justify-center gap-6 mt-6">
                  {Object.entries(product.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-lg font-bold text-${product.color}`}>{value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-8 px-8">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className={`text-4xl font-bold text-${product.color} font-display`}>
                      ${product.monthlyPrice}<span className="text-lg text-muted-foreground">/mies</span>
                    </div>
                    <div className="text-lg text-muted-foreground">
                      lub ${product.yearlyPrice}/rok 
                      <span className={`text-${product.color} font-semibold`}>
                        {' '}(oszczędzasz ${(product.monthlyPrice * 12) - product.yearlyPrice}$)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-foreground mb-4">Funkcje:</h4>
                  <ul className="space-y-3 max-h-64 overflow-y-auto">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`w-5 h-5 text-${product.color} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4 p-8">
                <Button 
                  className={`w-full h-12 bg-gradient-to-r from-${product.color} to-${product.color}/80 text-background hover:from-${product.color}/90 hover:to-${product.color}/70 neon-border font-semibold text-base transition-all duration-300`}
                  onClick={() => handlePurchase(product, 'monthly')}
                >
                  Rozpocznij miesięcznie - ${product.monthlyPrice}
                </Button>
                <Button 
                  variant="outline"
                  className={`w-full h-12 border-${product.color}/50 text-${product.color} hover:bg-${product.color}/10 hover:border-${product.color} font-semibold text-base transition-all duration-300`}
                  onClick={() => handlePurchase(product, 'yearly')}
                >
                  Oszczędzaj rocznie - ${product.yearlyPrice}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Nie wiesz, który produkt wybrać?
          </p>
          <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
            Skontaktuj się z ekspertem
          </Button>
        </div>
      </div>

      <PurchaseModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};
