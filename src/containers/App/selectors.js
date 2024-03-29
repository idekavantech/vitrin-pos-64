/* eslint-disable prettier/prettier */
/**
 * The global state selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";
import { GLOBAL_LOADING_TYPE } from "./constants";

const selectGlobal = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

const makeSelectLoading = (name = GLOBAL_LOADING_TYPE) =>
  createSelector(selectGlobal, (globalState) => globalState.loading[name]);

const makeSelectProgressLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.progressLoading);

const makeSelectUploadProgress = () =>
  createSelector(selectGlobal, (globalState) => globalState.uploadProgress);

const makeSelectUploadStarted = () =>
  createSelector(selectGlobal, (globalState) => globalState.uploadStarted);

const makeSelectInitLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.initLoading);

const makeSelectUploadedFile = () =>
  createSelector(selectGlobal, (globalState) => globalState.uploadedFile);

const makeSelectUploadedFiles = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.multipleUploadedFiles
  );

const makeSelectError = () =>
  createSelector(selectGlobal, (globalState) => globalState.error);

const makeSelectSubDomain = () =>
  createSelector(selectGlobal, (globalState) => globalState.subdomain);

const makeSelectBusinessId = () =>
  createSelector(selectGlobal, (globalState) => globalState.businessId);

const makeSelectLocation = () =>
  createSelector(selectRouter, (routerState) => routerState.location);

const makeSelectHamiModal = () =>
  createSelector(selectGlobal, (globalState) => globalState.hamiModal);
const makeSelectFirebaseToken = () =>
  createSelector(selectGlobal, (globalState) => globalState.firebaseToken);

const makeSelectServerTime = () =>
  createSelector(selectGlobal, (globalState) => globalState.serverTime);

export {
  makeSelectInitLoading,
  makeSelectUploadedFiles,
  makeSelectSubDomain,
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectUploadedFile,
  makeSelectUploadProgress,
  makeSelectUploadStarted,
  makeSelectProgressLoading,
  makeSelectHamiModal,
  makeSelectFirebaseToken,
  makeSelectServerTime,
  makeSelectBusinessId
};
