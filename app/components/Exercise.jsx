import React from 'react';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise:props.exercise
    };
  }

  render() {
    const {exercise, onDelete} = this.props;
    return (
      <div>
        <span>{exercise.name}</span>
        <button onClick={onDelete}>x</button>
      </div>)
  }
}

export default Exercise;
