import { Component } from 'react';
import { BtnLoadMore } from './ButtonLoadMore.styled';

class ButtonLoadMore extends Component {
  onClick = () => {
    this.props.onloadMore();
  };

  render() {
    return <BtnLoadMore onClick={this.onClick}>load more</BtnLoadMore>;
  }
}

export default ButtonLoadMore;
