import { Package, Truck, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { SEO } from './SEO';

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true },
  };

  return (
    <div>
      <SEO 
        title="Materiały opakowaniowe i transport towarów" 
        description="AH Investments: profesjonalne materiały opakowaniowe (folia stretch, kątowniki) i transport towarów z Polski do UE. Zleć nam pakowanie towarów do wysyłki."
        keywords="materiały opakowaniowe, jak zabezpieczyć towar do transportu, folia stretch, kątowniki, transport towarów z Polski do UE, transport towarów do Wielkiej Brytanii, pakowanie towarów do wysyłki"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0tMTAgMTBjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xMC0xMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#F5931D]/20 text-[#F5931D] px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
              >
                <Star size={16} fill="currentColor" />
                <span className="text-sm">Lider w branży transportowej</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl mb-6 leading-tight"
              >
                Od pakowania po transport
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl mb-4 text-[#F5931D]"
              >
                Bezpieczeństwo Twojego towaru w jednych rękach
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Kompleksowe rozwiązania transportowe i pakujące dla wymagających firm. 
                Dowiedz się, jak zabezpieczyć towar do transportu dzięki naszym rozwiązaniom. Oferujemy profesjonalne materiały opakowaniowe i niezawodny transport.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F5931D] text-white rounded-full hover:bg-[#e58718] transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Bezpłatna wycena
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/o-nas"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
                >
                  Dowiedz się więcej
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl md:text-5xl mb-2 text-[#F5931D]">15+</div>
                  <p className="text-sm opacity-80">lat doświadczenia</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl md:text-5xl mb-2 text-[#F5931D]">1000+</div>
                  <p className="text-sm opacity-80">klientów</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl md:text-5xl mb-2 text-[#F5931D]">99%</div>
                  <p className="text-sm opacity-80">na czas</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#F5931D]/20 rounded-3xl blur-3xl"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769697756411-63c1bb2d7031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0JTIwbG9naXN0aWNzfGVufDF8fHx8MTc3Mjg3ODY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Transport logistics"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#1B3A5F] mb-4">
              Nasze usługi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompleksowa obsługa na każdym etapie - od pakowania po dostawę
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/transport-miedzynarodowy" className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F5931D]/20 hover:-translate-y-2 h-full cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Truck className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl text-[#1B3A5F]">
                    Transport krajowy i międzynarodowy
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Realizujemy przewozy LTL i FTL. Oferujemy transport towarów z Polski do UE. Specjalizujemy się w kierunkach zachodnich – w tym transport towarów do Wielkiej Brytanii, gdzie wspieramy w procedurach celnych.
                </p>
                <div className="flex items-center gap-2 text-[#F5931D] font-medium">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            <Link to="/materialy-opakowaniowe" className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F5931D]/20 hover:-translate-y-2 h-full cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1B3A5F] to-[#2a4870] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Package className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl text-[#1B3A5F]">
                    Materiały opakowaniowe
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jako dystrybutor oferujemy wysokiej jakości materiały opakowaniowe, w tym folia stretch oraz kątowniki tekturowe, które zabezpieczają ładunek na czas drogi.
                </p>
                <div className="flex items-center gap-2 text-[#F5931D] font-medium">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            <Link to="/kontakt" className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F5931D]/20 hover:-translate-y-2 h-full cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl text-[#1B3A5F]">
                    Kompleksowa obsługa logistyczna
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zapewniamy pełne wsparcie w takich zadaniach jak pakowanie towarów do wysyłki oraz ich bezpieczny transport. Dbamy o Twój ładunek na każdym etapie logistycznym.
                </p>
                <div className="flex items-center gap-2 text-[#F5931D] font-medium">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-[#1B3A5F]/10 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762232621721-a8f7a9aefdbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwdHJ1Y2slMjB0cmFuc3BvcnRhdGlvbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NzI4Nzg3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern delivery truck"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl text-[#1B3A5F] mb-6">
                Dlaczego my?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AH Investments to wieloletnie doświadczenie w branży transportowej i pakującej. 
                Oferujemy kompleksową obsługę od momentu odbioru towaru, przez pakowanie, 
                aż po dostawę do klienta końcowego.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Terminowość i niezawodność", desc: "Dotrzymujemy każdej obietnicy i terminu" },
                  { title: "Nowoczesna flota pojazdów", desc: "Regularne serwisowanie i najnowsze technologie" },
                  { title: "Konkurencyjne ceny", desc: "Najlepsza jakość w optymalnej cenie" },
                  { title: "Obsługa 24/7", desc: "Jesteśmy dostępni zawsze, gdy nas potrzebujesz" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-[#F5931D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#1B3A5F] mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYm9hcmQlMjBib3hlcyUyMHdhcmVob3VzZSUyMHBhY2thZ2luZyUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NzI4Nzg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Packaging materials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5F]/95 to-[#1B3A5F]/90"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Gotowy na współpracę?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Skontaktuj się z nami już dziś i otrzymaj bezpłatną wycenę dla Twojej przesyłki. 
              Nasi specjaliści pomogą dobrać optymalne rozwiązanie dla Twojego biznesu.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F5931D] text-white rounded-full hover:bg-[#e58718] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Bezpłatna wycena
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}