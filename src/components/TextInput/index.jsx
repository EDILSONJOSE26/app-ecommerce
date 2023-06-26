import { TextInput} from 'react-native'
import React from 'react'
import { GetLangStyleForText } from '../../theme/constants'

const CustomTextInput = (props) => {
    
  return (
    <TextInput {...props}  style={[GetLangStyleForText('ar'),{textAlign : 'right' , borderRadius : 2 , ...props.style}]} />
  )
}

export default CustomTextInput
