import React from 'react';

interface Props {
  title: string;
  count: number;
  isActive: boolean;
}

// This component has type errors and missing imports
export const TypeErrorComponent: React.FC<Props> = ({ title, count, isActive }) => {
  // Type error - trying to assign string to number
  const numericValue: number = "not a number";
  
  // Missing import for useState
  const [data, setData] = useState<string[]>([]);
  
  // Type error - wrong property access
  const invalidAccess = title.length.invalidMethod();
  
  // Missing return type causing inference issues
  const brokenFunction = (x) => {
    if (x > 0) {
      return "positive";
    }
    // Missing return for negative case
  };
  
  // Type error - using undefined props
  const result = brokenFunction(undefinedProp);
  
  // Async function without proper typing
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data.invalidProperty.map(item => item.toString()));
  };
  
  return (
    <div>
      <h2>{title.toUpperCase()}</h2>
      <p>Count: {count}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <p>Numeric: {numericValue}</p>
      
      {/* Type error - passing wrong prop types */}
      <button onClick={fetchData}>
        Load Data ({data.length})
      </button>
      
      {/* Missing key prop in list */}
      {data.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
};