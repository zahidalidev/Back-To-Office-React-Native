import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import colors from '../config/colors';

function HostoriqueCard({ data, index }) {
    return (
        <View style={{ margin: RFPercentage(1), justifyContent: "center", alignItems: "center" }} >
            {/* card header */}
            <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                flexDirection: "row",
                width: "90%",
                backgroundColor: colors.white,
                padding: RFPercentage(2),
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 5,
                marginTop: index == 0 ? RFPercentage(3.4) : RFPercentage(1),
            }} >
                <View style={{ width: "60%", flexDirection: "column" }} >
                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ fontWeight: "bold", marginLeft: RFPercentage(1), fontSize: RFPercentage(2.2), color: colors.grey }} >{data.date}</Text>
                    </View >
                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ marginLeft: RFPercentage(1), color: colors.black, fontWeight: "bold", fontSize: RFPercentage(3.3), marginTop: RFPercentage(0.6) }} >{data.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: RFPercentage(0.6) }} >
                        <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.2), color: colors.grey }} >{data.subTitle}</Text>
                    </View>
                </View>
                <View  >
                    <Text style={{ color: colors.mediumGrey, fontSize: RFPercentage(2.4) }} >{data.description}</Text>
                </View>
            </View>
        </View>

    );
}

export default HostoriqueCard;