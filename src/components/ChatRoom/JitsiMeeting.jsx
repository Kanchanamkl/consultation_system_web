import React, { useRef, useEffect } from 'react';

const JitsiMeeting = () => {
  const jitsiContainerRef = useRef(null);
  const apiRef = useRef(null);

  const startMeeting = () => {
    if (apiRef.current) return;

    const domain = "142.93.215.196";
    const options = {
      roomName: "demo meet room",  
      width: '100%',
      height: '80%',
      parentNode: jitsiContainerRef.current,
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'desktop', 'fullscreen', 'fodeviceselection', 'hangup', 
          'profile', 'chat', 'recording', 'settings', 'raisehand', 'videoquality', 'tileview',
          'download', 'help', 'mute-everyone' 
        ]
      },
      configOverwrite: {
        disableDeepLinking: true,
      },
      userInfo: {
        displayName: "demo Client", 
      }
    };

    apiRef.current = new window.JitsiMeetExternalAPI(domain, options);

    apiRef.current.addListener('readyToClose', () => {
      endMeeting();
    });
  };

  const endMeeting = () => {
    if (apiRef.current) {
      apiRef.current.dispose(); 
      apiRef.current = null; 
 
    }
  };

  useEffect(() => {
    startMeeting();

    return () => {
      endMeeting();
    };
  }, []);

  return (
    <div>
      <div style={{ width: '800px', height: '600px' }} ref={jitsiContainerRef} />
    </div>
  );
};

export default JitsiMeeting;
