import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

type Props = {
  urlG: string,
  urlL?: string,
}

export default function Link({urlG, urlL}: Props) {
  return (
    <div className="flex justify-center gap-10">
      <a
        href={urlG}
        target="_blank"
        className="transition transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-500"
      >
        <AiFillGithub size={45} />
      </a>
      <a
        href={urlL}
        target="_blank"
        className={urlL ? "transition transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-500" : "text-gray-500"}
      >
        <LuExternalLink size={45} />
      </a>
    </div>
  );
}
