import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import { getPhoto } from './api';
import { Container } from './Conteiner.styled';
import { Watch } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    arrPhoto: [],
    query: '',
    page: 1,
    visibleButton: false,
    loading: false,
  };

  handleSearch = value => {
    if (value === this.state.query) {
      return;
    }
    this.setState({
      arrPhoto: [],
      query: value,
      page: 1,
      visibleButton: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, visibleButton: false });
      try {
        const arrPictues = await getPhoto(this.state.query, this.state.page);
        this.setState(prevState => ({
          arrPhoto: [...prevState.arrPhoto, ...arrPictues.hits],
        }));
        if (arrPictues.totalHits / 12 > this.state.page) {
          this.setState({ visibleButton: true });
        } else {
          this.setState({ visibleButton: false });
        }
      } catch (error) {
        toast.error('Error,try later');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        <Container>
          {this.state.arrPhoto.length > 0 && (
            <ImageGallery arr={this.state.arrPhoto} />
          )}
          <Watch visible={this.state.loading} />
          {this.state.visibleButton && (
            <ButtonLoadMore onloadMore={this.handleLoadMore} />
          )}
          <Toaster />
        </Container>
      </>
    );
  }
}
