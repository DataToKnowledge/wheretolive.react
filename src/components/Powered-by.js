import React from 'react';
import packageJSON from '../../package.json';
import { Api } from '../services/api';

const api = new Api();

export default React.createClass({

  getInitialState() {
    return {
      public_repos: 0,
    };
  },

  componentWillMount() {
    api.github().then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({
        public_repos: json.public_repos,
      });
    });
  },

  render() {
    const deps = Object.keys(packageJSON.dependencies).map((dep, i) => <li key={i}>{dep}</li>);
    const devDeps = Object.keys(packageJSON.devDependencies).map((dep, i) => <li key={i + 10}>{dep}</li>);
    return (
      <div>
        <p>UniCredit on GitHub has {this.state.public_repos} public repos.</p>
        <hr/>
        <div>
          <h2>Powered by</h2>
          <ul>
            {[...deps]}
          </ul>
          <ul>
            {[...devDeps]}
          </ul>
        </div>
      </div>
    );
  },
});
