
import Modal from "./modal";

import { useState } from "react";

const App = () => {

  const [modalOn, setModalOn] = useState(false);
 

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div>

      <div className="flex justify-center">
        <div className="flex  cursor-pointer justify-center w-1/3  bg-blue-400 p-4  m-6 rounded-md text-white"

          onClick={clicked}
        >
          click me
        </div>
      </div>

      {modalOn && < Modal setModalOn={setModalOn} />}

    </div>

  );
}

export default App;











// ------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import useStore from './GlobalStore';
// import RenderComponents from './Just';
// import Dialog from './closeModal';

// const MyComponent = () => {
//   const Dragcomponent = [
//     {
//       component: 'Button',
//       className: ['bg-green-500 px-3 py-1 text-white  rounded-md'],
//       value: 'save',
//       id: 'buttonn_b1',
//     }
//   ];
//   const {
//     components,
//     pos,
//     setComponents,
//     isDialogOpen,
//     setPos,
//     handleKeyDown,
//     onScroll,
//     handleClick,
//     handleDialogClose,
//     selectedComponent,
//   } = useStore();

//   const [dropComponent, setDropcomponent] = useState(Dragcomponent);

//   function componentLoop(componentData, id, newData) {
//     for (let i = 0; i < componentData.length; i++) {
//       const data = componentData[i];
//       if (data.id === id) {
//         console.log(data, 'data idss');
//         componentData[i]?.children?.push(newData);
//       } else if (data.children) {
//         const dataDrag = componentLoop(data.children, id, newData);
//       }
//     }
//   }
//   function drop(e) {
//     e.target.classList.remove('drag-over');
//     console.log(e.target.id);
//     e.preventDefault();
//     let data = e.dataTransfer.getData('item');
//     console.log(data, 'data');
//     let item = Dragcomponent.find((item) => item?.id === data);
//     console.log(item, 'item');
//     let newData = JSON.parse(JSON.stringify(item));

//     const targetComponent = components.find(
//       (component) => component.id === e.target.id
//     );
//     if (!targetComponent.isActive) {
//       return false; // Prevent drop if the target component is not active
//     }

//     e.target.classList.add('active-drop');
//     componentLoop(components, e.target.id, newData);
//     setDropcomponent(newData);
//     return false;
//   }

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('wheel', onScroll);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('wheel', onScroll);
//     };
//   }, [handleKeyDown, onScroll]);

//   return (
//     <div className="bg-[#f3f4f8] h-full w-full fixed top-0 left-0 right-0 bottom-0 overflow-auto">
//       {components?.map((block, key) => {
//         const style = {
//           position: 'absolute',
//           left: block.x,
//           top: block.y,
//           transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
//         };
//         return (
//           <div key={key} style={style} onWheelCapture={onScroll}>
//             <RenderComponents
//               onClick={() => handleClick(block.id, block.x, block.y)}
//               onWheelCapture={onScroll}
//               style={style}
//               {...block}
//               drop={drop}
//               active={block.isActive}
//             />
//           </div>
//         );
//       })}

//       <Dialog
//         isOpen={isDialogOpen}
//         title="Screen Name"
//         onClose={handleDialogClose}
//         componentPosition={selectedComponent}
//       >
//         <div>
//           {Dragcomponent.map((block, key) => {
//             return (
//               <div key={key}>
//                 <RenderComponents {...block} />
//               </div>
//             );
//           })}
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default MyComponent;


// import MyComponent from "./MyComponent";
// import Work from "./Work";
// import Appbar from "./components/Appbar";
// import Filters from "./components/Filters";
// import Items from "./components/Items";

// function App(){
//   return(
//     <div> 
//      <Task/>
//      {/* <MyComponent/> */}
//      {/* <Work/>  */}

//      {/* <Appbar/>
//      <Filters/>
//      <Items/> */}

//     </div> 
//   )
// };
// -------------------------
// import Task from "./Task";

// import{
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,

// }from "react-router-dom";

// function App() { 
//   return(
//     <BrowserRouter>
         
//     <nav>
//     <Link to ="/user">USER</Link>{" "}{" "}{" "}
//    </nav>
//       <Routes>
//         <Route path="/user" element={<Task/>}/>
//       </Routes>

//    </BrowserRouter>  
//     )
// }
// export default App;

