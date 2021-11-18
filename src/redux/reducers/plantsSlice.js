import { createSlice } from '@reduxjs/toolkit';
import { PLANTS } from '../../assets/data/PLANTS';
import { selectSearchTerm } from './searchTermSlice';

export const plantsSlice = createSlice({
  name: 'plants',
  initialState: PLANTS,
  reducers: {}
});

export const selectAllPlants = state => state.plants;

export const selectFilteredPlant = state => {
  
  const allPlants = selectAllPlants(state);
  const searchTerm = selectSearchTerm(state);

  return allPlants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
export default plantsSlice.reducer;