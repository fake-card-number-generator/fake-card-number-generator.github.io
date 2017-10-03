import * as types from './types';

export function generate() {
    return { type: types.GENERATE };
}

export function activateCopyFlash() {
    return { type: types.ACTIVATE_COPY_FLASH };
}

export function deactivateCopyFlash() {
    return { type: types.DEACTIVATE_COPY_FLASH };
}
