import ClubSaga from "./clubAPI";

function sagaConfigure(sagaMiddleware: any) {
    sagaMiddleware.run(ClubSaga);
}

export default sagaConfigure;
