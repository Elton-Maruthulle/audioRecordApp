import React, { useState } from 'react';
import { View } from 'react-native';
import AudioRecorder from './AudioRecorder';
import AudioList from './AudioList';
import AudioPlayer from './AudioPlayer';

export default function App() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handlePlayAudio = (audioUri) => {
    setCurrentAudio(audioUri);
  };

  const handleDeleteAudio = (audioUri) => {
    // Implement audio deletion logic here and update audioFiles state
  };

  return (
    <View>
      <AudioRecorder />
      <AudioList audioFiles={audioFiles} onPlayAudio={handlePlayAudio} onDeleteAudio={handleDeleteAudio} />
      {currentAudio && <AudioPlayer audioUri={currentAudio} />}
    </View>
  );
}
