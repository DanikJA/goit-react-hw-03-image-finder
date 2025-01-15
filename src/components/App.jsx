import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

// import Modal from 'react-modal';

const API_KEY = '47324612-8ceed49284fd3133cd5b6cb67';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
  };

  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
    this.fetchImages(query, 1);
  };

  handleLoadMore = () => {
    const { page, query } = this.state;
    const nextPage = page + 1;
    this.setState({ page: nextPage });
    this.fetchImages(query, nextPage);
  };

  fetchImages = async (query, page) => {
    this.setState({ loading: true });
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          q: query,
          page: page,
          key: API_KEY,
          orientation: 'horizontal',
          image_type: 'photo',
          per_page: 12,
        },
      });
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        loading: false,
      }));
    } catch (error) {
      console.error('Error fetching images', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit}></Searchbar>
        {loading && <Loader />}
        <ImageGallery images={this.state.images}></ImageGallery>
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
