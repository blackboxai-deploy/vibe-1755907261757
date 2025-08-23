import React, { useState, useEffect } from 'react';
import { nonExistentLibrary } from 'fake-package';
import MissingComponent from './DoesNotExist';

const BrokenComponent = ({ data }) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/broken-endpoint');
      const result = await response.json();
      setState(result);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setState(prevState => {
      return prevState.map(item => ({
        ...item,
        clicked: true
      }));
    });
  };

  const processData = (items) => {
    return items.filter(item => item.active).map(item => {
      return {
        id: item.id,
        name: item.name.toUpperCase(),
        value: item.value * 2
      };
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="broken-component">
      <h2>Broken Component</h2>
      <MissingComponent data={data} />
      <button onClick={handleClick}>
        Click me
      </button>
      <div>
        {state.map(item => (
          <div key={item.id} className="item">
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      <div>
        {processData(data).map(item => (
          <p key={item.id}>{item.name}: {item.value}</p>
        ))}
      </div>
    </div>
  );
};

export default BrokenComponent;