function Nav({ nav }) {
  const listItem = nav.map((item) => (
    <li key={item.link}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));

  return (
    <>
      <nav>
        <ul>{listItem}</ul>
      </nav>
    </>
  );
}

export default Nav;
