import Routes from '../routes/routes';
import { Message } from '../types/type';

export async function sendQuery(conversation: Message[]) {
  const result = await fetch(Routes.GetGPTResponse, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ conversation }),
  });
  const response: string = await result.text();
  return response;
}
