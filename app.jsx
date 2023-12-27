const App = () => {
    return (
      <>
      <div className="main">
              {/* LOGO */}
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>

        {/* NAV */}
        <nav>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>
        </nav>

        <header>
          <h1>Header image</h1>
        </header>

        <div className="container">
          <div className="info">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odit eos expedita, amet provident quae distinctio dicta, commodi aperiam aut accusamus repudiandae sunt! Nihil, laborum aliquam eum commodi voluptas magnam.
            </p>
          </div>
          <div className="info"><h1>Company</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odit eos expedita, amet provident quae distinctio dicta, commodi aperiam aut accusamus repudiandae sunt! Nihil, laborum aliquam eum commodi voluptas magnam.</p></div>
          <div className="info"><h1>Services</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odit eos expedita, amet provident quae distinctio dicta, commodi aperiam aut accusamus repudiandae sunt! Nihil, laborum aliquam eum commodi voluptas magnam.</p></div>
        </div>

        <footer>
          <main>
            <h1>Content</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a tempore quas dolore cupiditate assumenda nam iure cum non labore, eligendi facilis, consectetur laboriosam, quisquam laborum fugit tempora asperiores exercitationem!</p>
            <h1>Sub header</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a tempore quas dolore cupiditate assumenda nam iure cum non labore, eligendi facilis, consectetur laboriosam, quisquam laborum fugit tempora asperiores exercitationem!</p>
          </main>
          <div className="nav">
            <h1>Navigation</h1>
            <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Company</li>
            <li>Contact</li>
            </ul>
          </div>
        </footer>
      </div>
      </>
    );
  };

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);