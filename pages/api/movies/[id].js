import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";



// export default function handler(req, res) {
//   const { id } = req.query
//   res.end(`Post: ${id}`)
//   res.end(`Post: ${ObjectId('573a1394f29313caabcdfa3e')}`)
// }


export default async (req, res) => {

  
  const { id } = req.query

  try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");

      const movies = await db
          .collection("movies")
          .findOne({_id: ObjectId(id)})
       //    .sort({ metacritic: -1 })
       //    .limit(1)
       //    .toArray();

      res.json(movies);
  } catch (e) {
      console.error(e);
  }
};