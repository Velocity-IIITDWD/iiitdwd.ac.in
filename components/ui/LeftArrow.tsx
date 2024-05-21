import React from 'react';

const LeftArrow: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      id='left-arrow'
    >
      <path d='M20.2 9.804a1 1 0 0 0-1.414 0L12.3 16.29a.997.997 0 0 0-.292.71c0 .258.096.514.292.71l6.486 6.486a1 1 0 0 0 1.414-1.414L14.418 17l5.782-5.782a1 1 0 0 0 0-1.414zM17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm0 28C9.832 30 4 24.168 4 17S9.832 4 17 4s13 5.832 13 13-5.832 13-13 13z'></path>
    </svg>
  );
};

export default LeftArrow;
