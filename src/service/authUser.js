import auth, { firebase } from '@react-native-firebase/auth';

export const signupUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signinUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const signoutUser = () => {
  return firebase.auth().signOut()
}

export const passwordForgetUSer = (email) => {
  return firebase.auth().sendPasswordResetEmail(email)
}