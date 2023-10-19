import {  useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import { getPhoto } from './api';
import { Container } from './Conteiner.styled';
import { Watch } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
 
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [visibleButton, setVisibleButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = value => {
    if (value === query) {
      return;
    }
    setPhoto([]);
    setQuery(value);
    setPage(1);
    setVisibleButton(false);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };


  useEffect(() => {
    async function getPhotoApi() {
      if (query === '') {
        return;
      }
      setLoading(true);
      setVisibleButton(false);
      try {
        const arrPictues = await getPhoto(query, page);
        setPhoto(prev=>[...prev, ...arrPictues.hits]);
        if (arrPictues.totalHits / 12 > page) {
          setVisibleButton(true);
        } else {
          setVisibleButton(false);
        }
      } catch (error) {
        toast.error('Error,try later');
      } finally {
        setLoading(false);
      }
    }
    getPhotoApi();
  }, [query, page]);

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <Container>
        {photo.length > 0 && <ImageGallery arr={photo} />}
        <Watch visible={loading} />
        {visibleButton && <ButtonLoadMore onloadMore={handleLoadMore} />}
        <Toaster />
      </Container>
    </>
  );
};
