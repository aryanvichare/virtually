import axios from 'axios';

export default async (req, res) => {
  const {
    query: { proxyRoute }
  } = req;
  
  const result = await axios.post(`${process.env.BACKEND}/${proxyRoute}`, req.body);
  res.json(result.data);
};
