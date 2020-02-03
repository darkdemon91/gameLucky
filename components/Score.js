import React from 'react';
import { View, Text } from 'react-native';

const STYLE = {
    SCORE_CONTAINER: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginBottom: 15
    },
    SCORE_TEXT: {
        fontSize: 24,
        fontWeight: 'bold'
    }
};

export const Score = ({ score }) => (
    <View style={STYLE.SCORE_CONTAINER}>
        <Text style={STYLE.SCORE_TEXT}>
            {score}
        </Text>
    </View>
);
