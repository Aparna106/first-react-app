// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
    // const = constant, let = variable
    let items = ["New York", "Kochi", "Tokyo", "London", "Paris"];
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
            <h1>List</h1>
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
