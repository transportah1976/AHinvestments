import { Plane, Shield, Clock, Globe, Phone, Euro, HeartHandshake, PackageCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AirTransport() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Ekspresowe terminy',
      description: 'Transport lotniczy to najszybszy sposób dostarczenia towaru na każdy kontynent – godziny zamiast tygodni'
    },
    {
      icon: Shield,
      title: 'Wysoki poziom bezpieczeństwa',
      description: 'Surowe procedury bezpieczeństwa lotnisk minimalizują ryzyko kradzieży i uszkodzenia towaru'
    },
    {
      icon: Clock,
      title: 'Precyzyjne harmonogramy',
      description: 'Regularne połączenia lotnicze pozwalają zaplanować dostawę z dokładnością co do godziny'
    },
    {
      icon: Globe,
      title: 'Zasięg globalny',
      description: 'Docieramy do ponad 200 krajów – cargo lotnicze otwiera drzwi na każdy rynek świata'
    },
    {
      icon: PackageCheck,
      title: 'Obsługa towarów specjalnych',
      description: 'Leki, wartościowe towary, artykuły szybkopsujące i ładunki niebezpieczne (ADR lotnicze) – mamy doświadczenie'
    },

    {
      icon: Euro,
      title: 'Optymalizacja kosztów',
      description: 'Dobieramy odpowiedni produkt lotniczy (standard, economy, express) do Twojego budżetu i potrzeb'
    },
    {
      icon: HeartHandshake,
      title: 'Pełna obsługa celna',
      description: 'Przygotowujemy dokumentację lotniczą (AWB) i prowadzimy odprawy celne na lotniskach'
    }
  ];

  return (
    <div>
      <SEO
        title="Transport lotniczy – cargo i ekspres | AH Investments"
        description="Szybki transport lotniczy cargo do ponad 200 krajów. Obsługa towarów wartościowych, leków i artykułów szybkopsujących. Pełna obsługa celna i AWB. Zleć nam transport lotniczy."
        keywords="transport lotniczy, cargo lotnicze, fracht lotniczy, AWB, lotnicze przesyłki ekspresowe, air freight, import eksport lotniczy"
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
              <Plane className="text-[#F5931D]" size={24} />
              <span className="text-white/90">Transport lotniczy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Transport lotniczy{' '}
              <span className="text-[#F5931D]">bez granic</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zapewniamy najszybszy możliwy transport Twoich towarów drogą lotniczą do ponad 200 krajów. Ekspresowe terminy i pełna obsługa celna Twojego ładunku.
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
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400"
              alt="Transport lotniczy – samolot cargo na lotnisku"
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
                Kiedy czas to <span className="text-[#F5931D]">pieniądz</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Transport lotniczy to wybór, gdy liczy się czas. Przesyłki pilne, sezonowe, towar o wysokiej wartości lub krótkim terminie przydatności – wszystko to trafia na pokład samolotu cargo szybciej niż myślisz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Oferujemy produkty express, standard i economy, dostosowując ofertę do Twojego budżetu i terminu. Obsługujemy zarówno przesyłki drobne, jak i duże partie ładunku cargo.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl text-[#F5931D] mb-1">200+</div>
                  <p className="text-sm text-gray-500">Krajów w zasięgu</p>
                </div>
                <div>
                  <div className="text-4xl text-[#F5931D] mb-1">24h</div>
                  <p className="text-sm text-gray-500">Dostawy ekspresowe</p>
                </div>
                <div>
                  <div className="text-4xl text-[#F5931D] mb-1">99%</div>
                  <p className="text-sm text-gray-500">Skuteczność dostaw</p>
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
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900"
                alt="Załadunek samolotu cargo na lotnisku"
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
              Gotowy na <span className="text-[#F5931D]">transport lotniczy</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami – dobierzemy najszybszą i najbardziej opłacalną opcję cargo dla Twojej przesyłki
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
