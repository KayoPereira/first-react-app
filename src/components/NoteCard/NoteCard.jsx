import React, { Component } from 'react';
import "./style.css";

class NoteCard extends Component {
  render() {
    return (
      <section className="note-card">
        <header>
          <h3>Título</h3>
        </header>
        <p>Escreva sua nota</p>
      </section>
     );
  }
}

export default NoteCard;
