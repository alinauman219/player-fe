function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1" ><a href="/">Socka Players</a></span>
        <a className="float-right" href="/add" title="Add a New Player">Add a Player</a>
    </nav>
  );
}

export default NavBar;
