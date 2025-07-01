
import { useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  pl: {
    // Payment Methods
    payment_methods: 'Metody Płatności',
    payment_methods_description: 'Oferujemy szeroką gamę bezpiecznych metod płatności dla Twojej wygody.',
    cryptocurrencies: 'Kryptowaluty',
    blik_description: 'Płatność mobilna - szybko i bezpiecznie',
    crypto_description: 'Bitcoin, Ethereum, Litecoin i inne',
    stripe_description: 'Visa, MasterCard, American Express',
    paypal_description: 'Płatności przez PayPal',
    secure_payments: 'Bezpieczne Płatności',
    secure_payments_description: 'Wszystkie transakcje są szyfrowane i zabezpieczone najwyższymi standardami branżowymi. Twoje dane finansowe są w pełni chronione.',
    
    // Header
    products: 'Produkty',
    features: 'Funkcje',
    payments: 'Płatności',
    contact: 'Kontakt',
    get_started: 'Rozpocznij',
    
    // Hero
    professional_telegram_software: 'Profesjonalne Oprogramowanie Telegram',
    hero_description: 'Zaawansowane narzędzia automatyzacji dla platformy Telegram. Zwiększ swoją efektywność dzięki naszym profesjonalnym rozwiązaniom.',
    view_products: 'Zobacz Produkty',
    security: 'Bezpieczeństwo',
    secure: 'Bezpieczne',
    secure_description: 'Najwyższe standardy bezpieczeństwa',
    fast: 'Szybkie',
    fast_description: 'Ultraszybka wydajność',
    advanced: 'Zaawansowane',
    advanced_description: 'Profesjonalne funkcje'
  },
  en: {
    // Payment Methods
    payment_methods: 'Payment Methods',
    payment_methods_description: 'We offer a wide range of secure payment methods for your convenience.',
    cryptocurrencies: 'Cryptocurrencies',
    blik_description: 'Mobile payment - fast and secure',
    crypto_description: 'Bitcoin, Ethereum, Litecoin and others',
    stripe_description: 'Visa, MasterCard, American Express',
    paypal_description: 'PayPal payments',
    secure_payments: 'Secure Payments',
    secure_payments_description: 'All transactions are encrypted and secured with the highest industry standards. Your financial data is fully protected.',
    
    // Header
    products: 'Products',
    features: 'Features',
    payments: 'Payments',
    contact: 'Contact',
    get_started: 'Get Started',
    
    // Hero
    professional_telegram_software: 'Professional Telegram Software',
    hero_description: 'Advanced automation tools for the Telegram platform. Increase your efficiency with our professional solutions.',
    view_products: 'View Products',
    security: 'Security',
    secure: 'Secure',
    secure_description: 'Highest security standards',
    fast: 'Fast',
    fast_description: 'Ultra-fast performance',
    advanced: 'Advanced',
    advanced_description: 'Professional features'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<string>('pl');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = translations[browserLang] ? browserLang : 'pl';
    setLanguage(supportedLang);
  }, []);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const changeLanguage = (newLang: string) => {
    if (translations[newLang]) {
      setLanguage(newLang);
    }
  };

  return { language, changeLanguage, t };
};
