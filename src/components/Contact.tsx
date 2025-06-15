
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => (
  <section className="py-20 bg-white border-t" id="contato">
    <div className="container mx-auto flex flex-col items-center">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-6 text-fire-dark">Vamos conversar?</h2>
      <p className="text-lg text-center mb-8 max-w-2xl text-gray-700">
        Tem um projeto? Entre em contato agora mesmo pelo WhatsApp ou e-mail. Vamos tirar sua ideia do papel!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-fire text-white px-6 py-3 rounded-full hover:bg-fire-dark transition font-semibold shadow"
        >
          <MessageCircle size={22}/>
          WhatsApp
        </a>
        <a
          href="mailto:contato@firedominios.com"
          className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-fire transition font-semibold shadow"
        >
          <Mail size={22} />
          contato@firedominios.com
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
