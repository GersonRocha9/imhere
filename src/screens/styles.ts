import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingVertical: 75,
    paddingHorizontal: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
    fontSize: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  formButton: {
    backgroundColor: '#31CF67',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  participantsContainer: {
    marginTop: 44,
  },
  listContainer: {
    marginTop: 16,
  },
  listEmptyText: {
    color: '#FDFCFE',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 28,
  },
})
