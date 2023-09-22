import React, { useState } from 'react';
interface DataGridProps {
  data: Array<any>;
  columns: Array<string>;
  columnDisplayNames: Array<string>;
  currentPage: number;
  pageSize: number;
}
const DataGrid = ({ data, columns, columnDisplayNames, currentPage, pageSize }: DataGridProps) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);
  const [checkboxState, setCheckboxState] = useState(currentData.map(() => false));

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxState = [...checkboxState];
    updatedCheckboxState[index] = !updatedCheckboxState[index];
    setCheckboxState(updatedCheckboxState);
  };
  
  
  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr>
          {columnDisplayNames.map((columnName, index) => (
            <th key={index} className='border border-customBlue px-5 py-2 font-bold text-start'>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData.map((item, index) => (
          <tr key={index} className='border border-customBlue'>
            <td className='border border-customBlue px-5 py-3'>
              <input
                type="checkbox"
                checked={checkboxState[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              {'  '}
              {item['Full_name']}
            </td>
            {columns.slice(1).map((column, columnIndex) => (
              <td key={columnIndex} className='border border-customBlue px-4 py-2'>
                {item[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DataGrid;