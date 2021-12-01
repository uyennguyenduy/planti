import { put, call, takeLatest } from 'redux-saga/effects';
import { getCollection } from '../../service/firestore';
import { getPlantsFailed, getPlantsRequest, getPlantsSuccess } from '../actions/plantsActions';

function* getPlantsSaga() {
  try {
    const querySnapshot = yield call(getCollection, "Plants");
    console.log(querySnapshot.size);
    let plants = [];
    querySnapshot.forEach(doc => {
      plants.push({
        id: doc.id,
        ...doc.data()
      })
    })

    yield put(getPlantsSuccess(plants));

  } catch(error) {
    console.log(error);
    yield put(getPlantsFailed(error))
  }
}

export function* watchPlants() {
  yield takeLatest(getPlantsRequest().type, getPlantsSaga)
}