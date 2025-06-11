import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UpdateClientView({ route }) {
  const { client } = route.params;

  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);

  const handleUpdate = () => {
    console.log('Cliente actualizado:', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Cliente</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Button title="Guardar Cambios" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 },
});