import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, onSnapshot, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

import {  Product } from "../types/products";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged
} from "firebase/auth";
import { Post } from "../types/post";


const firebaseConfig = {
  apiKey: "AIzaSyA59zm6Y5r_RVtaMptPI0RAzRM-X3Ejn_k",
  authDomain: "letning-dca.firebaseapp.com",
  projectId: "letning-dca",
  storageBucket: "letning-dca.appspot.com",
  messagingSenderId: "784203765833",
  appId: "1:784203765833:web:8dc7a0fe9c616b5d02c798",
  measurementId: "G-CJ5V0K3QJT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const storage = getStorage()

const uploadFile = async (file: File) => {
  const storageRef = ref(storage, file.name);
  const res = await uploadBytes(storageRef, file);
  console.log("file uploaded", res);
};

const getFile = async (name: string) => {
  let urlimg = '';

  await getDownloadURL(ref(storage, name))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    urlimg = url;
  
  })
  .catch((error) => {
    // Handle any errors
  });

  console.log(urlimg);
  return urlimg;

}


const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    console.log("ERROR AL REGISTRAR")
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

const SavePostDB = async (post: Omit<Post, "id">) => {
  try {
    const where = collection(db, "posts");
    await addDoc(where, { ...post, createdAt: new Date() });
    console.log("se añadió servidor con éxito");
  } catch (error) {
    console.error(error);
  }
};


const GetPostDB = async () => {
  console.log("Entrando en GETpostDB")
  const q = query(collection(db, "posts"), orderBy("createdAt"));
  const querySnapshot = await getDocs(q);
  const transformed: Array<Post> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Post, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });
  console.log(transformed)
  return transformed;
};


export {auth}
export {db}
export default {
  SavePostDB,
  GetPostDB,
  registerUser,
  loginUser,
  onAuthStateChanged,
  uploadFile,
  getFile
};