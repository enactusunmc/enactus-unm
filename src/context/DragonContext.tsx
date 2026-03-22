import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DragonContextType {
    isDragonEnabled: boolean;
    toggleDragon: () => void;
}

const DragonContext = createContext<DragonContextType | undefined>(undefined);

export const DragonProvider = ({ children }: { children: ReactNode }) => {
    const [isDragonEnabled, setIsDragonEnabled] = useState(false);

    const toggleDragon = () => {
        setIsDragonEnabled(prev => !prev);
    };

    return (
        <DragonContext.Provider value={{ isDragonEnabled, toggleDragon }}>
            {children}
        </DragonContext.Provider>
    );
};

export const useDragon = () => {
    const context = useContext(DragonContext);
    if (context === undefined) {
        throw new Error('useDragon must be used within a DragonProvider');
    }
    return context;
};
