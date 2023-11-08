import { collection, getDocs } from "firebase/firestore";
import db from '../db/firestore';

// const extractSnapshotData = snapshot =>
// snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
// console.log('extractSnapshotData' , extractSnapshotData);

// export const fetchChats = () => db.collection('chats').get().then(extractSnapshotData);
// console.log('fetchChats =>', fetchChats);
export const fetchChats = async () => {
       
    await getDocs(collection(db, "chats"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            // setTodos(newData);                
            console.log('newData', newData);
        })
   
}

console.log('fetchChats =>', fetchChats);
