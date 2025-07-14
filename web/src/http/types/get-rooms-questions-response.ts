export type GetRoomsQuestionsAPIResponse = Array<{
  id: string;
  questions: string;
  answer: string | null;
  createdAt: string;
  isGeneratingAnswer?: boolean;
}>;
