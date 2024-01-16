import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../collectionStyles'
import { Images } from '../../../assets/images/images'

type propss = {
  title: string,
  icon: string
}
export const CategorieItem = ({title, icon}: propss) => {
  return (
    <View style={styles.categorie}>
      <TouchableOpacity>
        <View style={[styles.btn, {marginLeft: 8}]}>
          <View style={styles.imgCont}>
           <Image source={Images.man} style={styles.img}/>
          </View>
          <Text> {title}</Text>
        </View>
      </TouchableOpacity>
    </View>
   
  )
}
