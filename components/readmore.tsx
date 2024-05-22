import React, { useRef, useEffect, useState } from 'react';


interface propstype{
  text:string
}


const ReadMoreLess = (props:propstype) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [displayText, setDisplayText] = useState('');

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  useEffect(() => {
    if (isTruncated) {
      // Truncate text to first 200 characters
      setDisplayText(props.text.substring(0, 200));
    } else {
      // Show full text
      setDisplayText(props.text);
    }
  }, [isTruncated]);

  if(props.text.length >0){
  return (
    <div >
      <p>{displayText} 
      <button className='text-dwd-primary font-semibold' onClick={toggleIsTruncated}>
        {isTruncated? '... Read More' : 'Show Less'}
      </button></p>
    </div>
  );}
  else{
    return (
        <div >
          {displayText}
        </div>
      );
  }



};

export default ReadMoreLess;