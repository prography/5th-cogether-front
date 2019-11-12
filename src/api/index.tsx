import ClubSaga from "./clubAPI";
import EduSaga from "./eduAPI";
import ConfSaga from "./confAPI";

function sagaConfigure(sagaMiddleware: any) {
    sagaMiddleware.run(ClubSaga);
    sagaMiddleware.run(EduSaga);
    sagaMiddleware.run(ConfSaga);
}

export default sagaConfigure;
