import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ItemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FatchItems = () => {
  const fetchStetus = useSelector((store) => store.fetchStetus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStetus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFnished());
        dispatch(ItemsActions.addInitailItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStetus]);

  return <></>;
};

export default FatchItems;
