import { put, takeEvery, all, call } from "redux-saga/effects"


const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('hello sagas!')
}

export function* incrementAsync(){
  yield delay(1000)
  yield put({ type:'INCREMNET' })
}

export function* watchIncrementAsync() {

  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchData(action) {
  try {
    const data = yield call()
  } catch(error) {
    console.error(error)
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}

