import React, { Component } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup'
import ButtonToolbar from './ButtonToolbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h1>Button</h1>
          <p><Button>all</Button></p>
          <p><Button roundness='none'>none</Button></p>
          <p><Button roundness='left'>left</Button></p>
          <p><Button roundness='right'>right</Button></p>
        </section>

        <section>
          <h1>ButtonGroup</h1>
          <ButtonGroup>
            <Button>left</Button>
            <Button>middle</Button>
            <Button>right</Button>
          </ButtonGroup>
        </section>

        <section>
          <h1>ButtonToolbar</h1>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </section>
      </div>
    );
  }
}

export default App;
