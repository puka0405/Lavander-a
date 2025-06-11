import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateClientView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreate = () => {
    console.log('Cliente creado:', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cliente</Text>
      <TextInput style={styles.input} placeholder="Nombre" onChangeText={setName} value={name} />
      <TextInput style={styles.input} placeholder="Correo" onChangeText={setEmail} value={email} />
      <Button title="Guardar" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 },
});