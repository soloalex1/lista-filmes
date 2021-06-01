import Header from "../Header";

const Screen = ({ title, children, ...attr }) => {
  return (
    <main className="bg-gray-50" {...attr}>
      <Header name={title} />
      {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>

      </div> */}
      {children}
    </main>
  );
};

export default Screen;
