import React from 'react';

const Checkbox = ({ id, label, checked, onChange, checkboxclass }) => {
  return (
    <div>
      <input
      className={checkboxclass}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;


// how to use
// import React, { useState } from 'react';
// import Checkbox from './Checkbox';

// const CheckboxList = () => {
//   const [checkboxes, setCheckboxes] = useState([
//     { id: 1, label: 'Checkbox 1', checked: false },
//     { id: 2, label: 'Checkbox 2', checked: true },
//     { id: 3, label: 'Checkbox 3', checked: false },
//   ]);

//   const handleCheckboxChange = (id) => {
//     setCheckboxes((prevCheckboxes) =>
//       prevCheckboxes.map((checkbox) => {
//         if (checkbox.id === id) {
//           return { ...checkbox, checked: !checkbox.checked };
//         }
//         return checkbox;
//       })
//     );
//   };

//   return (
//     <div>
//       {checkboxes.map((checkbox) => (
//         <Checkbox
//           key={checkbox.id}
//           id={checkbox.id}
//           label={checkbox.label}
//           checked={checkbox.checked}
//           onChange={() => handleCheckboxChange(checkbox.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default CheckboxList;
