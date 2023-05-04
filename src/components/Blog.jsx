import React from 'react';

const Blog = () => {
    return (
        <div>
            <h5> 1. tell us the difference between uncontrolled and controlled components?</h5>
            <p className='lead'>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h5> 2. how do validate react props using PropTypes?</h5>
            <p className='lead'>PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking</p>

            <h5> 3. Difference between node js and express js?</h5>
            <p className='lead'>Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser.</p>

            <h5>4. what is custom hook, why will you create a custom hook</h5>
            <p>custom React Hooks, we can reuse stateful logic easily across different components in an optimized and scalable format. Custom Hooks also produce a clean and structured codebase that reduces complexity and redundancy in your React project.</p>
        </div>
    );
};

export default Blog;