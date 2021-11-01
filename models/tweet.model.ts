import { FirebasePost } from "./firebasePost.model";

export class Tweet {
  content: string;
  posted: boolean;
  constructor(post: FirebasePost) {
    this.content = post.content;
    this.posted = post.posted;
  }

  get value(): FirebasePost {
    return {
      content: this.content,
      posted: this.posted,
    };
  }
}
