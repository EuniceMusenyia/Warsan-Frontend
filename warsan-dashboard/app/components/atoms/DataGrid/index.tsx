import React from 'react';
​
export const DataGrid = ({ data, columns, columnDisplayNames }) => {
  return (
    <div className='item-center ml-60'>
      {/* Display column names */}
      <div className='grid grid-cols-5 gap-4 text-1xl mb-5 py-2 font-bold'>
        {/* Display concatenated column */}
        <div className='col-span-1'>
          <p>Full Name</p>
        </div>
        {/* Display other column names */}
        {columnDisplayNames.slice(1).map((columnName, index) => (
          <div key={index} className='col-span-1'>
            <p>{columnName}</p>
          </div>
        ))}
        <hr className="col-span-5 border border-customBlue h-px" />
      </div>
​
      {/* Display data */}
      {data.map((item, index) => (
        <div key={index} className='grid grid-cols-5 gap-4 text-1xl mb-5 py-2'>
          {/* Display concatenated column */}
          <div className="col-span-1">
            <input type="checkbox" checked={item['is_active']} disabled />
            <span className="ml-2">{item['Full_name']}</span>
          </div>
          {/* Display other columns */}
          {columns.slice(1).map((column, columnIndex) => (
            <div key={columnIndex} className="col-span-1">
              <p>
                <span className="">{item[column]}</span>
              </p>
            </div>
          ))}
          <hr className="col-span-5 border border-customBlue h-px" />
        </div>
      ))}
    </div>
  );
};
​
export default DataGrid;