import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { passwordForgetUSer, signinUser, signoutUser, signupUser } from '../../service/authUser';
import { loginFailed, loginRequest, loginSuccess, logoutFailed, logoutRequest, logoutSuccess, passwordForgetFailed, passwordForgetRequest, passwordForgetSuccess, signFailed, signupFailed, signupRequest, signupSuccess } from '../actions/authActions';
import * as RootNavigation from '../../container/navigation/RootStackNavigator';

async function SavetoAsyncStorage(userToken) {
  try {
    await AsyncStorage.setItem('userToken', JSON.stringify(userToken))
  } catch(err) {
    console.log(err)
  }
}

async function RemovetoAsyncStorage() {
  try {
    await AsyncStorage.removeItem('userToken');
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

    SavetoAsyncStorage(userToken);
    yield RootNavigation.navigate("Home");
    yield put(loginSuccess(response));
    
  } catch (error) {
    console.log(error);
    yield put(loginFailed(error))
  }
}

function* logoutSaga() {
  try {
    const response = yield call(signoutUser);
    console.log(response);

    RemovetoAsyncStorage()
    yield RootNavigation.navigate("Welcome");
    yield put(logoutSuccess());

  } catch(error) {
    console.log(error)
    yield put(logoutFailed());
  } 
}

function* signupSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(signupUser, email, password);
    console.log(response);
    // yield RootNavigation.navigate("Login");
    yield put(signupSuccess(response));

  } catch(error) {
    console.log(error);
    yield put(signupFailed(error))
  }
}

function* passwordForgetSaga(action) {
  try {
    const email = action.payload;
    const response = yield call(passwordForgetUSer, email)
    console.log(response);
    yield put(passwordForgetSuccess(response));

  } catch (error) {
    console.log(error);
    yield put(passwordForgetFailed(error));
  }
}
export function* watchAuth() {
  yield takeLatest(loginRequest().type, loginSaga)
  yield takeLatest(logoutRequest().type, logoutSaga)
  yield takeLatest(signupRequest().type, signupSaga)
  yield takeLatest(passwordForgetRequest().type, passwordForgetSaga)
}