import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}
// This is an API route in Next.js. It handles incoming requests and sends a JSON response with the name "John Doe".
// The `NextApiRequest` and `NextApiResponse` types are used to type the request and response objects, respectively.