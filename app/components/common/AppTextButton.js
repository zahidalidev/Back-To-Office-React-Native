import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../../config/colors';

function AppTextButton({ title, onSubmit, backgroundColor = colors.primary }) {
    return (
        <Button color={backgroundColor} onPress={() => onSubmit()} style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            flexDirection: "row",
            width: "80%",
            backgroundColor: backgroundColor,
            padding: RFPercentage(1),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
        }} >
            <Text style={{ textTransform: "capitalize", color: colors.white, fontSize: RFPercentage(3) }} >{title}</Text>
        </Button>
    );
}


export default AppTextButton;