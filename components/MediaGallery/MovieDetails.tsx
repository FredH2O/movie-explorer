import { MovieDetailsType } from "@/hooks/useMovieDetail";
import Image from "next/image";
import { FormEvent } from "react";

type MovieDetailsProps = MovieDetailsType & {
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
};

const MovieDetails = ({
  onClick,
  Title,
  Rated,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Poster,
  Ratings,
}: MovieDetailsProps) => {
  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-95"></div>

      {/* Modal content */}
      <div className="relative z-20 lg:max-w-6xl bg-slate-300 text-black p-6 rounded-lg flex flex-col md:flex-row gap-4 shadow-lg">
        <Image src={Poster} alt="Example Image" width={360} height={240} />
        <div className="border relative p-3 flex-1">
          <div>
            <h2 className="text-2xl font-bold">{Title}</h2>
          </div>

          <div>Genre: {Genre}</div>

          <div>
            <ul>
              {Ratings.map((rating) => (
                <li key={rating.Source}>
                  {rating.Source} - {rating.Value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>Year: {Released}</p>
            <p>Rated: {Rated}</p>
            <p>Runtime: {Runtime}</p>
          </div>

          <div>
            <p>Director: {Director}</p>
            <p>Writer: {Writer}</p>
            <p>Actors: {Actors}</p>
          </div>

          <div>
            <p>Description: {Plot}</p>
          </div>

          <button
            onClick={onClick}
            className="bg-red-500 px-2 py-1 rounded text-white absolute cursor-pointer bottom-3 right-3"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
