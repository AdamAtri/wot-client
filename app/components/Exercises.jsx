import React from 'react';
import Exercise from './Exercise';

export default ({title, exercises}) => (
  <div>
    <h2>{title}</h2>
    <ul> { exercises.map(
      (exc) => <li key={exc.id}><Exercise exercise={exc}/></li>
    )} </ul>
  </div>
)
