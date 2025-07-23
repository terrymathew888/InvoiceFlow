import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCB6WWmvSfcpTlwWWS8daMEwE4X57_D2rs",
  authDomain: "invoiceflow-f3d04.firebaseapp.com",
  projectId: "invoiceflow-f3d04",
  storageBucket: "invoiceflow-f3d04.firebasestorage.app",
  messagingSenderId: "449789587024",
  appId: "1:449789587024:web:925954fe655e3872a92b55",
  measurementId: "G-4P5ZM9YJQB"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app) // ✅ This must be the Firestore instance

export default db // ✅ Must export `db`
