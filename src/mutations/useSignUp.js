import { client } from "../lib/axios";
import { useMutation } from '@tanstack/react-query';

function signup(user) {
  return client.post("/auth/local/register", user);
}

export default function useSignUp() {
 return useMutation({
    mutationKey: ["signup"],
    mutationFn: (user) => signup(user),
  });
}
