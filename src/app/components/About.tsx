import { Truck, Package, Globe, Shield, FileCheck, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { SEO } from './SEO';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <SEO 
        title="O nas - ekspert w transporcie i pakowaniu" 
        description="AH Investments to rzetelny partner logistyczny. Dowiedz się, jak zabezpieczyć towar do transportu i postaw na sprawdzony transport towarów z Polski do UE."
        keywords="transport towarów z Polski do UE, materiały opakowaniowe, jak zabezpieczyć towar do transportu, logistyka międzynarodowa, firma transportowa"
      />
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0tMTAgMTBjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xMC0xMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl mb-6">O nas</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed">
            Od pakowania po transport – bezpieczeństwo Twojego towaru w jednych rękach.
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl text-[#1B3A5F] mb-6">
                Kim jesteśmy
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Specjalizujemy się w organizacji transportu krajowego i międzynarodowego, 
                  realizując przewozy zarówno ładunków częściowych (LTL), jak i całopojazdowych (FTL).
                </p>
                <p>
                  Dzięki doświadczeniu w logistyce międzynarodowej wspieramy naszych klientów nie 
                  tylko w samym transporcie, ale także w kwestiach formalnych związanych z przewozami 
                  poza Unię Europejską. Szczególne doświadczenie posiadamy w obsłudze kierunków takich 
                  jak <strong className="text-[#1B3A5F]">Szwajcaria</strong> oraz <strong className="text-[#1B3A5F]">Wielka Brytania</strong>, 
                  gdzie pomagamy w sprawnym przejściu przez procedury celne i dokumentacyjne.
                </p>
                <p>
                  Równolegle prowadzimy działalność jako dystrybutor materiałów opakowaniowych. 
                  Doskonale wiemy, jak kluczowe jest właściwe zabezpieczenie towaru w transporcie, 
                  dlatego oferujemy sprawdzone, wysokiej jakości materiały i komponenty opakowaniowe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#F5931D]/20 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGxvZ2lzdGljcyUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NDEwMjg4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Transport logistics"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: Truck, title: "Transport LTL i FTL", desc: "Realizujemy przewozy ładunków częściowych i całopojazdowych, dostosowując się do indywidualnych potrzeb każdego klienta.", color: "from-[#F5931D] to-[#e58718]" },
              { Icon: Globe, title: "Logistyka międzynarodowa", desc: "Specjalizujemy się w przewozach do Szwajcarii i Wielkiej Brytanii, wspierając w procedurach poza Unią Europejską.", color: "from-[#1B3A5F] to-[#2a4870]" },
              { Icon: FileCheck, title: "Wsparcie celne", desc: "Pomagamy w sprawnym przejściu przez procedury celne i dokumentacyjne, zapewniając kompleksową obsługę.", color: "from-[#F5931D] to-[#e58718]" },
              { Icon: Package, title: "Materiały opakowaniowe", desc: "Dystrybuujemy wysokiej jakości materiały i komponenty opakowaniowe, dobrane na podstawie praktycznego doświadczenia.", color: "from-[#1B3A5F] to-[#2a4870]" },
              { Icon: Shield, title: "Bezpieczeństwo towaru", desc: "Wiemy, co naprawdę chroni towar podczas transportu. Oferujemy sprawdzone rozwiązania oparte na doświadczeniu.", color: "from-[#F5931D] to-[#e58718]" },
              { Icon: MapPin, title: "Kompleksowe podejście", desc: "Od pakowania po transport – dbamy o bezpieczeństwo ładunku na każdym etapie procesu logistycznego.", color: "from-[#1B3A5F] to-[#2a4870]" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl text-[#1B3A5F]">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] p-12 md:p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0tMTAgMTBjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xMC0xMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-6">
                Nasza oferta powstała w oparciu o praktyczne doświadczenie
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Dzięki doświadczeniu zdobytemu w branży transportowej zapewniamy klientom 
                kompleksowe podejście do logistyki – od pakowania po transport, dbając o 
                bezpieczeństwo ładunku na każdym etapie.
              </p>
              <Link
                to="/kontakt"
                className="inline-block px-10 py-4 bg-gradient-to-r from-[#F5931D] to-[#e58718] text-white rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}