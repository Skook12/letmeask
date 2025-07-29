import { GoogleGenAI } from '@google/genai';
import { env } from '../env.ts';

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const model = 'gemini-2.5-flash';

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: 'Be accurate and natural in your transcription. Maintain proper punctuation and divide the text into paragraphs when appropriate.',
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        },
      },
    ],
  });
  if (!response.text) {
    throw new Error('Error on conversion');
  }
  return response.text;
}

export async function generateEmbeddings(text: string) {
  const response = await gemini.models.embedContent({
    model: 'text-embedding-004',
    contents: [{ text }],
    config: {
      taskType: 'RETRIEVAL_DOCUMENT',
    },
  });

  if (!response.embeddings?.[0].values) {
    throw new Error('Error on embedding generation');
  }

  return response.embeddings[0].values;
}

export async function generateAnswer(
  question: string,
  transcription: string[]
) {
  const context = transcription.join('\n\n');
  const prompt = `
    Based on the text provided below as context, answer the question clearly and accurately in English.
    CONTEXT
    ${context}
    QUESTION
    ${question}
    INSTRUCTIONS

    -Use only information contained in the provided context;
    -If the answer cannot be found in the context, simply respond that there is not enough information to answer;
    -Be objective;
    -Maintain an educational and professional tone;
    -Cite relevant excerpts from the context when appropriate;
    -When citing the context, use the term "context";
    
    `.trim();
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error('Error on generate answer');
  }
  return response.text;
}
