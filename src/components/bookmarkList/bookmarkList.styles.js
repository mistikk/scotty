import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  tagWrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingLeft: 20,
    height: '100%',
    width: '100%',
  },
  deleteButtonText: {
    color: '$white',
  },
});
