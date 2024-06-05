// src/components/Condition.tsx
import React from "react";

interface ConditionProps {
    condition: boolean;
    children: React.ReactNode;
}

const Condition: React.FC<ConditionProps> = ({ condition, children }) => {
    return <>{condition ? children : null}</>;
};

export default Condition;
