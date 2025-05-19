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
  return (
    <>
      <div className="bg-gray-800 opacity-95 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden shadow-md text-white w-60 flex flex-col">
        <div className="w-full h-[360px] relative">
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 240px"
            className="object-cover"
          />
        </div>
        <div className="p-1 bg-slate-700 flex flex-col justify-center items-center h-[100px]">
          <h2 className="text-lg font-semibold text-center line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-gray-400">Released: {year}</p>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
