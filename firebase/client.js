import firebase from 'firebase';
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const addPlayer = ({
  player,
  ranked,
  game,
  qualification,
  observations,
  userId,
}) => {
  return db.collection('players').add({
    player,
    ranked,
    game,
    qualification,
    observations,
    userId: 1,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const getDataByAgent = (agent) => {
  return db.collection('players').where('player', '==', agent);
};
