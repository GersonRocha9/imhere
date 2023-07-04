import { Text, View } from 'react-native'

import { Participant } from '../../screens/Home'
import { styles } from './styles'

interface FooterProps {
  participants: Participant[]
}

export function Footer({ participants }: FooterProps) {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        {participants.length === 1
          ? `${participants.length} participante confirmado`
          : `${participants.length} participantes confirmados`}
      </Text>
    </View>
  )
}
