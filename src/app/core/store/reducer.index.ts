import {
    createSelector,
    createFeatureSelector,
    Action,
    ActionReducerMap,
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromAuth from '@root/components/login/store/reducer';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    auth: fromAuth.State;

}
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>
    ('Root reducers token', {
        factory: () => ({
            auth: fromAuth.reducer,

        }),
    });

//#region Auntentication
export const getAuthState = createFeatureSelector<State, fromAuth.State>(
    'auth'
);

export const getLoggedIn = createSelector(
    getAuthState,
    fromAuth.getLoggedIn
);

export const getAuthUser = createSelector(
    getAuthState,
    fromAuth.getAuthUser
);

export const getLoginError = createSelector(
    getAuthState,
    fromAuth.getLoginError
);
export const getAuthLoading = createSelector(
    getAuthState,
    fromAuth.getAuthLoading
);
//#endregion

