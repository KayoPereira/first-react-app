import React, { Component } from 'react';
import NoteCard from './NoteCard/NoteCard';

export class NoteList extends Component {
  render(){
    return(
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categories, index) => {
          return (
            <li key={index}>
              <div>{categories}</div>
              <NoteCard/>
            </li>
          )
        })}
      </ul>
    )
  }
}
