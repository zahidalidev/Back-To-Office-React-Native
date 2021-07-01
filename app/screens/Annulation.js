import React from 'react';
import { StyleSheet, View, StatusBar, Text, Switch } from 'react-native';
import { Appbar } from "react-native-paper"
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import AppTextButton from '../components/common/AppTextButton';

//config
import colors from '../config/colors';

function Annulation(props) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Appbar style={{ elevation: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.openDrawer()} icon="menu" />
                <Appbar.Content style={{ marginLeft: RFPercentage(11) }} titleStyle={{ fontSize: RFPercentage(3) }} title="Annulation" />
            </Appbar>

            <View style={{ flex: 1, width: "100%", flexDirection: "column", justifyContent: "center", alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(-6), flexDirection: 'row', width: "75%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: colors.primary, fontSize: RFPercentage(2.8), fontWeight: "bold" }} >Votre reservation a bien annule</Text>
                </View>
            </View>

            <View style={{ position: "absolute", bottom: RFPercentage(3), marginTop: RFPercentage(2), width: "100%", alignItems: "center", justifyContent: "center" }} >
                <AppTextButton title="Retour a la page daccueil" onSubmit={() => props.navigation.navigate('Deconnexion')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default Annulation;