import Header from "../Header";

const Screen = ({ title = "", children, arrowBack = false, ...attr }) => {
  return (
    <>
      <Header name={title} arrowBack={arrowBack} />
      <main className="w-screen h-full mt-2" {...attr}>
        {children}
      </main>
    </>
  );
};

export default Screen;
