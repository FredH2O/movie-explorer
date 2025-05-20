import Image from "next/image";

type MediaProps = {
  poster: string;
  title: string;
  year: string;
  genre: string;
  runtime: string;
  imdbRating: string;
};

const MediaCard = ({ poster, title, year }: MediaProps) => {
  const isValidPoster = poster !== "N/A" && poster.startsWith("http");

  return (
    <div className="bg-gray-800 opacity-95 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden shadow-md text-white w-60">
      {isValidPoster ? (
        <Image
          src={poster}
          alt={title}
          width={240}
          height={360}
          priority
          className="w-full object-cover"
        />
      ) : (
        <div className="w-full h-[360px] bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
      )}
      <div className="p-4 space-y-2 bg-slate-700 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">Released: {year}</p>
      </div>
    </div>
  );
};

export default MediaCard;
