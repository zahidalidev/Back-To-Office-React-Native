import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Ionicons, Entypo, AntDesign } from "@expo/vector-icons"

import colors from '../config/colors';

function HomeCard({ data, index, showDetails }) {
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
                <View style={{ width: "85%", flexDirection: "column" }} >
                    <View>
                        <Text style={{ fontSize: RFPercentage(3.3) }} >{data.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: RFPercentage(0.6) }} >
                        <Ionicons name="md-people" size={RFPercentage(2.6)} color={colors.black} />
                        <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.2), color: colors.grey }} >{data.places}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => showDetails()} activeOpacity={0.5} >
                    <MaterialCommunityIcons name="chevron-right" size={RFPercentage(4)} color={colors.black} />
                </TouchableOpacity>
            </View>
            {/* card details */}

            {
                data.showDetails ?

                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4,
                        flexDirection: "column",
                        width: "90%",
                        backgroundColor: colors.white,
                        padding: RFPercentage(2),
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        marginTop: RFPercentage(1),
                        paddingBottom: RFPercentage(4),
                    }} >
                        {
                            data.details.map((item, index) =>
                                <View key={index} style={{
                                    flexDirection: "row",
                                    width: "90%",
                                    backgroundColor: colors.white,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: RFPercentage(2),
                                }} >
                                    <View style={{
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                        backgroundColor: colors.white,
                                        padding: 10,
                                        marginRight: RFPercentage(2)
                                    }} >
                                        {
                                            item.name1 === "cancel" ?
                                                <MaterialCommunityIcons name="cancel" color={colors.danger} size={RFPercentage(3.7)} />
                                                :
                                                (
                                                    item.name1 === "check" ?
                                                        <AntDesign name="check" color="green" size={RFPercentage(3.7)} />
                                                        :
                                                        <Entypo name="cross" color={colors.black} size={RFPercentage(3.7)} />
                                                )
                                        }
                                    </View>
                                    <View style={{
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                        backgroundColor: colors.white,
                                        padding: 10,
                                        marginRight: RFPercentage(2)
                                    }} >
                                        {
                                            item.name2 === "cancel" ?
                                                <MaterialCommunityIcons name="cancel" color={colors.danger} size={RFPercentage(3.7)} />
                                                :
                                                (
                                                    item.name2 === "check" ?
                                                        <AntDesign name="check" color="green" size={RFPercentage(3.7)} />
                                                        :
                                                        <Entypo name="cross" color={colors.black} size={RFPercentage(3.7)} />
                                                )
                                        }
                                    </View>
                                    <View style={{
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                        backgroundColor: colors.white,
                                        padding: 10
                                    }} >
                                        {
                                            item.name3 === "cancel" ?
                                                <MaterialCommunityIcons name="cancel" color={colors.danger} size={RFPercentage(3.7)} />
                                                :
                                                (
                                                    item.name3 === "check" ?
                                                        <AntDesign name="check" color="green" size={RFPercentage(3.7)} />
                                                        :
                                                        <Entypo name="cross" color={colors.black} size={RFPercentage(3.7)} />
                                                )
                                        }
                                    </View>
                                </View>

                            )
                        }

                    </View> : null}

        </View>

    );
}

export default HomeCard;