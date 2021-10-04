import cola from './colalogo.jpg';

import './StoriesItem.css';

function StoriesItem() {
  return (
    <div className="storiesitem">
      <img src={cola} className="storiesitem-img"></img>
    </div>
  );
}

export default StoriesItem;
