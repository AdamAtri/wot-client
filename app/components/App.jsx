import React from 'react';
import Exercises from './Exercises';
import uuid from 'uuid4';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          id: uuid(),
          name: 'squat',
          description: 'Lorem ipsum...',
          type: 'strength',
          tags: 'strength-training legs back hips',
          url: 'https://youtu.be/R2dMsNhN3DE',
        },
        {
          id: uuid(),
          name: 'bench press',
          description: 'Lorem ipsum...',
          type: 'strength',
          tags: 'strength-training chest arms',
          url: 'https://youtu.be/tuwHzzPdaGc',
        },
        {
          id: uuid(),
          name: 'berpies',
          description: 'Lorem ipsum...',
          type: 'hiit',
          tags: 'high-intensity hiit legs full-body',
          url: '',
        }
      ]
    }
  }

  render() {
    const { exercises } = this.state;
    return (<section>
      <button onClick={ this.addNote }>Add</button>
      <Exercises title={'Strength'} exercises={exercises.filter(exr => exr.type === 'strength')}/>
      <Exercises title={'High Intensity (HIIT)'} exercises={exercises.filter(exr => exr.type === 'hiit')}/>
    </section>);
  }

  addNote = () => {
    this.setState({
      exercises: this.state.exercises.concat([{
        id: uuid(),
        name: 'new exercise',
        description: 'Lorem ipsum...',
        type: 'hiit',
        tags: 'high-intensity hiit legs full-body',
        url: '',
      }])
    });
  }
}


export default App;
