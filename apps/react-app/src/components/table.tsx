import React from "react";
import { useTable } from "react-table";
// import "react-table/react-table.css";

// return <table>
//     <thead>
//     <tr>
//         {columns && columns.length > 0 && columns.map((item, index) =>
//             <th key={`${item.name} -` + index}>{item.name}</th>
//         )}
//     </tr>
//     </thead>
//     <tbody>
//
//     {data && data.length > 0 && data.map((item, index) =>
//         <tr>
//             <td key={index}>{item[columns[0].key] || ''}</td>
//             <td key={index}>{item["order-lines"][columns[1].key] || ''}</td>
//             <td key={index}>{item["order-lines"][columns[2].key] || ''}</td>
//             <td key={index}>{item[columns[3].key] || ''}</td>
//             <td key={index}>{item["order-lines"][columns[4].key] || ''}</td>
//             <td key={index}>{item["order-lines"][columns[5].key] || ''}</td>
//             <td key={index}>{item["order-lines"][columns[6].key] || ''}</td>
//             <td key={index}>{item[columns[7].key] || ''}</td>
//         </tr>
//     )}
//
//     </tbody>
// </table>


const CustomTable = ({ columns, data }) => {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default CustomTable;

