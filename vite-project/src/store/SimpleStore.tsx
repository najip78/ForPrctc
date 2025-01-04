import { create } from "zustand";

// Create a Zustand store
const useStore = create((set) => ({
    names: ["userone", "userTwo", "userthre"], // Initial state as an array
    setName: (index, newName) => {
        set((state) => {
            const updatedNames = [...state.names]; // Clone the array
            updatedNames[index] = newName; // Update the name at the specified index
            return { names: updatedNames }; // Set the new state
        });
    },
}));

export default useStore;
