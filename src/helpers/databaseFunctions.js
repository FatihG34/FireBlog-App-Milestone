import firebase from "./firebase";
import { getDatabase, onValue, push, ref, remove, set, update } from 'firebase/database';
import { useState, useEffect } from "react"



const database = getDatabase(firebase)

export const addData = (blogData) => {
    const dataRef = ref(database, 'blogData/');
    const newDataRef = push(dataRef);
    set(newDataRef, {
        title: blogData.title,
        imageUrl: blogData.imageUrl,
        content: blogData.content
    })
};

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState();
    const [dataList, setDataList] = useState();
    useEffect(() => {
        const dataRef = ref(database, 'blogData/')
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = []

            for (let id in data) {
                dataArray.push({ id, ...data[id] })
            }
            setDataList(dataArray)
            setIsLoading(false)
        })
    }, [])
    return { isLoading, dataList }
};

export const DeleteData = (id) => {
    remove(ref(database, "blogData/" + id));
    // Toastify("Deleted Successfully")
}

export const UpdateData = (blogData) => {
    const updates = {}
    updates['blogData/' + blogData.id] = blogData

    return update(ref(database), updates)

}