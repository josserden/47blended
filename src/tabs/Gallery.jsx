import { Component } from 'react';

import * as ImageService from 'service/image-service';
import {
  Button,
  SearchForm,
  Grid,
  GridItem,
  Text,
  CardItem,
  Modal,
} from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isVisible: false,
    error: null,
    isLoading: false,
    isOpen: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      ImageService.getImages(query, page)
        .then(data => {
          console.log(data.total_results);
          this.setState(prevState => ({
            images: [...prevState.images, ...data.photos],
            page: data.page,
            isVisible:
              data.page < Math.ceil(data.total_results / data.per_page),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleClick = () => {
    console.log('click');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = data => {
    this.setState({
      images: [],
      query: data,
      page: 1,
    });
  };

  openModal = modalImage => {
    console.log(modalImage);

    this.setState({
      isOpen: true,
      modalImage: modalImage,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { images, isVisible, error, isLoading, isOpen, modalImage } =
      this.state;

    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />

        {images.length === 0 && !error && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}

        {error && (
          <Text textAlign="center">❌ Something went wrong - {error}</Text>
        )}

        <Grid>
          {images.map(({ id, avg_color, alt, src }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img
                  src={src.large}
                  alt={alt}
                  onClick={() => this.openModal(src.large)}
                />
              </CardItem>
            </GridItem>
          ))}
        </Grid>

        {isVisible && (
          <Button disabled={isLoading} onClick={this.handleClick}>
            {isLoading ? 'loading ...' : 'Load More'}
          </Button>
        )}

        {isOpen && (
          <Modal onClose={this.closeModal}>
            <img src={modalImage} alt="modal img" />
          </Modal>
        )}
      </>
    );
  }
}
