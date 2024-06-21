export const PhotoUploadButton = (props: Props) => {
  return (
    <button
      className={`text-2xl text-center w-40 rounded-full ${buttonStyle(
        props.isActive
      )}`}
      disabled={props.isActive}
    >
      Upload
    </button>
  );
};

const buttonStyle = (isActive: boolean) => {
  return isActive
    ? "text-[#E7E9EA] bg-[#1D9BF0]"
    : "text-[#747A7F] bg-[#0F4E78]";
};

interface Props {
  isActive: boolean;
}
