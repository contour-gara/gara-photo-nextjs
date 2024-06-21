export const PhotoSelectdButton = (props: Props) => {
  return (
    <button
      className="text-2xl text-center text-[#E7E9EA] w-40 bg-[#1D9BF0] rounded-full"
      onClick={props.onClick}
    >
      Photo Select
    </button>
  );
};

interface Props {
  onClick;
}
