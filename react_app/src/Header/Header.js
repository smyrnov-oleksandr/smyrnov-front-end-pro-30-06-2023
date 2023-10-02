function Header({ site }) {
  return (
    <>
      <header>
        <h1>{site.site_name}</h1>
        <h2>{site.site_title}</h2>
      </header>
    </>
  );
}
export default Header;
