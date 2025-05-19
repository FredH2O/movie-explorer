import Image from "next/image";

type MediaProps = {
  poster: string;
  title: string;
  year: string;
  genre: string;
  runtime: string;
  imdbRating: string;
};

const MediaCard = ({
  poster,
  title,
  year,
  genre,
  runtime,
  imdbRating,
}: MediaProps) => {
  return (
    <>
      <div className="bg-gray-800 opacity-95 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden shadow-md text-white w-60">
        <Image
          src={poster}
          alt={title}
          width={240}
          height={360}
          priority
          className="md:w-full md:h-auto object-cover"
        />
        <div className="p-4 space-y-2 bg-slate-700">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">
            {year} • {genre}
          </p>
          <p className="italic text-xs">Duration: {runtime}</p>
          <p className="mt-2 text-sm">⭐ {imdbRating}</p>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
