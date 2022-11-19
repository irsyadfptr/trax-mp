// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Any files in API folder gonna be treated as API routes

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
