import React, {
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

const AudioPlayer = styled.audio`
  display: block;
  height: 50px;
  width: 50px;
`;

const IndexPage = () => {
  const [
    elementText,
    setElementText,
  ] = useState('');

  const playSound = e => {
    const clip = document.getElementById(
      e.target.childNodes[0].id
    );
    clip.play();
    setElementText(clip.dataset.text);
  };

  const handleKeyPressed = e => {
    const returnCode = String.fromCharCode(
      e.keyCode
    );
    const audioElements = Array.from(
      document.querySelectorAll('audio')
    ).map(a => a.id);
    if (
      audioElements.includes(returnCode)
    ) {
      const clip = document.getElementById(
        returnCode
      );
      setElementText(clip.dataset.text);
      clip.play();
    }
  };

  useEffect(() => {
    document.addEventListener(
      'keydown',
      handleKeyPressed
    );
    return () => {
      document.removeEventListener(
        'keydown'
      );
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="key-pad">
        <div
          className="drum-pad"
          id="drumpad-Q"
          onClick={playSound}
        >
          <AudioPlayer
            id="Q"
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            data-text="Q clip"
          ></AudioPlayer>
          Q
        </div>
        <div
          className="drum-pad"
          id="drumpad-W"
          onClick={playSound}
        >
          <AudioPlayer
            id="W"
            className="clip"
            data-text="W clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ></AudioPlayer>
          W
        </div>
        <div
          className="drum-pad"
          id="drumpad-E"
          onClick={playSound}
        >
          <AudioPlayer
            id="E"
            className="clip"
            data-text="E clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ></AudioPlayer>
          E
        </div>
        <div
          className="drum-pad"
          id="drumpad-A"
          onClick={playSound}
        >
          <AudioPlayer
            id="A"
            className="clip"
            data-text="A clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ></AudioPlayer>
          A
        </div>
        <div
          className="drum-pad"
          id="drumpad-S"
          onClick={playSound}
        >
          <AudioPlayer
            id="S"
            className="clip"
            data-text="S clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ></AudioPlayer>
          S
        </div>
        <div
          className="drum-pad"
          id="drumpad-D"
          onClick={playSound}
        >
          <AudioPlayer
            id="D"
            className="clip"
            data-text="D clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ></AudioPlayer>
          D
        </div>
        <div
          className="drum-pad"
          id="drumpad-Z"
          onClick={playSound}
        >
          <AudioPlayer
            id="Z"
            className="clip"
            data-text="Z clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ></AudioPlayer>
          Z
        </div>
        <div
          className="drum-pad"
          id="drumpad-X"
          onClick={playSound}
        >
          <AudioPlayer
            id="X"
            className="clip"
            data-text="X clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ></AudioPlayer>
          X
        </div>
        <div
          className="drum-pad"
          id="drumpad-C"
          onClick={playSound}
        >
          <AudioPlayer
            id="C"
            className="clip"
            data-text="C clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ></AudioPlayer>
          C
        </div>
      </div>
      <div id="display">
        {elementText}
      </div>
    </div>
  );
};

export default IndexPage;
