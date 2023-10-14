/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useRef, useEffect } from 'react';
import BScroll from '@better-scroll/core';

function Better(props) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    new BScroll(wrapperRef.current, props.config ?? {});
  }, [props.config, props.children]);

  return (
    <div ref={wrapperRef} style={props.style}>
      <div style={{ ...(props.contentstyle ?? {}) }}>{props.children}</div>
    </div>
  );
}

export default Better;
