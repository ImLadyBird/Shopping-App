import { useMutation } from '@tanstack/react-query';
import { client } from '../lib/axios';



const signin = user => client.post('/auth/local', user);

export const useSignIn = () =>
  useMutation({
    mutationKey: ['signin'],
    mutationFn: user => signin(user),
  });