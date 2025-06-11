import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateUserView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreate = () => {
    console.log('Usuario creado:', { username, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Usuario</Text>
      <TextInput style={styles.input} placeholder="Usuario" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Registrar" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 },
});