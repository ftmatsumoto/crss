import React, { Component } from 'react';
import ResultCard from '../component/resultcard';

class ResultPage extends Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentWillMount() {
    let request = new XMLHttpRequest();
    let currContext = this;
    request.open('GET', `/results?email=${this.context.user.email}`, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        let responseObj = JSON.parse(request.responseText);
        currContext.setState({
          results: this.state.results.concat(responseObj.result)
        });
      }
    };
    request.send();
  }

  render() {
    return (
      <div>
        {this.state.results.map((result, index) => {
          return <ResultCard id={index} key={index} result={result}/>
        })}
      </div>
    );
  }
}

export default ResultPage;
