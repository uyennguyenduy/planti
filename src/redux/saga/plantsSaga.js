import { put, call, take, takeLatest } from 'redux-saga/effects';
import { getCollection, subcribeToCollection } from '../../service/firestore';
import { getPlantsFailed, getPlantsRequest, getPlantsSuccess } from '../actions/plantsActions';


// function* getPlantsSaga() {
//   try {
//     const querySnapshot = yield call(getCollection, "Plants");

//     let plants = [];
//     querySnapshot.forEach(doc => {
//       plants.push({
//         id: doc.id,
//         ...doc.data()
//       })
//     })

//     yield put(getPlantsSuccess(plants));

//   } catch(error) {
//     console.log(error);
//     yield put(getPlantsFailed(error))
//   }
// }

function* getPlantsSaga() {
  const channel = yield call(subcribeToCollection, "Plants");
  try {
    while (true) {
      const plants = yield take(channel);
      yield put(getPlantsSuccess(plants))
    }
  } finally {
    // if (yield cancelled()) {
    //   channel.close();
    // }
    console.log("subscribeToCollection is terminated")
  }
}

export function* watchPlants() {
  yield takeLatest(getPlantsRequest().type, getPlantsSaga)
}