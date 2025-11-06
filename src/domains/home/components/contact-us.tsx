import { Card, CardContent } from "@/components/ui/card";
import { Headset, MapPinHouse, Phone } from "lucide-react";

export const ContactUs = () => {
  return (
    <section className="p-5">
      <div className="flex items-center justify-center gap-3 mb-5">
        <Headset className="w-8 h-8 text-blue-700" />
        <h2 className="text-xl md:text-3xl text-violet-700 font-bold text-center">
          Hubungi Kami
        </h2>
      </div>

      <Card className="p-0 w-full md:w-3/4 mx-auto">
        <CardContent className="p-3">
          {/* Kontak */}
          <h3 className="font-bold mb-5 md:text-xl md:ms-32">
            Informasi Kontak
          </h3>
          <div className="flex items-center gap-5 w-full">
            <div className="w-1/3">
              <Phone className="text-violet-700 w-8 h-8 md:w-10 md:h-10 mx-auto" />
            </div>
            <div className="flex flex-col w-2/3">
              <p className="font-semibold md:text-lg">Telpon / WhatsApp</p>
              <p className="md:text-lg">0896-1243-1402</p>
              <p className="md:text-lg">0813-3004-7331</p>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full">
            <div className="w-1/3">
              <MapPinHouse className="text-pink-700 w-8 h-8 md:w-10 md:h-10 mx-auto animate-bounce" />
            </div>
            <div className="flex flex-col w-2/3">
              <p className="font-semibold md:text-lg">Alamat</p>
              <p className="md:text-lg">
                Perumahan Mutiara Alam Permai Blok U No. 20, Desa Pasirjengkol,
                Kec. Majalaya, Kab. Karawang
              </p>
            </div>
          </div>

          {/* Maps */}
          <h3 className="font-bold mb-5 md:text-xl md:ms-32">Lokasi Kami</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6590270635597!2d107.35549057363973!3d-6.3084486617337925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697732a941a491%3A0x216fa0bb9a098f3b!2sRestu%20Fam&#39;s!5e0!3m2!1sen!2sid!4v1762405664033!5m2!1sen!2sid"
            loading="lazy"
            className="w-full h-60 rounded-lg border border-green-500 shadow-lg shadow-green-500 animate-pulse"
          />
        </CardContent>
      </Card>
    </section>
  );
};
