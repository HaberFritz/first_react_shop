import Navbar from './Navbar';
import './style/header.css';
function header() {
  return (
    <div className="header">
      <div className="container">
        <div className="flex-row">
          <a href="#">Awesome shop for bipolars</a>
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
}

export default header;
