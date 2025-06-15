
import { ExternalLink } from "lucide-react";

interface SiteCardProps {
  title: string;
  img: string;
  url?: string;
  description: string;
  badge?: string;
}

const techBadges: Record<string, string> = {
  "Cafeteria Aroma": "WordPress",
  "Construtora Prime": "WordPress",
  "Blog Viagem com Estilo": "WordPress",
  "Loja TechShop": "React",
  "Personal Trainer Premium": "React",
  "Advocacia Freitas": "Next.js"
};

const SiteCard = ({ title, img, url, description }: SiteCardProps) => (
  <div className="rounded-2xl shadow-lg bg-white border flex flex-col group transition-all duration-300 transform hover:scale-[1.035] hover:shadow-2xl hover:border-fire-dark relative animate-fade-in">
    {/* Badge de tecnologia */}
    <span className="absolute right-4 top-4 bg-fire/90 text-white font-semibold text-xs px-3 py-1 rounded-full shadow-lg select-none z-10 animate-scale-in tracking-wide">
      {techBadges[title] ?? "Web"}
    </span>
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-400"
      />
      {/* Overlay animado */}
      <div className="absolute inset-x-0 bottom-0 py-2 flex justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-fire/50 via-transparent to-transparent">
        <span className="backdrop-blur-md px-3 py-1 rounded text-white font-semibold text-sm">+ Detalhes</span>
      </div>
    </div>
    <div className="flex-1 p-5 flex flex-col">
      <h3 className="text-xl font-bold mb-2 font-playfair text-fire">{title}</h3>
      <p className="mb-4 text-gray-700 flex-1">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-fire text-white font-semibold hover:bg-fire-dark transition self-start shadow"
        >
          Visitar Site <ExternalLink size={18} />
        </a>
      )}
    </div>
  </div>
);

export default SiteCard;
