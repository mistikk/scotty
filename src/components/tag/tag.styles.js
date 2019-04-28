import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  text: {
    color: '$white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  textWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginRight: 8,
    height: 22,
    backgroundColor: '$grayBackground',
    borderRadius: 50,
  },
});
