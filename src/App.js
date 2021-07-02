import './App.css';
import Header from './components/header/Header';
import Container from './components/Container';
import Filter from './components/filter/Filter';
import Content from './components/content/Content';

function App() {
  const storeData = [
    {
      img: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',
      name: 'cool t-shirt',
      price: 30.21,
      size: 'XXL',
      color: 'red',
    },
    {
      img: 'https://www.artofbrilliance.co.uk/wp-content/uploads/2019/02/happy-lightblue.jpg',

      name: 'amazing t-shirt',
      price: 32.21,
      size: 'S',
      color: 'Bkack',
    },
    {
      img: 'https://www.asket.com/imgproxy/e:1/width:1250/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_ffcaa89dfe-asket_tee_dark_navy_slide_01-original.jpg',

      name: 'WOW dress',
      price: 39.21,
      size: 'XXL',
      color: 'red',
    },
    {
      img: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',

      name: 'My bipolar ass tell me to buy/notbuy t-shirt',
      price: 100.21,
      size: 'M',
      color: 'red',
    },
    {
      img: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',

      name: 'sunrise t-shirt',
      price: 12.21,
      size: 'S',
      color: 'Green',
    },
    {
      img: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',

      name: 'Sunset t-shirt',
      price: 30.21,
      size: 'XXL',
      color: 'red',
    },
    {
      img: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',

      name: 'Big t-shirt',
      price: 30.21,
      size: 'XXL',
      color: 'red',
    },
    {
      img: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',

      name: 'Small t-shirt',
      price: 30.21,
      size: 'XXL',
      color: 'red',
    },
  ];

  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Filter></Filter> <Content storeData={storeData}></Content>
      </Container>
    </div>
  );
}

export default App;
