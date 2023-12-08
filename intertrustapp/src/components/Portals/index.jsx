import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const DemoText = ()=>{
    const [text,setText] = useState('');
    return(
        <div>
        <input type="text"

            onChange={e=>{
                setText(e.target.value);
            }}
        className='form-control'/>
        <pre>{text}</pre>
        </div>

    )
}
const MyPortal = ({ children }) => {
  const [portalContainer] = useState(() => document.createElement('div'));

  useEffect(() => {
    // Append the portal container to the body on mount
    document.body.appendChild(portalContainer);

    // Clean up: remove the portal container from the body on unmount
    return () => {
      document.body.removeChild(portalContainer);
    };
  }, [portalContainer]);

  // Use ReactDOM.createPortal to render the children into the portal container
  return ReactDOM.createPortal(children, portalContainer);
};

// Example usage
const PortalDemo = () => {
  return (
    <div>
      <h1>Normal DOM Hierarchy</h1>
      <MyPortal>
        <h1>Portaled Content</h1>
        <DemoText/>

      </MyPortal>
    </div>
  );
};

export default  PortalDemo ;
    ;
