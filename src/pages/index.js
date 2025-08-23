import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Intentional issues for testing:
// 1. Missing import for a component we use
// 2. Undefined variable
// 3. Type mismatch
// 4. Missing dependency in useEffect

export default function Home() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState('0'); // String instead of number
  const [users, setUsers] = useState([]);

  // Missing dependency 'count' in useEffect
  useEffect(() => {
    fetchData();
    console.log('Count is:', count);
  }, []);

  // Function that doesn't exist
  const fetchData = async () => {
    try {
      // Using undefined variable
      const response = await fetch(API_URL + '/users');
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleIncrement = () => {
    // Type error: trying to do math on string
    setCount(count + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Using undefined function
    processFormData(formData);
  };

  return (
    <>
      <Head>
        <title>Test App with Build Issues</title>
        <meta name="description" content="Testing build problems" />
      </Head>

      <div className="container">
        <h1>Welcome to Test App</h1>
        
        {/* Using undefined component */}
        <CustomButton onClick={handleIncrement}>
          Count: {count}
        </CustomButton>

        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              {/* Accessing property that might not exist */}
              <span>{user.profile.avatar}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter something"
          />
          <button type="submit">Submit</button>
        </form>

        {/* Using component that's not imported */}
        <LoadingSpinner visible={loading} />

        <Link href="/about">
          <a className="nav-link">About Page</a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .user-card {
          border: 1px solid #ddd;
          padding: 10px;
          margin: 10px 0;
          border-radius: 4px;
        }
        
        .nav-link {
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}