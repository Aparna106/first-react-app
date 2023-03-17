// import { MouseEvent } from "react";

import { useState } from "react";

// {items : [], heading : string} using object passing using INTERFACE

interface Props {
    items: string[];
    heading: string;
    // function Something(items: string) => void
    onSelectItem: (item: string) => void;
}

//should be the parameter props:Props, but to avoid having to use prop.items.length, etc, use this:
function ListGroup({ items, heading, onSelectItem }: Props) {
    // const = constant, let = variable
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0]; //variable (selectedIndex)
    // arr[1]; // updater function

    const message = items.length === 0 && <p>No item found</p>;

    //Event Handler: click event
    // const handleClick = (event: MouseEvent) => console.log(event);

    return (
        // ctrl d to select multiple div for  -> fragment (by default <>)
        <>
            <h1>{heading}</h1>
            {/* Can't use if statement, use {} instead */}
            {message}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
