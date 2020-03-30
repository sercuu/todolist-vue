export function actionShouldBlock(meta) {
    return !meta || !meta.async || !meta.blocking;
}

export function actionStarted(type) {
    return type.includes('_STARTED')
}

export function actionFinished(type) {
    return type.includes('_COMPLETED') || type.includes('_FAILED') || type.includes('LOGOUT');
}