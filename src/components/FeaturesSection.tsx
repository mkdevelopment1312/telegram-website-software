
import { Shield, Zap, Code, Users, BarChart, Lock, Globe, Headphones } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Maksymalne Bezpieczeństwo',
      description: 'Zaawansowane szyfrowanie i ochrona przed wykryciem',
      color: 'neon-green'
    },
    {
      icon: Zap,
      title: 'Ultraszybka Wydajność',
      description: 'Optymalizacja dla maksymalnej prędkości działania',
      color: 'neon-blue'
    },
    {
      icon: Code,
      title: 'Zaawansowane API',
      description: 'Pełna integracja z Telegram API i dodatkowymi funkcjami',
      color: 'neon-purple'
    },
    {
      icon: Users,
      title: 'Zarządzanie Kontaktami',
      description: 'Inteligentne zarządzanie bazą użytkowników',
      color: 'neon-pink'
    },
    {
      icon: BarChart,
      title: 'Analityka i Raporty',
      description: 'Szczegółowe statystyki i raporty wydajności',
      color: 'neon-green'
    },
    {
      icon: Lock,
      title: 'Ochrona Anty-Ban',
      description: 'Zaawansowane mechanizmy ochrony przed blokadami',
      color: 'neon-blue'
    },
    {
      icon: Globe,
      title: 'Proxy Support',
      description: 'Pełne wsparcie dla proxy i VPN',
      color: 'neon-purple'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Całodobowe wsparcie techniczne',
      color: 'neon-pink'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime', color: 'neon-green' },
    { value: '1000+', label: 'Zadowolonych klientów', color: 'neon-blue' },
    { value: '24/7', label: 'Support', color: 'neon-purple' }
  ];

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display">
            <span className="gradient-text">Funkcje</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Zaawansowane funkcje, które czynią nasze oprogramowanie najbardziej kompleksowym rozwiązaniem na rynku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-hover animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="glass-card p-8 rounded-2xl border border-border/30 h-full">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-${feature.color}/20 blur-xl rounded-full`}></div>
                  <div className="relative bg-card/50 p-3 rounded-xl border border-border/30 w-fit">
                    <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 text-foreground font-display">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl border border-border/30 p-10 max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center font-display">
            Dlaczego XAXA-SOFTWARE?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl md:text-6xl font-bold text-${stat.color} mb-4 font-display`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
