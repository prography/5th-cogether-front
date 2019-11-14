import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'
import rootSaga from './sagas'

// saga 미들웨어를 생성
const configure = ()=>{
    const sagaMiddleware = createSagaMiddleware()
    // 스토어에 mount 
    const store = createStore(
      rootReducer,
      // redux의 미들웨어로 sagaMiddleware를 사용
      applyMiddleware(sagaMiddleware)
    )
    
    // saga 실행
    sagaMiddleware.run(rootSaga)

    return store
}
export default configure;