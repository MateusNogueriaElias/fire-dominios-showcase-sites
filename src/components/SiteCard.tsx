
import { ExternalLink } from "lucide-react";

interface SiteCardProps {
  title: string;
  img: string;
  url?: string;
  description: string;
}

const SiteCard = ({ title, img, url, description }: SiteCardProps) => (
  <div className="rounded-2xl shadow-lg bg-white border flex flex-col group hover:scale-[1.025] hover:shadow-2xl transition">
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition"
      />
    </div>
    <div className="flex-1 p-5 flex flex-col">
      <h3 className="text-xl font-bold mb-2 font-playfair text-fire">{title}</h3>
      <p className="mb-4 text-gray-700 flex-1">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-fire text-white font-semibold hover:bg-fire-dark transition self-start"
        >
          Visitar Site <ExternalLink size={18} />
        </a>
      )}
    </div>
  </div>
);

export default SiteCard;
