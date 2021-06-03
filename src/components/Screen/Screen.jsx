import Header from "../Header";

const Screen = ({ title, children, arrowBack = false, ...attr }) => {
  return (
    <>
      <Header name={title} arrowBack={arrowBack} />
      <main className="bg-gray-50 w-screen" {...attr}>
        {children}
      </main>
    </>
  );
};

export default Screen;
