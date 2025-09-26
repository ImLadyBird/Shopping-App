import { useEffect, useReducer } from "react";
import Nav from "../Shared/Nav";
import { useGetProducts } from "../../queries/useGetProducts";
import {
  Button,
  ButtonContainer,
  CartContainer,
  CartItem,
  CartItemImg,
  Loading,
  LoadingContainer,
  Title,
  TrashButton,
} from "./Cart.Styled";
import loadingimg from "../../images/loading.svg";

const actions = {
  SET_PRODUCTS: "SET_PRODUCTS",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ALL: "REMOVE_ALL",
};

const initialState = {
  products: [],
};

function reducer(prevState, action) {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return { ...prevState, products: action.payload };
    case actions.REMOVE_ITEM: {
      const products = prevState.products.filter(
        (product) => product.id !== action.payload
      );
      return { ...prevState, products };
    }
    case actions.REMOVE_ALL:
      return { ...prevState, products: [] };
    default:
      return prevState;
  }
}

export default function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data: products, isLoading } = useGetProducts();

  useEffect(() => {
    if (products?.data) {
      dispatch({ type: actions.SET_PRODUCTS, payload: products.data });
    }
  }, [products?.data]);

  if (isLoading) {
    return (
      <LoadingContainer>
        {" "}
        <Loading src={loadingimg} alt="loading" />{" "}
      </LoadingContainer>
    );
  }

  function removeItem(id) {
    dispatch({ type: actions.REMOVE_ITEM, payload: id });
  }

  function removeAll() {
    dispatch({ type: actions.REMOVE_ALL });
  }

  return (
    <>
      <Nav count={state.products.length} />
      <Title>Products</Title>
      <CartContainer>
        {state.products.map(({ id, attributes }) => {
          const { title, price, image } = attributes;
          return (
            <CartItem key={id}>
              <CartItemImg src={image} alt={title} />
              <h3>{title}</h3>
              <p>{price}$</p>
              <TrashButton onClick={() => removeItem(id)}>Delete</TrashButton>
            </CartItem>
          );
        })}
        <ButtonContainer>
          <Button onClick={removeAll}>Remove All</Button>
          <Button
            onClick={() => {
              if (products?.data) {
                dispatch({
                  type: actions.SET_PRODUCTS,
                  payload: products.data,
                });
              }
            }}
          >
            Add All
          </Button>
        </ButtonContainer>
      </CartContainer>
    </>
  );
}
