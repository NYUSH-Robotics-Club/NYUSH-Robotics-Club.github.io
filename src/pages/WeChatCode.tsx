import React from 'react';

function WeChatCode() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(87, 59, 110)'
      }}
    >
      <img
        src="/images/WeChatCode.jpg"
        alt="WeChat Code"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
      />
    </div>
  );
}

export default WeChatCode;
