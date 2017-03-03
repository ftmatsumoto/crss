import React, {PropTypes, Component} from 'react';
import svglogo from '../asset/crossfitki_marker.svg';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
       <div className="marker-div">
          <img src={svglogo} className="marker-img"/>
       </div>
    );
  }
}