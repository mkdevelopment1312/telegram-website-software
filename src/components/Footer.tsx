
import { Shield, Mail, MessageCircle, Github, Twitter, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      'Spam Software',
      'Joining Software', 
      'Complete Package',
      'Shop Bot'
    ],
    company: [
      'O nas',
      'Blog',
      'Kariera',
      'Kontakt'
    ],
    legal: [
      'Regulamin',
      'Polityka Prywatności', 
      'Cookies',
      'GDPR'
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' }
  ];

  return (
    <footer id="contact" className="relative">
      <div className="glass-card border-t border-border/30 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-green/20 blur-lg rounded-full"></div>
                  <div className="relative bg-card/50 p-3 rounded-xl border border-neon-green/30">
                    <Shield className="w-8 h-8 text-neon-green" />
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-bold text-foreground font-display">
                    XAXA<span className="text-neon-green">-SOFTWARE</span>
                  </span>
                  <div className="text-sm text-muted-foreground font-mono">
                    Professional Telegram Solutions
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-lg">
                Profesjonalne oprogramowanie do automatyzacji Telegram. 
                Zwiększ swoją efektywność dzięki naszym zaawansowanym narzędziom.
              </p>
              
              <div className="glass-card p-4 rounded-xl border border-neon-green/20 inline-block">
                <div className="text-lg font-mono text-neon-green font-semibold">
                  xaxasoftware.dev
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-foreground font-display">Produkty</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center group">
                      <span>{link}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-foreground font-display">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <Mail className="w-4 h-4 mr-3 text-neon-green" />
                  <a href="mailto:kontakt@xaxasoftware.dev" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    kontakt@xaxasoftware.dev
                  </a>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-3 text-neon-blue" />
                  <span className="text-muted-foreground">24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-muted-foreground text-center lg:text-left">
                © {currentYear} XAXA-SOFTWARE. Wszystkie prawa zastrzeżone.
              </div>
              
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="glass-card p-3 rounded-xl border border-border/30 text-muted-foreground hover:text-neon-green hover:border-neon-green/30 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                {footerLinks.legal.map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
