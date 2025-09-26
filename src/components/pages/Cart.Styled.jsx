import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  margin: 20px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  height: 100vh;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border: 0.2px solid #63636359;
  border-radius: 5px;
  justify-content: space-between;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.05);
`;

export const CartItemImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
`;

export const TrashButton = styled.button`
  background-color: #f47458;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #f47458;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  margin: 5px;
  color: white;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.img`
  width: 100px;
`;
