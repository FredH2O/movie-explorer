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
    <div className="fixed inset-0 z-10 flex justify-center items-center border p-1">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-95"></div>

      {/* Modal content */}
      <div className="relative z-20 lg:max-w-6xl bg-slate-300 text-black p-6  flex flex-col md:flex-row gap-4 shadow-lg overflow-y-auto max-h-screen">
        <div>
          <Image src={Poster} alt="Example Image" width={360} height={240} />
        </div>

        <div className="border relative p-3 flex-1 flex flex-col">
          <div>
            <h2 className="text-2xl font-bold">{Title}</h2>
          </div>

          <div>
            <div className="flex gap-2 flex-row py-1">
              {Genre.split(",").map((genre) => (
                <div
                  className="border italic font-bold text-xs rounded-xs bg-emerald-500 px-2"
                  key={genre}
                >
                  <p>{genre}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ul>
              {Ratings.map((rating) => (
                <li key={rating.Source}>
                  <b>{rating.Source}</b>: {rating.Value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>
              <b>Released:</b> {Released}
            </p>
            <p>
              <b>Rated:</b> {Rated}
            </p>
            <p>
              <b>Runtime:</b> {Runtime}
            </p>
          </div>

          <hr />
          <div>
            <p>
              <b>Director:</b> {Director}
            </p>
            <p>
              <b>Writer:</b> {Writer}
            </p>
            <p>
              <b>Actors:</b> {Actors}
            </p>
          </div>

          <div className="flex-1 justify-center flex items-center">
            <p>
              <b>Plot</b>: {Plot}
            </p>
          </div>

          <div className="flex justify-end p-1">
            <button
              onClick={onClick}
              className="bg-red-500 hover:-translate-y-0.5 rounded hover:bg-red-600 transition-all duration-300 px-2 py-1 text-white cursor-pointer w-[100px]"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
