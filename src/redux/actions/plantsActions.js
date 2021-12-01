import { createAction } from "@reduxjs/toolkit";

export const getPlantsRequest = createAction('posts/getPlantsRequest');
export const getPlantsSuccess = createAction('posts/getPlantsSuccess');
export const getPlantsFailed = createAction('posts/getPlantsFailed');
