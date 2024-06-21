import Link from "next/link";
import { SpaceToBr } from "./SpaceToBr";

export const RoutButton = (props: Props) => {
  return (
    <button className="text-4xl text-left pl-10 m-2 text-[#E7E9EA] w-80 hover:bg-[#181818] rounded-full //bg-blue-100">
      <Link href={props.path}>
        <SpaceToBr text={props.text} />
      </Link>
    </button>
  );
};

interface Props {
  path: string;
  text: string;
}
