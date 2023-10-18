import { Component } from 'react';
import { Button, Form, Input, Div, Svg } from './Searchbar.styled';
// import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSearch(evt.target.search.value);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Div>
          <Input type="text" name="search" placeholder='Search' />
          <Button>
            <Svg />
          </Button>
        </Div>
      </Form>
    );
  }
}
