
import { CreditCard, Smartphone, Bitcoin, Shield, DollarSign, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const PaymentMethods = () => {
  const { t } = useLanguage();

  const paymentMethods = [
    {
      name: 'BLIK',
      icon: Smartphone,
      description: t('blik_description'),
      color: 'neon-green',
      features: ['Instant', 'Secure', 'Poland']
    },
    {
      name: t('cryptocurrencies'),
      icon: Bitcoin,
      description: t('crypto_description'),
      color: 'neon-blue',
      features: ['Anonymous', 'Global', 'Fast']
    },
    {
      name: 'Stripe',
      icon: CreditCard,
      description: t('stripe_description'),
      color: 'neon-purple',
      features: ['Cards', 'Secure', 'Worldwide']
    },
    {
      name: 'PayPal',
      icon: DollarSign,
      description: t('paypal_description'),
      color: 'neon-green',
      features: ['Trusted', 'Easy', 'Protected']
    }
  ];

  const securityFeatures = [
    { name: 'SSL 256-bit', color: 'neon-green' },
    { name: 'PCI DSS', color: 'neon-blue' },
    { name: 'GDPR', color: 'neon-purple' },
    { name: '2FA', color: 'neon-pink' }
  ];

  return (
    <section id="payments" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display">
            <span className="gradient-text">{t('payment_methods')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            {t('payment_methods_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="glass-card-hover animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="glass-card p-8 rounded-2xl border border-border/30 text-center h-full">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-${method.color}/20 blur-xl rounded-full`}></div>
                  <div className="relative bg-card/50 p-4 rounded-2xl border border-border/30 w-fit mx-auto">
                    <method.icon className={`w-10 h-10 text-${method.color}`} />
                  </div>
                </div>
                
                <h3 className="font-semibold text-xl mb-3 text-foreground font-display">
                  {method.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {method.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {method.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-card/50 text-foreground/80 rounded-full border border-border/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl border border-border/30 p-10 max-w-5xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-neon-green/20 blur-2xl rounded-full"></div>
            <div className="relative bg-card/50 p-4 rounded-2xl border border-neon-green/30 w-fit mx-auto">
              <Shield className="w-16 h-16 text-neon-green" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display text-foreground">
            {t('secure_payments')}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('secure_payments_description')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {securityFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-border/30">
                <CheckCircle className={`w-4 h-4 text-${feature.color}`} />
                <span className="text-sm font-medium text-foreground">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
