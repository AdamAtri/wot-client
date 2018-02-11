import React from 'react';

export default ({title, exercises}) => (
  <div>
    <h2>{title}</h2>
    <ul> { exercises.map(
      (exc) => <li key={exc.id}>{exc.name}</li>
    )} </ul>
  </div>
)
