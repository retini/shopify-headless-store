function Layout({children}) {
  return (
    <div className="layout">
      <div className="logo">
        <span>Headless</span>
        <img src="office-chair.png" alt="" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
