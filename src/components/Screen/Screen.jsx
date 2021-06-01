import Header from "../Header";

const Screen = ({ title, children, ...attr }) => {
  return (
    <main className="bg-gray-50" {...attr}>
      <Header name={title} />

      {children}
    </main>
  );
};

export default Screen;
