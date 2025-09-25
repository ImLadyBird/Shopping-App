import Nav from "../Shared/Nav";
import {
  Button,
  ErrorSpan,
  Input,
  Linko,
  SignUpContainer,
  SignUPForm,
  SignUpPage,
  Span,
  Title,
} from "./SignIn.styled";
import imagesignup from "../../images/Group 2015.png";
import { useForm } from "react-hook-form";
import { useSignIn } from "../../mutations/useSignIn";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const forSchema = z.object({
  email: z.email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export default function SignIn() {

  const {mutate: signin} = useSignIn()
  const {register, handleSubmit,reset,formState: { errors }} = useForm({ resolver: zodResolver(forSchema) });
  const navigate = useNavigate()

  const onSubmit = ({email, password}) => {
    signin({identifier: email, password}, {
      onSuccess(res) {
        reset();
        localStorage.setItem('token', res.data.jwt)
        navigate("/cart")
      }
    })
  };




  return (
    <SignUpPage>
      <Nav />
      <SignUpContainer>
        <Title>
          <h1>Sign In</h1>
          <img src={imagesignup} alt="image" />
        </Title>
        <SignUPForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Email</label>
          <Input
            type="text"
            {...register("email", { required: "Email is required" })}
            error={errors.email?.message}
          />
          <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          <label htmlFor="">Password</label>
          <Input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />
          <ErrorSpan>{errors?.password?.message}</ErrorSpan>
          <Button>Sign In</Button>
          <Span>
           Do not an account? <Linko href="/">Sign Up</Linko>
          </Span>
        </SignUPForm>
      </SignUpContainer>
    </SignUpPage>
  );
}
