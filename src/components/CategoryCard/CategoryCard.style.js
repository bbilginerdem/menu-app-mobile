import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange' },
  categoryContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderWidth: 0.8,
  },
  image: {
    width: width / 5,
    height: height / 10,
    resizeMode: 'stretch',
    marginLeft: 18,
    borderRadius: 25,
    backgroundColor: 'white',
    // minWidth: 80,
  },
  text: {
    color: 'black',
  },
});
