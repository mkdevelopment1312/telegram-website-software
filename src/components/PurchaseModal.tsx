
import { useState } from 'react';
import { X, Mail, CreditCard, Shield, Check, Smartphone, Bitcoin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

export const PurchaseModal = ({ isOpen, onClose, product }: PurchaseModalProps) => {
  const [email, setEmail] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const paymentMethods = [
    { 
      id: 'blik', 
      name: 'BLIK', 
      icon: Smartphone, 
      description: 'Szybka płatność mobilna',
      color: 'neon-green',
      badge: 'Popularne'
    },
    { 
      id: 'crypto', 
      name: 'Cryptocurrency', 
      icon: Bitcoin, 
      description: 'Bitcoin, Ethereum, USDT',
      color: 'neon-blue',
      badge: 'Anonimowe'
    },
    { 
      id: 'stripe', 
      name: 'Karty płatnicze', 
      icon: CreditCard, 
      description: 'Visa, Mastercard, Amex',
      color: 'neon-purple',
      badge: 'Bezpieczne'
    },
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: DollarSign, 
      description: 'Konto PayPal lub karta',
      color: 'neon-pink',
      badge: 'Zaufane'
    }
  ];

  if (!isOpen || !product) return null;

  const price = product.billingType === 'monthly' ? product.monthlyPrice : product.yearlyPrice;
  const billingText = product.billingType === 'monthly' ? 'miesięcznie' : 'rocznie';
  const savings = product.billingType === 'yearly' ? (product.monthlyPrice * 12) - product.yearlyPrice : 0;

  const handlePurchase = async () => {
    if (!email || !selectedPayment) {
      toast({
        title: "Błąd walidacji",
        description: "Wypełnij wszystkie wymagane pola przed kontynuowaniem",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Symulacja procesu płatności
    setTimeout(() => {
      toast({
        title: "Płatność zainicjowana!",
        description: `Instrukcje płatności zostały wysłane na ${email}. Sprawdź swoją skrzynkę email.`,
      });
      setIsProcessing(false);
      onClose();
      setEmail('');
      setSelectedPayment('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-3xl bg-card/95 backdrop-blur-lg border-border/50 animate-scale-in shadow-2xl">
        <CardHeader className="relative border-b border-border/30">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-start space-x-4 pr-12">
            <div className={`p-4 bg-gradient-to-br from-${product.color}/20 to-${product.color}/10 rounded-2xl border border-${product.color}/30`}>
              <product.icon className={`w-10 h-10 text-${product.color}`} />
            </div>
            <div className="flex-1">
              <CardTitle className="text-3xl font-display mb-2">{product.name}</CardTitle>
              <div className="flex items-center gap-4 mb-3">
                <p className="text-muted-foreground text-lg">
                  Licencja {billingText} - <span className={`text-${product.color} font-bold text-2xl`}>${price}</span>
                </p>
                {savings > 0 && (
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                    Oszczędzasz ${savings}
                  </Badge>
                )}
              </div>
              
              {product.popular && (
                <Badge className="bg-gradient-to-r from-neon-purple to-neon-pink text-background">
                  Najlepszy wybór
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8 space-y-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-lg font-semibold mb-3 block">
                Adres email *
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="twoj@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-14 h-14 bg-background/50 border-border/50 focus:border-neon-green text-lg rounded-xl"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 ml-1">
                Dane dostępowe i instrukcje zostaną wysłane na ten adres email
              </p>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">
                Wybierz metodę płatności *
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                      selectedPayment === method.id
                        ? `border-${method.color} bg-${method.color}/5 shadow-lg`
                        : 'border-border/30 hover:border-border/60 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-${method.color}/20 border border-${method.color}/30 group-hover:scale-110 transition-transform`}>
                        <method.icon className={`w-8 h-8 text-${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg">{method.name}</h4>
                          {selectedPayment === method.id && (
                            <Check className={`w-6 h-6 text-${method.color}`} />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <Badge variant="outline" className={`text-xs border-${method.color}/50 text-${method.color}`}>
                          {method.badge}
                        </Badge>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 space-y-4 border border-neon-green/20">
              <h4 className="flex items-center font-semibold text-lg">
                <Shield className="w-5 h-5 text-neon-green mr-2" />
                Gwarancje bezpieczeństwa
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  <span>Szyfrowanie SSL 256-bit</span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  <span>Natychmiastowy dostęp</span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  <span>24/7 Support techniczny</span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                  <span>Gwarancja zwrotu pieniędzy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 h-14 text-lg rounded-xl"
              disabled={isProcessing}
            >
              Anuluj
            </Button>
            <Button
              onClick={handlePurchase}
              className="flex-1 h-14 bg-gradient-to-r from-neon-green to-neon-green/80 text-background hover:from-neon-green/90 hover:to-neon-green/70 text-lg font-semibold rounded-xl neon-glow"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-background border-t-transparent mr-3"></div>
                  Przetwarzanie...
                </div>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Zapłać ${price}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
