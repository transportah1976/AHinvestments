import { Package, Shield, CheckCircle, Box, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { SEO } from './SEO';

// Import rzeczywistych zdjęć produktów
import stretchFilmImage from 'figma:asset/001c1621aa22ab2a478a5698f77be9dce320de31.png';
import cornerboardsImage from 'figma:asset/f19d04960bd150641072a4892397eaf4c8972f04.png';
import airbagsImage from 'figma:asset/615adbc2858537fb510867afcd2ccc3e9ef8c15d.png';
import cardboardImage from 'figma:asset/9dd47ef7c9ec4258539938b19df7e46c67c43f9c.png';
import strappingImage from 'figma:asset/35b151ef7d05debd29efdcb48671afaa16d85c81.png';

export function PackagingMaterials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <SEO 
        title="Materiały opakowaniowe: folia stretch, kątowniki" 
        description="Sprawdź premium materiały opakowaniowe od AH Investments. Oferujemy folie stretch, wytrzymałe kątowniki tekturowe oraz kartony. Bezpieczeństwo Twoich paczek."
        keywords="materiały opakowaniowe, jak zabezpieczyć towar do transportu, folia stretch, kątowniki, pakowanie towarów do wysyłki, tuleje kartonowe, paski bindujące"
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
          <h1 className="text-5xl md:text-7xl mb-6">Materiały opakowaniowe</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed">
            Bezpieczny transport towarów wymaga odpowiednich materiałów opakowaniowych, które stabilizują ładunek, chronią przed uszkodzeniami mechanicznymi oraz minimalizują ryzyko przesuwania się produktów w trakcie transportu i magazynowania.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Oferujemy szeroki wybór profesjonalnych materiałów opakowaniowych dostosowanych do różnych branż – od logistyki i produkcji po e-commerce i magazynowanie. Jeśli zastanawiasz się, <strong className="text-[#1B3A5F]">jak zabezpieczyć towar do transportu</strong>, chętnie pomożemy. Nasze rozwiązania sprawiają, że <strong>pakowanie towarów do wysyłki</strong> jest szybkie i bezpieczne, co zapewnia maksymalną ochronę towaru przy jednoczesnej optymalizacji kosztów.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Folia Stretch */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Layers className="text-white" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#1B3A5F]">Folia stretch – ręczna i maszynowa</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Niezawodna <strong>folia stretch</strong> jest jednym z najczęściej stosowanych rozwiązań, kiedy rozważamy, jak zabezpieczyć towar do transportu na paletach. Dzięki swojej elastyczności i wysokiej odporności na rozciąganie skutecznie stabilizuje materiały opakowaniowe podczas przewozu.
              </p>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Najważniejsze parametry przy wyborze folii stretch</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'grubość folii (micron) – wpływa na wytrzymałość i odporność na przebicie',
                  'rozciągliwość (pre-stretch) – określa wydajność folii i ilość zużywanego materiału',
                  'szerokość rolki – dopasowana do rodzaju pakowania',
                  'rodzaj zastosowania – folia ręczna lub maszynowa',
                  'transparentność lub kolor – w zależności od potrzeb identyfikacji ładunku'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-[#F5931D]/10 border-l-4 border-[#F5931D] p-4 rounded">
                <h4 className="text-lg text-[#1B3A5F] mb-2">Indywidualne dopasowanie</h4>
                <p className="text-gray-600">
                  Dobór odpowiedniej folii zależy m.in. od <strong>wagi palety, rodzaju produktu oraz warunków transportu</strong>. W wielu przypadkach odpowiednio dobrana folia pozwala znacząco zmniejszyć zużycie materiału.
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
              <div className="absolute inset-0 bg-[#1B3A5F]/10 rounded-3xl blur-3xl"></div>
              <img
                src={stretchFilmImage}
                alt="Folia stretch na palecie"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kątowniki */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-[#F5931D]/10 rounded-3xl blur-3xl"></div>
              <img
                src={cornerboardsImage}
                alt="Kątowniki tekturowe"
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B3A5F] to-[#2a4870] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#1B3A5F]">Kątowniki tekturowe</h2>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Trwałe <strong>kątowniki</strong> tekturowe wzmacniają krawędzie opakowań oraz perfekcyjnie stabilizują ładunek na palecie. To doskonały wybór na profesjonalne pakowanie towarów do wysyłki. Chronią produkty przed zgnieceniem i uszkodzeniem mechanicznym.
              </p>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Kluczowe parametry</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'długość kątownika',
                  'grubość i gramatura tektury',
                  'szerokość ramion kątownika',
                  'odporność na nacisk'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Zastosowanie</h3>
              <ul className="space-y-3">
                {[
                  'zabezpieczanie kartonów na paletach',
                  'ochrona krawędzi mebli i płyt',
                  'stabilizacja ładunku podczas transportu'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#1B3A5F] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worki wypełniające */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="text-white" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#1B3A5F]">Worki do wypełniania przestrzeni</h2>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Worki powietrzne i systemy wypełniające przestrzeń służą do eliminowania pustych miejsc w opakowaniach transportowych. Dzięki temu towary nie przemieszczają się podczas transportu i są lepiej chronione przed wstrząsami.
              </p>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Najważniejsze parametry</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'rozmiar worków',
                  'materiał wykonania (folia, papier)',
                  'wytrzymałość na nacisk',
                  'rodzaj wypełnienia (powietrze, granulat)'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Korzyści</h3>
              <ul className="space-y-3">
                {[
                  'amortyzacja wstrząsów',
                  'stabilizacja produktów w kartonie',
                  'ochrona delikatnych towarów'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#1B3A5F] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#1B3A5F]/10 rounded-3xl blur-3xl"></div>
              <img
                src={airbagsImage}
                alt="Worki wypełniające przestrzeń"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paski bindujące */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-[#F5931D]/10 rounded-3xl blur-3xl"></div>
              <img
                src={strappingImage}
                alt="Paski bindujące i urządzenie"
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B3A5F] to-[#2a4870] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Layers className="text-white" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#1B3A5F]">Paski bindujące (taśmy spinające)</h2>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Taśmy spinające służą do stabilizacji ładunku na palecie oraz zabezpieczania ciężkich paczek. W połączeniu z zapinkami lub urządzeniami spinającymi zapewniają bardzo mocne i trwałe połączenie.
              </p>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Najważniejsze parametry</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'rodzaj taśmy (PP, PET, stalowa)',
                  'szerokość taśmy',
                  'wytrzymałość na zerwanie',
                  'rodzaj systemu spinania'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Zastosowanie</h3>
              <ul className="space-y-3">
                {[
                  'zabezpieczanie palet',
                  'spinanie ciężkich ładunków',
                  'stabilizacja produktów w transporcie'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#1B3A5F] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kartony i Tuleje - Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kartony */}
            <motion.div
              {...fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B3A5F] to-[#2a4870] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Box className="text-white" size={28} />
                </div>
                <h2 className="text-3xl text-[#1B3A5F]">Kartony i przekładki kartonowe</h2>
              </div>

              <img
                src={cardboardImage}
                alt="Kartony transportowe"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mb-6"
              />

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kartony stanowią podstawowe opakowanie transportowe stosowane w wielu branżach. Odpowiednio dobrane zapewniają skuteczną ochronę produktów podczas transportu i magazynowania.
              </p>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Parametry, które warto uwzględnić</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'rodzaj tektury (fala B, C, BC itp.)',
                  'gramatura tektury',
                  'wytrzymałość na zgniatanie (ECT)',
                  'wymiary dopasowane do produktu'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h4 className="text-lg text-[#1B3A5F] mb-2">Przekładki kartonowe</h4>
                <p className="text-gray-600">
                  Przekładki pozwalają oddzielić produkty w opakowaniu zbiorczym oraz stabilizują warstwy towarów na paletach.
                </p>
              </div>
            </motion.div>

            {/* Tuleje */}
            <motion.div
              {...fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="text-white" size={28} />
                </div>
                <h2 className="text-3xl text-[#1B3A5F]">Tuleje kartonowe</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-lg h-64 mb-6 flex items-center justify-center">
                <Package className="text-gray-300" size={80} />
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Tuleje tekturowe są stosowane do zabezpieczania i przechowywania materiałów w rolkach oraz do wzmacniania konstrukcji opakowań.
              </p>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Kluczowe parametry</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'średnica wewnętrzna tulei',
                  'grubość ścianki',
                  'długość tulei',
                  'wytrzymałość na nacisk'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl text-[#1B3A5F] mb-4">Zastosowanie</h3>
              <ul className="space-y-3">
                {[
                  'materiały foliowe i papierowe w rolkach',
                  'tkaniny i materiały techniczne',
                  'elementy cylindryczne'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#1B3A5F] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
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
                Indywidualne dopasowanie materiałów opakowaniowych
              </h2>
              <p className="text-xl mb-4 opacity-90 leading-relaxed">
                Każdy transport ma inne wymagania. Dlatego pomagamy w <strong>doborze odpowiednich materiałów opakowaniowych dopasowanych do specyfiki produktu, wagi ładunku oraz sposobu transportu</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8 text-left">
                {[
                  'zwiększyć bezpieczeństwo transportu',
                  'ograniczyć uszkodzenia towarów',
                  'zoptymalizować koszty pakowania',
                  'poprawić efektywność procesu logistycznego'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#F5931D] flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

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