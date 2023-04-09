import { useNavigation } from "@react-navigation/native";
import React from "react";
import { 
 View, 
 Text, 
 StyleSheet, 
 TextInput, 
 TouchableOpacity 
} from "react-native";

import { useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as Animatable from 'react-native-animatable'

const schema = yup.object({
    matricula: yup.string().required('Informe o seu Número de matrícula RA:'),
    senha: yup.string().min(6, 'A senha deve conter ao menos 6 digitos').required('Informe a sua senha:'),
    username: yup.string().required('Informe o seu nome:')
})

export default function Register() {
    const navigation = useNavigation();     

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    function handleRegister(data){
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' dalay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Registro</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Controller
                    control={control}
                    name='matricula'
                    render={({ field: {onChange, onBlur, value} }) => (
                        <TextInput
                            placeholder="Digite o seu Número de Matrícula:"
                            style={[styles.input, {
                                borderWidth: errors.matricula && 1,
                                borderColor: errors.matricula && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.matricula && <Text style={styles.labelError}>{errors.matricula?.message}</Text>}

                <Controller
                    control={control}
                    name='senha'
                    render={({ field: {onChange, onBlur, value} }) => (
                        <TextInput
                            placeholder="Digite a sua Senha:"
                            style={[styles.input, {
                                borderWidth: errors.senha && 1,
                                borderColor: errors.senha && '#ff375b'
                            }]}
                            secureTextEntry={true}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}

                <Controller
                    control={control}
                    name='username'
                    render={({ field: {onChange, onBlur, value} }) => (
                        <TextInput
                            placeholder="Digite o seu nome:"
                            style={[styles.input, {
                                borderWidth: errors.username && 1,
                                borderColor: errors.username && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

                <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(handleRegister)}
                >
                    <Text style={styles.buttonText}>Registrar-se</Text>
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
        borderColor: '#E0E0E0'
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
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }
})