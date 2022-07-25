import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAVByjEXBOzb69diK570oVpaqGikWqupOA",
    authDomain: "theplanner-45153.firebaseapp.com",
    projectId: "theplanner-45153",
    storageBucket: "theplanner-45153.appspot.com",
    messagingSenderId: "568477149632",
    appId: "1:568477149632:web:8d8abaebf04935a9584025"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }