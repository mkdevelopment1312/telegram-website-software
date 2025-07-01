
import { useEffect, useState } from 'react';
import { ArrowRight, Shield, Zap, Code, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const { t } = useLanguage();
  const fullText = t('professional_telegram_software');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="pt-40 pb-24 px-6 relative min-h-screen flex items-center">
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Trust indicators */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-6 glass-card px-6 py-3 rounded-full">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">1000+ zadowolonych klientów</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-green/20 blur-2xl rounded-full animate-pulse"></div>
              <div className="relative glass-card p-8 rounded-3xl border border-neon-green/30">
                <div className="relative">
                  <Code className="w-20 h-20 text-neon-green" />
                  <Sparkles className="w-6 h-6 text-neon-green absolute -top-2 -right-2 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-display tracking-tight">
            <span className="text-foreground">XAXA</span>
            <span className="text-muted-foreground/30">-</span>
            <span className="gradient-text-animated">SOFTWARE</span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 text-muted-foreground min-h-[4rem] flex items-center justify-center">
            <span className="font-mono text-shadow-sm">{typedText}</span>
            <span className="animate-pulse text-neon-green/60 ml-2 text-3xl">|</span>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero_description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg"
              className="modern-button text-background font-semibold text-lg px-8 py-4 rounded-xl group shadow-2xl"
            >
              <Zap className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              {t('view_products')}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-neon-green/30 text-foreground hover:bg-neon-green/10 hover:border-neon-green/50 text-lg px-8 py-4 rounded-xl font-semibold glass-card transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-3" />
              {t('security')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Shield, 
                title: t('secure'), 
                desc: t('secure_description'),
                color: 'neon-green'
              },
              { 
                icon: Zap, 
                title: t('fast'), 
                desc: t('fast_description'),
                color: 'neon-blue'
              },
              { 
                icon: Code, 
                title: t('advanced'), 
                desc: t('advanced_description'),
                color: 'neon-purple'
              }
            ].map((item, index) => (
              <div key={index} className="animate-scale-in glass-card-hover" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="glass-card p-8 rounded-2xl border border-border/30 text-center h-full">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-${item.color}/20 blur-xl rounded-full`}></div>
                    <div className="relative bg-card/50 p-4 rounded-2xl border border-border/30 w-fit mx-auto">
                      <item.icon className={`w-8 h-8 text-${item.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-4 text-foreground font-display">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
