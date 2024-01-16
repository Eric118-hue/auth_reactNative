import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './collectionStyles'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { IconImages } from '../../assets/icons/searcg'
import {CategorieItem} from './components/categories'


function CollectionScreen() {
  const data = [
    {icon: 'man', name: 'Homme'},
    {icon: 'woman', name: 'Femme'},
    {icon: 'child', name: 'Enfant'}
  ]
  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <View>
      <Text style={styles.white}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={[styles.white, {fontWeight: 'bold', fontSize: 25}]}>E-tsena</Text>
        <Image source={IconImages.cart} />
      </View>
      <View style={{marginTop: 10}}>
        <Text style={[styles.white, {marginLeft: 8, fontWeight: 'bold', fontSize: 15}]}>CATEGORIES</Text>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => <CategorieItem icon={item.icon} title={item.name} />}
          keyExtractor={item => item.icon}
        />
      </View>
    </View>
    
  )
}

export default CollectionScreen