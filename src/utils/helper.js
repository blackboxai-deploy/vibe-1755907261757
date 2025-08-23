// Utility functions with intentional build issues

import React from 'react';
import { nonExistentPackage } from 'fake-package';

// TypeScript syntax in JS file (will cause issues)
interface UserData {
  name: string;
  age: number;
}

// Missing dependency
const moment = require('moment');

// Syntax error - missing closing brace
export const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD');

// Undefined variable
export const processUser = (userData) => {
  console.log(undefinedVariable);
  return {
    ...userData,
    processed: true
  };
};

// Invalid JSX in utility file
export const renderComponent = () => {
  return <div>This shouldn't be here</div>;
};

// Circular dependency issue
import { circularFunction } from './helper';

// Missing semicolon and invalid syntax
export const brokenFunction = () => {
  const result = someUndefinedFunction()
  return result
}

// ES6 import mixed with CommonJS
const fs = require('fs');
import path from 'path';

// Invalid destructuring
export const { invalidProp } = undefined;

// Async/await without proper error handling
export const fetchData = async () => {
  const response = await fetch(undefinedUrl);
  return response.json();
};