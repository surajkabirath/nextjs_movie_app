import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
       
          <Image
            layout="responsive"
            src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`}
            height={300}
            width={500}
            className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
            alt="poster"
          ></Image>
          <div className="p-2">
            <h2 className="truncate text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-slate-400 group-hover:text-slate-500">
              {result.title || result.name}
            </h2>
            <p className="truncate text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-400 group-hover:text-slate-500">
              {result.overview}
            </p>
            <p className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-400 group-hover:text-slate-500">
              <FiThumbsUp className="mr-1" />
              {result.vote_count}
            </p>
          </div>
     

      </Link>
    
   
    </div>
  );
};

export default Card;
