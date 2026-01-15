import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    terms: false,
  },
  errors: {},
  isSubmitted: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
      // Clear error when user types
      if (state.errors[name]) delete state.errors[name];
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    submitUserSuccess: (state) => {
      state.isSubmitted = true;
    },
    resetUserForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isSubmitted = false;
    },
  },
});

export const { updateField, setErrors, submitUserSuccess, resetUserForm } = userSlice.actions;
export default userSlice.reducer;