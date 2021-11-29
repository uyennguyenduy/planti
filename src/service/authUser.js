import auth, { firebase } from '@react-native-firebase/auth';

export const signupUser = (email, password, callback) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => {
    callback ({result: "success", user})
  })
  .catch(err => {
    const errorCode = err.code;
    if (errorCode === 'auth/email-already-in-use') {
      callback({result: "fail", error: "That email is already in use"})
    } 
     else if (errorCode === 'auth/invalid-email') {
      callback({result: "fail", error: "That email address is invalid"})
    } else {
      callback({result: "fail", error: err})
    }
    console.log(err)
  })
}

export const signinUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  // .then(user => {
  //   console.log('user: ', user)
  //   callback({result: "success", user})
  // })
  // .catch(err => {
  //   callback({result: "fail", error: err})
  //   console.log(err)
  // })
}

export const signoutUser = () => {
  return firebase.auth().signOut()
 
}