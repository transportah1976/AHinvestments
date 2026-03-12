import { Truck, Shield, Clock, Globe, Phone, Euro, HeartHandshake, PackageCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from './SEO';

const transportImage = 'https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZnJlaWdodCUyMHRyYW5zcG9ydCUyMHRydWNrJTIwaGlnaHdheXxlbnwxfHx8fDE3NzMzNDk4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function InternationalTransport() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Terminowość',
      description: 'Dostawy realizujemy zgodnie z ustalonym harmonogramem'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo ładunku',
      description: 'Nowoczesna flota oraz odpowiednie zabezpieczenie transportu'
    },
    {
      icon: Globe,
      title: 'Doświadczenie w transporcie międzynarodowym',
      description: 'Znamy trasy, przepisy i procedury w wielu krajach Europy'
    },
    {
      icon: PackageCheck,
      title: 'Doradztwo w przygotowaniu ładunku',
      description: 'Podpowiemy jak najlepiej zapakować towar i na co zwrócić uwagę przed transportem'
    },
    {
      icon: Phone,
      title: 'Stały kontakt z klientem',
      description: 'Informujemy o przebiegu transportu na każdym etapie'
    },
    {
      icon: Euro,
      title: 'Konkurencyjne ceny',
      description: 'Dopasowujemy ofertę do potrzeb i możliwości klienta'
    },
    {
      icon: HeartHandshake,
      title: 'Indywidualne podejście',
      description: 'Każde zlecenie traktujemy priorytetowo'
    }
  ];

  return (
    <div>
      <SEO 
        title="Transport towarów z Polski do UE i UK" 
        description="Oferujemy bezpieczny transport towarów z Polski do UE, w tym transport towarów do Wielkiej Brytanii. Terminowa logistyka dla najbardziej wymagających firm."
        keywords="transport towarów z Polski do UE, transport towarów do Wielkiej Brytanii, pakowanie towarów do wysyłki, jak zabezpieczyć towar do transportu, logistyka, spedycja"
      />
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white py-24 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5931D] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5931D] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Truck className="text-[#F5931D]" size={24} />
              <span className="text-white/90">Transport międzynarodowy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Transport międzynarodowy <span className="text-[#F5931D]">bez kompromisów</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zapewniamy szybki i bezpieczny <strong>transport towarów z Polski do UE</strong>, ze szczególnym uwzględnieniem kierunków zachodnich. Nasza specjalność to <strong>transport towarów do Wielkiej Brytanii</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            {...fadeInUp}
          >
            <img 
              src={transportImage} 
              alt="Transport międzynarodowy - ciężarówka w terminalu kontenerowym" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Każde zlecenie traktujemy indywidualnie, realizując sprawny transport towarów z Polski do UE z dbałością o najwyższą jakość obsługi oraz pełną kontrolę nad przewozem. Organizujemy również kompleksowy transport towarów do Wielkiej Brytanii, obejmujący formalności celne.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                W razie potrzeby pomagamy doradzić, jak zabezpieczyć towar do transportu oraz organizujemy bezpieczne pakowanie towarów do wysyłki, aby Twój ładunek dotarł na miejsce w idealnym stanie, niezależnie od odległości.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1B3A5F]">
              Dlaczego warto <span className="text-[#F5931D]">wybrać właśnie nas?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F5931D]/30 flex items-start gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg mb-2 text-[#1B3A5F] group-hover:text-[#F5931D] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F5931D]/5 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#F5931D] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#F5931D] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Gotowy na bezpieczny <span className="text-[#F5931D]">transport</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i poznaj naszą ofertę
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+48885222277"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5931D] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone size={20} />
                +48 885 222 277
              </a>
              <a 
                href="mailto:hszymczak@ahinvestments.pl"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all"
              >
                Napisz do nas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}