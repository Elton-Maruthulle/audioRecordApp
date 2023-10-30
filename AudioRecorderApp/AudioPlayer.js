import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioPlayer({ audioUri }) {
  const [sound, setSound] = useState(null);

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
    setSound(sound);
    await sound.playAsync();
  };

  return (
    <View>
      <Button title="Play Audio" onPress={playAudio} />
    </View>
  );
}
