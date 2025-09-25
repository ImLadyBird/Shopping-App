import Nav from "../Shared/Nav";
import imagesignup from "../../images/Group 2015.png";
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
} from "./SignUp.styled";
import { useForm } from "react-hook-form";
import useSignUp from "../../mutations/useSignUp";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const forSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be at most 20 characters" }),
  email: z.email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forSchema) });
  const { mutate : signUp } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signUp(data, {
      onSuccess() {
        reset();
        toast.success("Sign Up Successful");
        navigate("/signin");
      },
    });
  };

  return (
    <SignUpPage>
      <Nav />
      <SignUpContainer>
        <Title>
          <h1>Sign Up</h1>
          <img src={imagesignup} alt="image" />
        </Title>
        <SignUPForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Username</label>
          <Input
            type="text"
            {...register("username", { required: "Username is required" })}
            error={errors.username?.message}
          />
          <ErrorSpan>{errors?.username?.message}</ErrorSpan>
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
          <Button>Sign Up</Button>
          <Span>
            Already have an account? <Linko href="/signin">Sign In</Linko>
          </Span>
        </SignUPForm>
      </SignUpContainer>
    </SignUpPage>
  );
}
