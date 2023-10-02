import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';

import './App.css';

const site = {
  site_name: 'react test',
  site_title: 'my first site with react',
  nav: [
    { link: 'nav1', text: 'my link' },
    { link: 'nav2', text: 'my link 2' },
    { link: 'nav3', text: 'my link 3' },
  ],
};

function App() {
  return (
    <>
      <Header site={site} />
      <div className="container">
      <Nav nav={site.nav} />
      <Main />
      </div>

    </>
  );
}

export default App;
