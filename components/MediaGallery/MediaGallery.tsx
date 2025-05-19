import MediaCard from "./MediaCard";
import { mockMedia, mockMedia1, mockMedia2 } from "@/data/dummyData";

const MediaGallery = () => {
  return (
    <section className="container m-auto">
      <div className="">
        <h2 className="text-2xl font-bold mb-4">
          🔥 What Everyone&apos;s Watching Right Now!
        </h2>

        <div
          className="grid my-3 p-3 gap-3 justify-center place-items-center
  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <MediaCard
            poster={mockMedia.Poster}
            title={mockMedia.Title}
            year={mockMedia.Year}
            genre={mockMedia.Genre}
            runtime={mockMedia.Runtime}
            imdbRating={mockMedia.imdbRating}
          />
          <MediaCard
            poster={mockMedia1.Poster}
            title={mockMedia1.Title}
            year={mockMedia1.Year}
            genre={mockMedia1.Genre}
            runtime={mockMedia1.Runtime}
            imdbRating={mockMedia1.imdbRating}
          />
          <MediaCard
            poster={mockMedia2.Poster}
            title={mockMedia2.Title}
            year={mockMedia2.Year}
            genre={mockMedia2.Genre}
            runtime={mockMedia2.Runtime}
            imdbRating={mockMedia2.imdbRating}
          />
          <MediaCard
            poster={mockMedia.Poster}
            title={mockMedia.Title}
            year={mockMedia.Year}
            genre={mockMedia.Genre}
            runtime={mockMedia.Runtime}
            imdbRating={mockMedia.imdbRating}
          />
          <MediaCard
            poster={mockMedia1.Poster}
            title={mockMedia1.Title}
            year={mockMedia1.Year}
            genre={mockMedia1.Genre}
            runtime={mockMedia1.Runtime}
            imdbRating={mockMedia1.imdbRating}
          />
          <MediaCard
            poster={mockMedia.Poster}
            title={mockMedia.Title}
            year={mockMedia.Year}
            genre={mockMedia.Genre}
            runtime={mockMedia.Runtime}
            imdbRating={mockMedia.imdbRating}
          />
          <MediaCard
            poster={mockMedia1.Poster}
            title={mockMedia1.Title}
            year={mockMedia1.Year}
            genre={mockMedia1.Genre}
            runtime={mockMedia1.Runtime}
            imdbRating={mockMedia1.imdbRating}
          />
          <MediaCard
            poster={mockMedia.Poster}
            title={mockMedia.Title}
            year={mockMedia.Year}
            genre={mockMedia.Genre}
            runtime={mockMedia.Runtime}
            imdbRating={mockMedia.imdbRating}
          />
          <MediaCard
            poster={mockMedia1.Poster}
            title={mockMedia1.Title}
            year={mockMedia1.Year}
            genre={mockMedia1.Genre}
            runtime={mockMedia1.Runtime}
            imdbRating={mockMedia1.imdbRating}
          />
          <MediaCard
            poster={mockMedia.Poster}
            title={mockMedia.Title}
            year={mockMedia.Year}
            genre={mockMedia.Genre}
            runtime={mockMedia.Runtime}
            imdbRating={mockMedia.imdbRating}
          />
        </div>
      </div>
    </section>
  );
};
export default MediaGallery;
