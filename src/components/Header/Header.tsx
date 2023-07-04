import { Text } from 'react-native'
import { styles } from './styles'

interface HeaderProps {
  title: string
  date: string
}

export function Header({ title, date }: HeaderProps) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{date}</Text>
    </>
  )
}
