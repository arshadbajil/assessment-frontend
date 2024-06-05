// src/App.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Image from "./components/Image";
import Weather from "./components/Weather";
import Button from "./components/Button";
import Condition from "./components/Condition";
import { COMPONENT_TYPE } from "../constants/componentType";

const DynamicRenderer: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [pageData, setPageData] = useState<any>(null);
    const [variables, setVariables] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3030/page/${id ? id : "page-three"}`)
                .then((response) => response.json())
                .then(({ data }) => {
                    setPageData(data);
                    if (data.variables) {
                        const initialVars = data.variables.reduce((acc: any, variable: any) => {
                            acc[variable.name] = variable.initialValue;
                            return acc;
                        }, {});
                        setVariables(initialVars);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching page data", error);
                });
        }
    }, [id]);

    const renderComponent = (component: any) => {
        switch (component.type) {
            case COMPONENT_TYPE.IMAGE:
                return <Image src={component.options.src} alt={component.options.alt} />;
            case COMPONENT_TYPE.WEATHER:
                return <Weather lat={component.options.lat} lon={component.options.lon} />;
            case COMPONENT_TYPE.BUTTON:
                return (
                    <Button
                        text={component.options.text}
                        type={component.options.variable}
                        onClick={() =>
                            setVariables({
                                ...variables,
                                [component.options.variable]: component.options.value,
                            })
                        }
                    />
                );
            case COMPONENT_TYPE.CONDITION:
                return (
                    <Condition
                        condition={
                            variables[component.options.variable] === component.options.value
                        }
                    >
                        {component.children && renderComponentList(component.children)}
                    </Condition>
                );
            default:
                return null;
        }
    };

    const renderComponentList = (listId: number) => {
        const list = pageData.lists.find((l: any) => l.id === listId);
        return list.components.map((componentId: number) => {
            const component = pageData.components.find((c: any) => c.id === componentId);
            return <div key={component.id}>{renderComponent(component)}</div>;
        });
    };

    if (!pageData) {
        /**
         * Fall back case
         */
        return <div>Loading...</div>;
    }

    return <div>{renderComponentList(0)}</div>;
};

export default DynamicRenderer;
