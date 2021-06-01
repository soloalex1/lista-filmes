const Header = ({ name, ...attr }) => {
  return (
    <header className="flex bg-green-300 h-16" {...attr}>
      <nav>
        <input type="text" role="search" />
      </nav>
    </header>
  );
};

export default Header;
