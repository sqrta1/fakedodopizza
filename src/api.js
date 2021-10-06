export const fetchItems = () =>
  fetch("api/items")
    .then((r) =>
      r.json().then((r) => {
        if (r.error) {
          throw new Error(r.message);
        }
        return r.result;
      })
    )
    .catch((err) => {
      throw new Error(err.message);
    });
