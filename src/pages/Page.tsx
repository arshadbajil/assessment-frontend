import React, { useEffect, useState } from "react";
import ImageComponent from "../components/ImageComponent";
import { COMPONENT_TYPE } from "../constants/componentType";
import { useParams } from "react-router-dom";
import Weather from "../components/Weather";
import ConditionWidget from "../components/ConditionWidget";

const Page: React.FC<any> = () => {
    const { id } = useParams<{ id: string }>();

    const [info, setInfo] = useState<{
        components: { id: number; type: string; options: any }[];
        lists: { id: number; components: number[] }[];
    }>({ components: [], lists: [] });

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3030/page/${id}`)
                .then(async (res: any) => await res.json())
                .then((data) => {
                    setInfo(data?.data);
                });
        }
    }, [id]);

    return (
        <>
            {info?.lists.map((list) => {
                return list?.components?.map((listC) => {
                    const component: any = info.components.find((c) => c.id === listC);

                    if (component.type === COMPONENT_TYPE.IMAGE) {
                        return (
                            <ImageComponent
                                key={component?.id}
                                src={component?.options?.src}
                                alt={component?.options?.alt}
                            />
                        );
                    }
                    if (component.type === COMPONENT_TYPE.WEATHER) {
                        return <Weather key={component?.id} {...component.options} />;
                    }

                    if (component.type === COMPONENT_TYPE.CONDITION) {
                        return (
                            <ConditionWidget
                                key={component?.id}
                                options={component.options}
                                children={component.children}
                            />
                        );
                    }
                    return null;
                });
            })}
        </>
    );
};

export default Page;
