import { openPopupWidget } from 'react-calendly';
import Button from './Button';

const BookingOption = ({ option }) => {
  const { url, text } = option;

  if (!url) return null;

  const openPopup = () => {
    openPopupWidget({ url });
  };

  const handleUrl = () => {
    if (url.includes('calendly')) {
      openPopup();
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Button
      onClick={() => handleUrl()}
      message={text}
    />
  );
};

export default BookingOption;
