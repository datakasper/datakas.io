import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
      <nav><div>Datakas</div><div>Capabilities · Tools · About · Contact</div></nav>
      <section className="hero">
        <h1>Reliable Data Platforms</h1>
        <h2>Built with state-of-the-art tooling</h2>
        <p>We build reliable, scalable data platforms that help organizations turn data into trusted business assets.</p>
        <a href="mailto:contact@datakas.io">contact@datakas.io</a>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
