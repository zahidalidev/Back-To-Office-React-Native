import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import colors from "../config/colors";

function AppDrawer({ navigation }) {
    const [active, setActive] = React.useState('Deconnexion');


    const handleNavigate = (current) => {
        setActive(current);
        navigation.navigate(current)
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity style={{ marginTop: RFPercentage(3.4) }} onPress={() => handleNavigate("Reservation")} >
                <Text style={{ fontSize: RFPercentage(2.3), color: active === "Reservation" ? colors.danger : colors.primary }} >Reservation</ Text>
            </ TouchableOpacity >
            <TouchableOpacity style={{ marginTop: RFPercentage(3.4) }} onPress={() => handleNavigate("Reservation")} >
                <Text style={{ fontSize: RFPercentage(2.3), color: active === "Reservation" ? colors.danger : colors.primary }} >Reservation</ Text>
            </ TouchableOpacity >
            <TouchableOpacity style={{ marginTop: RFPercentage(3.4) }} onPress={() => handleNavigate("Deconnexion")} >
                <Text style={{ fontSize: RFPercentage(2.3), color: active === "Deconnexion" ? colors.danger : colors.primary }} >Deconnexion</ Text>
            </ TouchableOpacity >
        </ View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: RFPercentage(5),
        justifyContent: "flex-start",
        paddingVertical: RFPercentage(2.4),
    }
})

export default AppDrawer;