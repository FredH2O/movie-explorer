import Image from "next/image";
import { FormEvent } from "react";

type Props = {
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
};

const MovieDetails = ({ onClick }: Props) => {
  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-95"></div>

      {/* Modal content */}
      <div className="relative z-20 lg:max-w-6xl bg-slate-300 text-black p-6 rounded-lg flex flex-col md:flex-row gap-4 shadow-lg">
        <Image
          src="/images/example-image.webp"
          alt="Example Image"
          width={360}
          height={240}
        />
        <div className="border relative p-3 flex-1">
          <h2 className="text-2xl font-bold">Final Destination Bloodlines</h2>

          <div>
            <p>Year: 2025</p>
            <p>Score: 7.8</p>
            <p>Runtime: 138 min</p>
          </div>

          <div>
            <p>Director: (Director) Ang Lee</p>
            <p>Writer: (Writer) Stan Lee, Jack Kirby, James Schamus</p>
            <p>Actors: (Actors) Eric Bana, Jennifer Connelly, Sam Elliott</p>
          </div>

          <div>
            <p>
              Description: (Plot) Bruce is an ordinary Gamma expert who one day
              gets blasted with radiation and somehow survives. But in the
              process a monster was born. Now whenever he gets angry he grows
              bigger and stronger until he is no longer Bruce Banner. He becomes
              The Hulk
            </p>
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
