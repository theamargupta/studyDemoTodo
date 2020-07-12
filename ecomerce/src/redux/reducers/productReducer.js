//=> state declare
const initalState = {
  product: [],
};
//=> reducer
export default (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add_product':
      return { product: [...state.product, payload] };
    default:
      return state;
  }
};
