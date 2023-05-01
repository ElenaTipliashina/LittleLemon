import React from 'react';
import mainfood from './mainfood.jpg';
import greeksalad from './greeksalad.jpg';

function Main() {
  return (
    <main>
      <section>
        <h2>Section 1</h2>
        <p>Some text goes here.</p>
        <button>Click me</button>
        <img src={mainfood} alt="Image 1" />
      </section>
      <section>
        <h2>Section 2</h2>
        <p>Some more text goes here.</p>
        <img src={greeksalad} alt="Image 2" />
      </section>
    </main>
  );
}

export default Main;