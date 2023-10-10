'use client';

declare global {
  interface Window {
    scriptsLoaded?: boolean;
  }
}

import React, { useEffect, useState } from 'react';

const ClientSideComponent: React.FC = () => {
  const { useRouter } = require('next/router');
  const router = useRouter();

  // Your previous useEffect logic here, modified to use `router`

  return null;
};

export default function Game() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="/static/games/kirby/style.css" />
      <canvas id="canvas">
        HTML5 canvas appears to be unsupported in the current browser.<br />
        Please try updating or use a different browser.
      </canvas>
      <div id="status">
        <div id="status-progress" style={{ display: 'none' }}>
          <div id="status-progress-inner"></div>
        </div>
        <div id="status-indeterminate" style={{ display: 'none' }}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="status-notice" className="godot" style={{ display: 'none' }}></div>
      </div>
      {isClient && <ClientSideComponent />}
    </div>
  );
}
