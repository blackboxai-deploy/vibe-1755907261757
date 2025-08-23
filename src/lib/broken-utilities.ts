// This file has various TypeScript and logic errors

import { nonExistentModule } from 'some-missing-package';
import fs from 'fs'; // Node.js import in client-side code

// Circular dependency issue
import { circularFunction } from './broken-utilities';

// Export without implementation
export declare const missingImplementation: () => void;

// Function with syntax errors
export function syntaxErrorFunction() {
  const obj = {
    prop1: "value1"
    prop2: "value2" // Missing comma
  };
  
  // Unreachable code
  return obj;
  console.log("This will never execute");
}

// Type errors
export const typeErrorFunction = (param: string): number => {
  return param; // Type error - returning string instead of number
};

// Invalid generic constraints
export interface BrokenInterface<T extends NonExistentType> {
  data: T;
  process: (input: T) => UnknownReturnType;
}

// Function with missing dependency
export async function brokenAsyncFunction(): Promise<string> {
  const data = await nonExistentModule.getData();
  return data.toString();
}

// Invalid use of Node.js APIs in client code
export const readFileFunction = () => {
  try {
    return fs.readFileSync('./config.json', 'utf8');
  } catch (error) {
    return null;
  }
};

// Infinite loop potential
export const infiniteLoop = (x: number): number => {
  if (x > 0) {
    return infiniteLoop(x); // No decrement - infinite recursion
  }
  return 0;
};

// Wrong export syntax
export default function, anotherFunction() {
  return "broken export";
}