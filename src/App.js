import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Navbar">
          <div className="Navbar-logo">Cookie Co.</div>
          <ul className="Navbar-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="Hero">
          <h1>Welcome to Cookie Co.</h1>
          <p>The best cookies in town.</p>
          <button>Order Now</button>
        </div>
      </header>
      <main>
        <section id="products" className="Products">
          <h2>Our Products</h2>
          <div className="Product-grid">
            <div className="Product-card">
              <h3>Chocolate Chip</h3>
              <p>A classic for a reason.</p>
            </div>
            <div className="Product-card">
              <h3>Oatmeal Raisin</h3>
              <p>Chewy and delicious.</p>
            </div>
            <div className="Product-card">
              <h3>Sugar Cookie</h3>
              <p>Sweet and simple.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="Contact">
          <h2>Contact Us</h2>
          <p>Have a question? We'd love to hear from you.</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer className="Footer">
        <p>&copy; 2025 Cookie Co.</p>
      </footer>
    </div>
  );
}

export default App;
