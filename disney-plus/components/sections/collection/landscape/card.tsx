import Image from "next/image";
import Link from "next/link";
import humanizeRuntime from "../../../../helpers/humanize-runtime";
import api from "../../../../library/api";
import type { Media } from "../../../../types";

type Props = {
  media: Media;
  isOnlyGrid: boolean;
};

const Card = async ({ media, isOnlyGrid }: Props) => {
  const type = media.type!;
  const id = media.id;
  const measure = await api.get.media.measure({ type, id });

  return (
    <>
      <li className={`${isOnlyGrid ? "hidden" : "tablet:hidden"} `}>
        <Link
          href={`/${media.type}/${media.id}`}
          className="group flex items-center gap-2">
          <div className="relative aspect-video w-28 flex-none overflow-hidden rounded">
            <div className="absolute inset-0 animate-pulse bg-card-dark" />
            <Image
              src={`https://image.tmdb.org/t/p/w500${media.image.backdrop!}`}
              alt={media.title!}
              fill
              sizes="500px"
              className="transition-smooth object-cover group-hover:brightness-[130%]"
            />
          </div>
          <div>
            <p className="text-xs font-semibold">{media.title}</p>
            <small className="text-ms font-semibold text-gray-500 tablet:text-xs">
              {media.releasedAt?.slice(0, 4)
                ? media.releasedAt?.slice(0, 4)
                : "New"}{" "}
              •{" "}
              {type === "movies"
                ? humanizeRuntime(measure)
                : `${measure} Seasons`}
            </small>
          </div>
        </Link>
      </li>
      <li className={`${isOnlyGrid ? "" : "hidden"} tablet:block`}>
        <Link href={`/${media.type}/${media.id}`} className="space-y-2">
          <div className="group relative aspect-video overflow-hidden rounded">
            <div className="absolute inset-0 animate-pulse bg-card-dark" />
            <Image
              src={`https://image.tmdb.org/t/p/w500${media.image.backdrop!}`}
              alt={media.title!}
              fill
              sizes="500px"
              className="transition-smooth object-cover group-hover:brightness-[130%]"
            />
          </div>
          <div className="relative z-10 pr-4 pb-2">
            <p className="text-xs font-semibold tablet:text-base">
              {media.title}
            </p>
            <small className="text-ms font-semibold text-gray-500 tablet:text-xs">
              {media.releasedAt?.slice(0, 4)
                ? media.releasedAt?.slice(0, 4)
                : "New"}{" "}
              •{" "}
              {type === "movies"
                ? humanizeRuntime(measure)
                : `${measure} Seasons`}
            </small>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Card;
