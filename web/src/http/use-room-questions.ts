import { useQuery } from '@tanstack/react-query';
import type { GetRoomsQuestionsAPIResponse } from './types/get-rooms-questions-response';

export function UseRoomsQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomsQuestionsAPIResponse = await response.json();

      return result;
    },
  });
}
