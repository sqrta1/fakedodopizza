import cola from './colalogo.jpg';

import './StoriesItem.css';

function StoriesItem({className,}) {
  return (
    <div className="storiesitem">
      <img src={cola} className="storiesitem-img"></img>
    </div>
  );
}

export default StoriesItem;
