import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { signinUser, signoutUser, signupUser } from '../../service/authUser';
import { loginFailed, loginRequest, loginSuccess } from '../actions/authActions';

async function SavetoAsyncStorage(userToken) {
  try {
    await AsyncStorage.setItem('userToken', userToken)
  } catch(err) {
    console.log(err)
  }
}

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(signinUser, email, password)
    const userToken = response.user.getIdToken();
    console.log(response);
    console.log(userToken);

    const payload = {
      result: "success",
    };
  
    yield put(loginSuccess(payload))
    SavetoAsyncStorage(userToken)
  } catch (error) {
    console.log(error);

    const errorCode = error.code;
    let errMessage = '';

    if (errorCode === 'auth/user-not-found') {
      errMessage = "User is not found"
    } else if (errorCode === "auth/wrong-password") {
      errMessage = "Wrong password"
    }

    const payload = {
      result: 'failed',
      error: errMessage
    }
    yield put(loginFailed(payload))
  }
}

function* logoutSaga() {
  try {
    const response = yield call(signoutUser);
    yield put()
  } catch(error) {
    console.log(error)
  }
}

export function* watchAuth() {
  yield takeLatest(loginRequest().type, loginSaga)
}