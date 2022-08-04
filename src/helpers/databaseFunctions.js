import firebase from "./firebase";
import { getDatabase, push, ref, set } from 'firebase/database'



const database = getDatabase(firebase)

export const addData = (blogData) => {
    const dataRef = ref(database, 'blogData/');
    const newDataRef = push(dataRef);
    set(newDataRef, {
        title: blogData.title,
        imageUrl: blogData.imageUrl,
        content: blogData.content
    })
}