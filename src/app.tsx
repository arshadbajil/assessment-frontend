import React from "react";
import MobileWrapper from "./components/MobileWrapper";
import DynamicRenderer from "./pages/DynamicRenderer";

const App: React.FC<any> = () => {
    return (
        <MobileWrapper>
            <DynamicRenderer />
        </MobileWrapper>
    );
};

export default App;
