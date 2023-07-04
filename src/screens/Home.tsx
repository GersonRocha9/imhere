import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ParticipantCard } from '../components/Card/Card'
import { Plus } from 'phosphor-react-native'
import { styles } from './styles'
import { useState } from 'react'

export interface Participant {
  id: string
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [participantName, setParticipantName] = useState<string>('')

  function handleAddParticipant() {
    if (participantName) {
      setParticipants((oldParticipants) => [
        ...oldParticipants,
        {
          id: String(Math.random()),
          name: participantName,
        },
      ])
      setParticipantName('')
    }
  }

  function handleOpenDeleteAlert(id: string, name: string) {
    Alert.alert('Remover', `Remover o ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => handleRemoveParticipant(id),
      },
    ])
  }

  function handleRemoveParticipant(id: string) {
    setParticipants((oldParticipants) =>
      oldParticipants.filter((participant) => participant.id !== id),
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Aniversário 26 anos" date="Quarta, 28 de Junho de 2023" />

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styles.textInput}
          value={participantName}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity
          style={styles.formButton}
          onPress={handleAddParticipant}
        >
          <Plus color="#FFF" size={24} weight="bold" />
        </TouchableOpacity>
      </View>

      <View style={styles.participantsContainer}>
        <Text style={styles.title}>Participantes</Text>

        <FlatList
          data={participants}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
          renderItem={({ item }) => (
            <ParticipantCard
              item={item}
              onPress={(id: string, name: string) =>
                handleOpenDeleteAlert(id, name)
              }
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />

        {participants.length > 0 && <Footer participants={participants} />}
      </View>
    </View>
  )
}
