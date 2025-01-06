import { type NextRequest } from 'next/server';
import { Message } from '@/core/types/type';
export async function POST(request: NextRequest) {
  // first we get the details from Frontend
  const body = await request.text();
  const bodyJSON = JSON.parse(body);

  // we create an array of messages
  const messages: Message[] = [];

  //first pre set the GPT model as an excellent event planner who can help suggest
  const newMessage: Message = {
    role: 'system',
    content:
      'You are an excellent event planner who can help suggest places for people to visit or checkout. Ask Peopel for 3 pieces of information: 1)The name of the place 2) if they like quite or lively places 3) The date period when they will be going! ',
  };
  messages.push(newMessage);

  // then we ge tht e rest of the conversations form the frontend
  const conversation: Message[] = bodyJSON.conversation;
  conversation.forEach((convers: Message) => {
    messages.push(convers);
  });

  //configure the body to send to the open ai to get appropriate response
  //creating the body to send to the chatgpt api
  const bodyToSend = {
    model: 'gpt-3.5-turbo-0301',
    temperature: 0.7,
    messages,
  };
  //Actual body
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(bodyToSend),
  });

  //getting the josn after the promise is fullfilled
  const json = await response.json();
  let returnMsg: string = '';

  if (json.choices !== null) {
    const responseMessage = json.choices[0].message.content;
    returnMsg = responseMessage;
  }

  return new Response(returnMsg, { status: 200 });
}
