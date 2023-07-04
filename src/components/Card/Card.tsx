import { Text, TouchableOpacity, View } from 'react-native'

import { Minus } from 'phosphor-react-native'
import { styles } from './styles'

interface Participant {
  item: {
    id: string
    name: string
  }
  onPress: (id: string, name: string) => void
}

export function ParticipantCard({ item, onPress }: Participant) {
  return (
    <View style={styles.participantCard}>
      <Text style={styles.participantNameText}>{item.name}</Text>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onPress(item.id, item.name)}
      >
        <Minus color="#FFF" size={24} weight="bold" />
      </TouchableOpacity>
    </View>
  )
}
