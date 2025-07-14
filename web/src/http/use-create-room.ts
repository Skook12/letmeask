import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateRoomsAPIRequest } from './types/create-rooms-request';
import type { CreateRoomsAPIResponse } from './types/create-rooms-response';

export function useCreateRooms() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateRoomsAPIRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateRoomsAPIResponse = await response.json();
      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] });
    },
  });
}
