import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
// import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(elementFound, item.id);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐⭐⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button className="btn-add-bag">Add to Bag</button> */}

      {elementFound ? (
        <button type="button" className="btn btn-danger btn-add-bag"
        onClick={handleRemove}
        >
          <MdDelete className="removeBag" />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          {/* <IoAddCircleOutline /> */}
          <PiHandbagFill className="addBag" />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
