import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

function ForgotPassword() {
  const [number, setNumber] = useState(0)

 

  return (
    <View>
        <Text>{number}</Text>
    </View>
    )
}

export default ForgotPassword