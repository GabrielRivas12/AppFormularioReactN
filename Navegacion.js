import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import Formulario from './Componentes/Formulario';

const StackForms = createStackNavigator();

function Navegacion() {
    return (
        <NavigationContainer>
            <StackForms.Navigator initialRouteName="Home">
                <StackForms.Screen name="Home" component={Home} />
                <StackForms.Screen name="Formulario" component={Formulario} />
            </StackForms.Navigator>
        </NavigationContainer>
    );
}

export default Navegacion;
