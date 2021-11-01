import { VercelRequest, VercelResponse } from "@vercel/node";
import { admin } from "../transport/firebase.transport";
import { curriedTypedConverter } from "../utils";
import { FirebasePost } from "../models/firebasePost.model";
import { TweetDatasource } from "../datasources/tweets.datasource";

export default async (request: VercelRequest, response: VercelResponse) => {
  const codeTweets = await admin
    .firestore()
    .collection("codeTweets")
    .withConverter(curriedTypedConverter<FirebasePost>())
    .where("posted", "==", false)
    .get();

  const nextTweet = new TweetDatasource(codeTweets.docs[0].data());
  console.log(nextTweet.value);
  response.status(200).send(`Hello World!`);
};
