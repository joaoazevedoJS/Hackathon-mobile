import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 4
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 40,
  },

  header: {
    alignItems: "center",
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    marginBottom: 8,
    fontFamily: 'OpenSans_600SemiBold'
  },

  description: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
  },
})