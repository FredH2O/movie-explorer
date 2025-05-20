import Image from "next/image";

type MediaProps = {
  poster: string;
  title: string;
  year: string;
  onClick: () => void;
};

const MediaCard = ({ poster, title, year, onClick }: MediaProps) => {
  const isValidPoster = poster !== "N/A" && poster.startsWith("http");

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 opacity-95 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden shadow-md text-white md:w-60 w-90 h-[500px] flex flex-col"
    >
      {/* Fixed image container */}
      <div className="h-[360px] w-full relative">
        {isValidPoster ? (
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 250px"
            className="md:object-cover object-contain"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Text description area fills remaining height */}
      <div className="flex-1 p-4 space-y-2 bg-slate-700 flex flex-col justify-center items-center text-center">
        <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-400">Released: {year}</p>
      </div>
    </div>
  );
};

export default MediaCard;
