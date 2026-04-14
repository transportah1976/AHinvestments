import { Anchor, Shield, Clock, Globe, Phone, Euro, HeartHandshake, PackageCheck, Container } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SeaTransport() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: Container,
      title: 'FCL i LCL',
      description: 'Oferujemy zarówno pełne kontenery (FCL), jak i transport drobnicowy (LCL) – idealne dla każdej wielkości ładunku'
    },
    {
      icon: Clock,
      title: 'Terminowość dostaw',
      description: 'Ścisłe monitorowanie harmonogramów rejsów i portów przeładunkowych gwarantuje punktualność'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo ładunku',
      description: 'Właściwe stufowanie i mocowanie towaru w kontenerze to nasz priorytet – Twój ładunek dociera w nienaruszonym stanie'
    },
    {
      icon: Globe,
      title: 'Zasięg globalny',
      description: 'Obsługujemy porty na całym świecie – Europa, Azja, Ameryka i nie tylko'
    },
    {
      icon: PackageCheck,
      title: 'Kompleksowa obsługa celna',
      description: 'Zajmujemy się wszelkimi formalnościami celnymi importu i eksportu'
    },

    {
      icon: Euro,
      title: 'Konkurencyjne stawki',
      description: 'Dzięki stałej współpracy z armatorami zapewniamy korzystne ceny frachtu'
    },
    {
      icon: HeartHandshake,
      title: 'Indywidualne podejście',
      description: 'Dobieramy optymalną trasę i typ kontenera do specyfiki Twojego towaru'
    }
  ];

  return (
    <div>
      <SEO
        title="Transport morski – kontenery FCL i LCL | AH Investments"
        description="Oferujemy profesjonalny transport morski FCL i LCL. Globalne pokrycie portów, kompleksowa obsługa celna i bezpieczny załadunek kontenerów. Zleć nam transport morski już dziś."
        keywords="transport morski, FCL, LCL, kontenery, fracht morski, import, eksport, obsługa celna, transport towarów morzem"
      />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white py-24 md:py-32 overflow-hidden">
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
              <Anchor className="text-[#F5931D]" size={24} />
              <span className="text-white/90">Transport morski</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Transport morski{' '}
              <span className="text-[#F5931D]">na każdy ocean</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zapewniamy niezawodny <strong>fracht morski FCL i LCL</strong> do portów na całym świecie oraz kompleksową obsługę celną Twojego ładunku.
            </p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5931D] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Bezpłatna wycena
              </Link>
              <a
                href="tel:+48885222277"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 transition-all"
              >
                <Phone size={20} />
                +48 885 222 277
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="rounded-2xl overflow-hidden shadow-2xl" {...fadeInUp}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400"
              alt="Transport morski – kontenerowiec na morzu"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl text-[#1B3A5F] mb-6">
                Dlaczego <span className="text-[#F5931D]">transport morski?</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Transport morski to najefektywniejszy sposób przewozu dużych wolumenów towarów na długich dystansach. Niski koszt jednostkowy frachtu, duża ładowność kontenerów i globalna sieć połączeń portowych czynią go niezastąpionym w handlu międzynarodowym.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Oferujemy pełne kontenery (FCL) dla dużych partii ładunku oraz transport drobnicowy (LCL), gdy Twój towar nie wypełnia całego kontenera – płacisz tylko za faktycznie zajętą przestrzeń.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl text-[#F5931D] mb-1">FCL</div>
                  <p className="text-sm text-gray-500">Pełne kontenery</p>
                </div>
                <div>
                  <div className="text-4xl text-[#F5931D] mb-1">LCL</div>
                  <p className="text-sm text-gray-500">Transport drobnicowy</p>
                </div>
                <div>
                  <div className="text-4xl text-[#F5931D] mb-1">500+</div>
                  <p className="text-sm text-gray-500">Portów na świecie</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#F5931D]/10 rounded-3xl blur-3xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900"
                alt="Port kontenerowy z dźwigami"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
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
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  whileHover={{ x: 6 }}
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold mb-1 text-[#1B3A5F] group-hover:text-[#F5931D] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F5931D]/5 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#F5931D] rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#F5931D] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl mb-6">
              Gotowy na <span className="text-[#F5931D]">transport morski</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami – dobierzemy optymalną ofertę FCL lub LCL dla Twojego ładunku
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
