import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const Loading = () => {
  return (
    <div className="fixed text-center w-screen h-screen top-0 left-0 right-0 bottom-0 z-100 cursor-pointer bg-black opacity-50">
      <Spinner className="fixed top-1/2 left-1/2 animate-spin" />
    </div>
  );
};

export default Loading;
