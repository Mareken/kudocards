import React from 'react';

function SplitText({ content, role }) {
  return (
    <span aria-label={content} role={role}>
      {
        content.split('').map((char, index) => (
          <span
            aria-hidden={true}
            key={index}
          >
            {char}
          </span>
        ))
      }
    </span>
  );
}

export default SplitText;