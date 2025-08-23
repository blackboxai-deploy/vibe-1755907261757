import React, { useState } from 'react';
import { BrokenComponent } from '@/components/BrokenComponent';
import { nonExistentFunction } from '@/utils/missing-module';
import SomeUndefinedComponent from './UndefinedComponent';

// This component has multiple build issues
export default function HomePage() {
  const [count, setCount] = useState<string>(0); // Type error - string vs number
  
  // Missing dependency
  const result = calculateSomething(count);
  
  // Undefined variable
  console.log(undefinedVariable);
  
  // Invalid JSX
  return (
    <div>
      <h1>Test Page with Issues</h1>
      <BrokenComponent />
      <SomeUndefinedComponent />
      
      {/* Unclosed tag */}
      <div>
        <p>This div is not properly closed
        
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      {/* Invalid prop types */}
      <img src={123} alt="broken" />
      
      {/* Missing closing brace */}
      {result && (
        <div>Result: {result.invalidProperty}</div>
      /* Missing closing parenthesis */}
    </div>
  );
}