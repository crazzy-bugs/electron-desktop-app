import { useState, useEffect } from 'react';

// Types for Table Data
interface RowData {
  [key: string]: any; // Row can have any number of fields with any types
}

interface UseTableProps {
  data: RowData[]; // The data for the table
  rowsPerPage?: number; // Number of rows per page
  searchKeys?: string[]; // The keys to search through in the data
  onRowSelectionChange?: (selectedRows: number[]) => void; // Optional callback for row selection changes
}

interface UseTableReturn {
  data: RowData[]; // Data for the current page
  currentPage: number;
  totalPages: number;
  selectedRows: number[];
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (pageNumber: number) => void;
  sortColumn: (columnName: string) => void;
  toggleRowSelection: (rowIndex: number) => void;
  setSearchQuery: (query: string) => void;
}

// Helper function for sorting
const sortData = (data: RowData[], sortBy: string, sortDirection: 'asc' | 'desc'): RowData[] => {
  return data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
};

// Custom hook for table management
export const useTable = ({
  data,
  rowsPerPage = 10,
  searchKeys = [],
  onRowSelectionChange,
}: UseTableProps): UseTableReturn => {
  // Internal state management
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering and sorting
  const [filteredData, setFilteredData] = useState<RowData[]>(data);

  useEffect(() => {
    // Search filter based on the provided keys
    const searchData = data.filter(item => {
      return searchKeys.some(key =>
        item[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Sort the filtered data
    if (sortBy) {
      const sortedData = sortData(searchData, sortBy, sortDirection);
      setFilteredData(sortedData);
    } else {
      setFilteredData(searchData);
    }
  }, [data, searchQuery, sortBy, sortDirection, searchKeys]);

  // Get rows for the current page (pagination)
  const pageData = filteredData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  // Pagination handlers
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 0));
  const goToPage = (pageNumber: number) => setCurrentPage(pageNumber);

  // Sorting handlers
  const sortColumn = (columnName: string) => {
    if (sortBy === columnName) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnName);
      setSortDirection('asc');
    }
  };

  // Row selection handling
  const toggleRowSelection = (rowIndex: number) => {
    setSelectedRows(prevSelectedRows => {
      const newSelectedRows = [...prevSelectedRows];
      const rowIndexInSelection = newSelectedRows.indexOf(rowIndex);
      if (rowIndexInSelection > -1) {
        newSelectedRows.splice(rowIndexInSelection, 1);
      } else {
        newSelectedRows.push(rowIndex);
      }

      // Call the onRowSelectionChange callback if provided
      if (onRowSelectionChange) {
        onRowSelectionChange(newSelectedRows);
      }

      return newSelectedRows;
    });
  };

  return {
    data: pageData,
    currentPage,
    totalPages: Math.ceil(filteredData.length / rowsPerPage),
    selectedRows,
    nextPage,
    prevPage,
    goToPage,
    sortColumn,
    toggleRowSelection,
    setSearchQuery,
  };
};
