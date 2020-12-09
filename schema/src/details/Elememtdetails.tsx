import React from "react";

export const ElementDetails = ({name, info}: {name: string, info: Record<string,any>}) => {
    return <div className="element-details">
        <div className="element-details-row"><label>NAME:</label><label>{name}</label></div>
{Object.keys(info).map(k => <div key={k} className="element-details-row"><label>{k}</label><label>{info[k]}</label></div>)}
        <div className="element-details-row"><label>AAA:</label><label>25</label></div>
    </div>
}