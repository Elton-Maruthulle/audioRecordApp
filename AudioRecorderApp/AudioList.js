import React, { useState } from 'react';
import { View, FlatList, Text, Button } from 'react-native';

export default function AudioList({ audioFiles, onPlayAudio, onDeleteAudio }) {
  return (
    <View>
      <Text>Recorded Audio Files</Text>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Play" onPress={() => onPlayAudio(item.uri)} />
            <Button title="Delete" onPress={() => onDeleteAudio(item.uri)} />
          </View>
        )}
      />
    </View>
  );
}
