import admin from "firebase-admin";

export const curriedTypedConverter = <
  T
>(): admin.firestore.FirestoreDataConverter<T> => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap) => snap.data() as T,
});
