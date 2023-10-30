import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUri, setAudioUri] = useState(null);
  const recordingObject = new Audio.Recording();

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await recordingObject.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recordingObject.startAsync();
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      try {
        await recordingObject.stopAndUnloadAsync();
        setRecording(false);
        const uri = recordingObject.getURI();
        setAudioUri(uri);
      } catch (error) {
        console.error('Error stopping recording:', error);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (recording) {
        recordingObject.stopAndUnloadAsync();
      }
    };
  }, []);

  return (
    <View>
      <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
      {audioUri && <Text>Recorded Audio URI: {audioUri}</Text>}
    </View>
  );
}
