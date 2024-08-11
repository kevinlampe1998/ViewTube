import { useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";

const Layout = () => {
  const searchGoBack = useRef();
  const searchInput = useRef();
  const searchSection = useRef();
  const sideBar = useRef();

  const openSearchInput = () => {

    window.innerWidth < 650 && (searchGoBack.current.className = "arrow-left-open");
    window.innerWidth < 650 && (searchInput.current.className = "search-input-open");
    window.innerWidth < 650 && (searchSection.current.className = "search-section-open");

  };

  const closeSearchInput = () => {

    searchGoBack.current.className = "arrow-left";
    searchInput.current.className = "search-input";
    searchSection.current.className = "search-section";

  };

  const openSideBar = () => {
    sideBar.current.style.left = "0";
  };

  return (
    <div className="website">
      <div className="sidebar" ref={sideBar}>
        <SideBar sideBar={sideBar} />
      </div>
      <div className="right-side">
        <nav className="primary-nav">

          <section>
            <div className="menu-icon">
              <img src="/svg/menu.svg" alt="menu burger icon" onClick={openSideBar}/>
            </div>
            <Link to="/" className="logo">
              <img src="/svg/caret-left.svg" alt="youtube icon but the arrow it to the left" />
            </Link>
            <div className="view-tube">
              <h1>ViewTube</h1>
              <div>DE</div>
            </div>
          </section>

          <section className="search-section" ref={searchSection}>
            <div onClick={closeSearchInput} >
              <img src="/svg/arrow-left.svg" alt="back arrow left" className="arrow-left" ref={searchGoBack} />
            </div>
            <div>
              <input type="text" className="search-input" ref={searchInput} placeholder="Search"/>
            </div>
            <Link to="/">
              <img src="/svg/search.svg" alt="search icon" onClick={openSearchInput} className="search-icon"/>
              <p>Search</p>
            </Link>
            <Link to="/">
              <img src="/svg/mic.svg" alt="mic icon for search" className="mic-icon"/>
              <p>Search with your voice</p>
            </Link>
          </section>

          <section>
            <Link to="/">
              <img src="/svg/video-plus.svg" alt="video plus icon" />
              <p>Create</p>
            </Link>
            <Link to="/">
              <img src="/svg/bell.svg" alt="bell icon" />
              <p>Notifications</p>
            </Link>
            <Link to="/" className="user-icon">
              <div>K</div>
            </Link>
          </section>

        </nav>
        <main>
            <SecondaryNav />
            <Home />
        </main>
      </div>
    </div>
  );
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
