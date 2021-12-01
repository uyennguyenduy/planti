import { createSlice } from '@reduxjs/toolkit';
import { PLANTS } from '../../assets/data/PLANTS';
import { getPlantsFailed, getPlantsRequest, getPlantsSuccess } from '../actions/plantsActions';
import { selectSearchTerm } from './searchTermSlice';
import { selectSortTerms } from './sortsSlice';

const initialState = {
  allPlants: [],
  isLoading: true,
  hasError: false
}
export const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setFavoritePlant: (state, action) => {
      const { id } = action.payload;
      const existingPlant = state.allPlants.find(plant => plant.id === id);
      if (existingPlant) {
        existingPlant.featured = !existingPlant.featured;
      }
    },
    deleteFavoritePlant: (state, action) => {
      const { id } = action.payload;
      const existingPlant = state.allPlants.find(plant => plant.id === id);
      if (existingPlant) {
        existingPlant.featured = false;
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPlantsRequest, (state, action) => {
      return {
        isLoading: true
      }
    })
    .addCase(getPlantsSuccess, (state, action) => {
      const allPlants = action.payload;
      return {
        allPlants,
        isLoading: false,
        hasError: null
      }
    })
    .addCase(getPlantsFailed, (state, action) => {
      return {
        isLoading: false,
        hasError: action.payload
      }
    })
  }
});

export const selectAllPlants = state => {
  const { isLoading } = state.plants;
  if (!isLoading) {
    return state.plants.allPlants;
  }
  return null
};

export const selectFilteredPlant = state => {
  
  const allPlants = selectAllPlants(state);
  const searchTerm = selectSearchTerm(state);
  const sortTerm = selectSortTerms(state);
  let categorizedPlants = [];

  if (allPlants) {
    categorizedPlants = (sortTerm) 
  ? allPlants.filter(plant => plant.category.toLowerCase() === sortTerm.toLowerCase())
  : allPlants;
  }
  
  return categorizedPlants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

export const { setFavoritePlant, deleteFavoritePlant } = plantsSlice.actions;

export default plantsSlice.reducer;