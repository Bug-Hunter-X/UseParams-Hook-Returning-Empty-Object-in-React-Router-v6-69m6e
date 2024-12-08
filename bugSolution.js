/* bug.js */
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log(params); // This will log an empty object if not directly under a route
  return (
    <div>
      <h1>My Component</h1>
      <p>ID: {params.id}</p> 
    </div>
  );
}

export default MyComponent;

/* bugSolution.js */
import { useParams, useLocation } from 'react-router-dom';

function MyComponent() {
  // Solution 1: Ensure component is a child of the route
  // const params = useParams();

  // Solution 2: Use useLocation and parse the URL
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');
  
  return (
    <div>
      <h1>My Component</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default MyComponent;