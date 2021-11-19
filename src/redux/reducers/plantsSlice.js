import { createSlice } from '@reduxjs/toolkit';
import { PLANTS } from '../../assets/data/PLANTS';
import { selectSearchTerm } from './searchTermSlice';

export const plantsSlice = createSlice({
  name: 'plants',
  initialState: PLANTS,
  reducers: {
    sortByCategory: (state, action) => {
      const {cate} = action.payload;
      console.log(cate);
      state.find((plant) => plant.category === cate);
    },
    setFavoritePlant: (state, action) => {
      const { id } = action.payload;
      const existingPlant = state.find(plant => plant.id === id);
      if (existingPlant) {
        existingPlant.featured = true;
      }
    }
  }
});

export const selectAllPlants = state => state.plants;

export const selectFilteredPlant = state => {
  
  const allPlants = selectAllPlants(state);
  const searchTerm = selectSearchTerm(state);

  return allPlants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export const { sortByCategory, setFavoritePlant } = plantsSlice.actions;

export default plantsSlice.reducer;