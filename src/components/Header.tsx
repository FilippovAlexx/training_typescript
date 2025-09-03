export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <h1 className="logo">Light React UI</h1>
        <nav className="nav">
          <a className="nav__link" href="#">Главная</a>
          <a className="nav__link" href="#">Компоненты</a>
          <a className="nav__link" href="#">О нас</a>
        </nav>
      </div>
    </header>
  );
}