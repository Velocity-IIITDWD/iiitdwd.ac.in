'use client'
import React, { useEffect, useState } from 'react';

interface PropsType {
  text: string;
}

const ReadMoreLess: React.FC<PropsType> = ({ text }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [displayText, setDisplayText] = useState('');

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  useEffect(() => {
    if (isTruncated) {
      // Truncate text to the first 200 characters
      setDisplayText(text.substring(0, 200));
    } else {
      // Show full text
      setDisplayText(text);
    }
  }, [isTruncated, text]);

  if (text.length > 0) {
    return (
      <div>
        <p>
          {displayText}
          <button className="text-dwd-primary font-semibold" onClick={toggleIsTruncated}>
            {isTruncated ? '... Read More' : ' Show Less'}
          </button>
        </p>
      </div>
    );
  } else {
    return <div>{displayText}</div>;
  }
};

export default ReadMoreLess;
