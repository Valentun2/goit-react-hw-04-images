import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List, Item } from './ImageGallery.styled';

export const ImageGallery = ({ arr }) => {
  return (
    <List>
      {arr.map(item => {
        console.log(item);
        return (
          <Item key={item.id}>
            <ImageGalleryItem
              src={item.webformatURL}
              srcModal={item.largeImageURL}
            />
          </Item>
        );
      })}
    </List>
  );
};
