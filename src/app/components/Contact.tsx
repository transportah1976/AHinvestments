import { Mail, Phone, MapPin, Clock, User } from 'lucide-react';
import { SEO } from './SEO';

export function Contact() {
  return (
    <div>
      <SEO 
        title="Kontakt - wycena transportu i materiałów" 
        description="Skontaktuj się z AH Investments i odbierz darmową wycenę. Zapewniamy najwyższej jakości materiały opakowaniowe i niezawodny transport towarów z Polski do UE."
        keywords="kontakt, darmowa wycena, transport towarów z Polski do UE, materiały opakowaniowe, folia stretch, kątowniki, pakowanie towarów do wysyłki"
      />
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1B3A5F] via-[#2a4870] to-[#1B3A5F] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0tMTAgMTBjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6bS0xMC0xMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl mb-6">Kontakt</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed">
            Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania i przygotujemy 
            spersonalizowaną ofertę dla Twojej firmy.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Contact Person */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-2xl flex items-center justify-center">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl text-[#1B3A5F]">Osoba kontaktowa</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <User className="text-[#1B3A5F] flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Imię i nazwisko</p>
                    <p className="text-xl text-[#1B3A5F] font-medium">Hubert Szymczak</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Mail className="text-[#1B3A5F] flex-shrink-0" size={24} />
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:hszymczak@ahinvestments.pl" className="text-xl text-[#F5931D] hover:underline break-all">
                      hszymczak@ahinvestments.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Phone className="text-[#1B3A5F] flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Telefon</p>
                    <a href="tel:+48885222277" className="text-xl text-[#F5931D] hover:underline">
                      +48 885 222 277
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="text-[#1B3A5F] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Adres</p>
                    <p className="text-xl text-[#1B3A5F]">
                      Jana Pawła II 30 H<br />
                      97-320 Swolszewice Duże
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+48885222277"
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#F5931D] to-[#e58718] text-white rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    Zadzwoń teraz
                  </a>
                  <a
                    href="mailto:hszymczak@ahinvestments.pl"
                    className="flex-1 px-8 py-4 bg-[#1B3A5F] text-white rounded-xl hover:bg-[#2a4870] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Wyślij email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-[#1B3A5F]">Telefon</h3>
              </div>
              <a href="tel:+48885222277" className="text-gray-600 hover:text-[#F5931D] transition-colors block">
                +48 885 222 277
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B3A5F] to-[#2a4870] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-[#1B3A5F]">Email</h3>
              </div>
              <a href="mailto:hszymczak@ahinvestments.pl" className="text-gray-600 hover:text-[#F5931D] transition-colors block break-all">
                hszymczak@ahinvestments.pl
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5931D] to-[#e58718] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-[#1B3A5F]">Adres</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Jana Pawła II 30 H<br />
                97-320 Swolszewice Duże
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-[#1B3A5F] text-center mb-12">Znajdź nas</h2>
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d19.9263133!3d51.4517453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47198e464a8627f1%3A0xa1e2d48bff5e390e!2sJana%20Paw%C5%82a%20II%2030H%2C%2097-320%20Swolszewice%20Du%C5%BCe!5e0!3m2!1spl!2spl!4v1709999999999!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji AH Investments - Jana Pawła II 30 H, 97-320 Swolszewice Duże"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}