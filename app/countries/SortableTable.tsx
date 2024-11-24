// components/SortableTable.tsx
import React, { useState } from 'react';

// Define a type for the data structure (Row type)
type Row = {
  id: number;
  Name: string;
  Icon: string;
};

// Define the union type for valid keys of Row
type RowKey = keyof Row;

// Define props for the SortableTable component, which expects a data prop of type Row[]
interface SortableTableProps {
  data: Row[];
}

const SortableTable: React.FC<SortableTableProps> = ({ data }) => {
  // State to hold the current sorting column and direction
  const [sortConfig, setSortConfig] = useState<{ key: RowKey; direction: 'ascending' | 'descending' } | null>(null);

  // Function to handle sorting when a column header is clicked
  const handleSort = (key: RowKey) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    
    setSortConfig({ key, direction });
  };

  // Sort the data based on the current sorting config
  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      const sortedArray = [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
        return 0;
      });
      return sortedArray;
    }
    return data;
  }, [data, sortConfig]);

  return (
    <div style={{ overflowX: 'auto', margin: '20px 0' }}>
      <table cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', border: "3px solid rgb(255, 255, 255)"}}>
      <thead style={{border: "2px solid rgb(255, 255, 255)"}}>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('Name')}>Name</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} style={{border: "1px solid rgb(255, 255, 255)"}}>
              <td>{row.id}</td>
              <td>{row.Name}</td>
              <td><img src={row.Icon} width="25" height="25"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
