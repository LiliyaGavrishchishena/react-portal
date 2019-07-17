import React, { Component } from 'react';
import shortid from 'shortid';
//components
import PortalsList from './PortalsList';
import withPortal from '../hoc/withPortal';

// styles
import styles from './App.module.css';

export default class App extends Component {
  state = {
    portalsList: [],
    text: ''
  };
  textInputId = shortid.generate();

  textInput = React.createRef();

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onClick = () => {
    this.setState(state => ({
      portalsList: [...state.portalsList, state.text],
      text: ''
    }));
    this.textInput.current.focus();
  };

  render() {
    const { text, portalsList } = this.state;
    const portal = document.getElementById('portal');

    return (
      <div>
        <h1 className={styles.header}>Alerts App</h1>
        <form className={styles.form}>
          <label htmlFor={this.textInputId}>
            <input
              className={styles.input}
              type="text"
              name="text"
              value={text}
              id={this.textInputId}
              placeholder="Enter allert text"
              onChange={this.onChange}
              ref={this.textInput}
            />
          </label>
          <button
            type="submit"
            onClick={this.onClick}
            disabled={!text}
            className={styles.button}
          >
            Alert
          </button>
        </form>
        {withPortal(portal)(<PortalsList portalsList={portalsList} />)}
      </div>
    );
  }
}
