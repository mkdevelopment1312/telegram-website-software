
import { useState, useEffect } from 'react';
import { Menu, X, Shield, Zap, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/hooks/useLanguage';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('products'), href: '#products' },
    { name: t('features'), href: '#features' },
    { name: t('payments'), href: '#payments' },
    { name: t('contact'), href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'glass-card border-b border-border/30 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-green/20 blur-lg rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative p-2 rounded-xl bg-card/50 border border-neon-green/20 group-hover:border-neon-green/40 transition-all duration-300">
                <Shield className="w-7 h-7 text-neon-green transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <Sparkles className="w-4 h-4 text-neon-green absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-display tracking-tight group-hover:scale-105 transition-transform duration-300">
                XAXA<span className="text-neon-green">-SOFTWARE</span>
              </span>
              <span className="text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Professional Telegram Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground/90 hover:text-foreground transition-all duration-300 font-medium group px-4 py-2 rounded-lg hover:bg-card/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 text-shadow-sm">{item.name}</span>
                <div className="absolute inset-0 bg-neon-green/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-neon-green to-transparent group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
            
            <div className="w-px h-6 bg-border/50"></div>
            
            <LanguageSelector />
            
            <Button className="modern-button text-background font-semibold px-6 py-2.5 rounded-xl shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
              {t('get_started')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-foreground hover:text-neon-green hover:bg-card/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-6 pb-6 border-t border-border/30 glass-card rounded-xl p-4">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/90 hover:text-foreground font-medium px-4 py-3 rounded-lg hover:bg-card/40 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between px-4 pt-4 border-t border-border/30">
                <LanguageSelector />
                <Button className="modern-button text-background font-semibold px-4 py-2 rounded-lg">
                  <Zap className="w-4 h-4 mr-2" />
                  {t('get_started')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
