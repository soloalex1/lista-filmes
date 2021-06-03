import Header from "../Header";

const Screen = ({ title, children, arrowBack = false, ...attr }) => {
  return (
    <>
      <Header name={title} arrowBack={arrowBack} />
      <main
        className="bg-gray-50 container my-12 mx-auto px-4 md:px-12"
        {...attr}
      >
        {children}
      </main>
    </>
  );
};

export default Screen;
