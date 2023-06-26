import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from '../../screens/Product';
import Cart from '../../screens/Cart';
import Checkout from '../../screens/Checkout';
import Tabs from '../Tab';
import { ChooseUserType ,Login , SignUp , SignUpAsProvider} from '../../screens/Sign';

export default function StackNavigator() {
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="Choose user type">
            <stack.Screen name="Choose user type" component={ChooseUserType} options={{ headerShown: false }} />
            <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <stack.Screen name="SignUpAsProvider" component={SignUpAsProvider} options={{ headerShown: false }} />
            <stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }} />
            <stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
            <stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
            {/* Bottom Navigation */}
            <stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
        </stack.Navigator>
    );
}



