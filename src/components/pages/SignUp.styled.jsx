import styled from "styled-components";

export const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f9f9f9;
`;

export const SignUpContainer = styled.div`
  margin: 30px auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  gap: 20px;
  font-family: sans-serif;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 20px;
  justify-content: space-between;
`;

export const SignUPForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 32px;
  background: #fff;
  gap: 10px;
  font-family: sans-serif;
  margin: clamp(1rem, 3vw, 2rem) auto;
  font-size: 0.8rem;
  width: clamp(300px, 50vw, 400px);
  font-weight: 200;
`;

export const Input = styled.input`
  padding: 9px;
  background-color: #fff6f4;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin: 5px;
  outline: none;
`;
export const Button = styled.button`
  padding: 9px 20px;
  cursor: pointer;
  width: fit-content;
  align-self: center;
  background-color: #f47458;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  margin: 5px;
  color: white;
`;
export const Span = styled.span`
  color: #a1a1a1;
  font-size: 1rem;
  align-self: center;
`;
export const Linko = styled.a`
  text-decoration: none;
  color: #f47458;
`;
export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.7rem;
`;