// import ListGroup from "./components/ListGroup";

// function App() {
//     let items = ["New York", "Kochi", "Tokyo", "London", "Paris"];
//     const handleSelectItem = (item: string) => {
//         console.log(item);
//     };

//     return (
//         <div>
//             <ListGroup
//                 items={items}
//                 heading="Cities"
//                 onSelectItem={handleSelectItem}
//             ></ListGroup>
//         </div>
//     );
// }

// import React from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
            <Button color="secondary" onClick={() => console.log("Clicked")}>
                My Button
            </Button>
        </div>
    );
}

export default App;
