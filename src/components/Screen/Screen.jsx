import Header from "../Header";

const Screen = ({ title, children, arrowBack = false, ...attr }) => {
  return (
    <main className="bg-gray-50" {...attr}>
      <Header name={title} arrowBack={arrowBack} />
      {children}
    </main>
  );
};

export default Screen;
