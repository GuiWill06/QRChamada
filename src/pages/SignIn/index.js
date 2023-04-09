import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
 View,
 Text,
 StyleSheet,
 TextInput,
 TouchableOpacity 
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { Colors } from "react-native/Libraries/NewAppScreen";

export default function SignIn() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
             <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
             </Animatable.View>

             <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <TextInput
                    placeholder="Digite o seu Número de Matrícula:"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Digite a sua Senha:"
                    style={styles.input}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonRegister}
                onPress={ () => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>


             </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '7%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    input:{
        width: '90%',
        height: 42,
        backgroundColor: '#F4F3F3',
        marginBottom: 7,
        marginTop: 12,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14
    },
    registerText:{
        color: '#a1a1a1',
        alignSelf: 'center'
    }
})