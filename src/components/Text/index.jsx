import {  Text } from 'react-native'
import React from 'react'
import { GetLangStyleForText } from '../../theme/constants'

const CustomText = ({style , title}) => {
  return (
      <Text style = {[GetLangStyleForText('ar') , style]}>{title}</Text>
  )
}

export default CustomText

