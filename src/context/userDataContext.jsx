// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        isLoggedIn: false,
        calories: 2000, // sample data
        caloriesGoal: 2500, // sample data
        weight: 70, // sample data
        goalWeight: 65, // sample data
        workoutCompleted: 15, // sample data
        workoutTarget: 30 // sample data
    });

    const updateUser = (data) => {
        setUserData(prev => ({ ...prev, ...data, isLoggedIn: true }));
    };

    return (
        <UserDataContext.Provider value={{ userData, updateUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => useContext(UserDataContext);