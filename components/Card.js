import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export const Card = ({ isOpen, clickCard, name, src, color }) => {
    const CardSource = isOpen ? src : FontAwesome;
    const SOURCE = {
        ICON_NAME: isOpen ? name : 'question-circle',
        ICON_COLOR: isOpen ? color : '#393939'
    };
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight
                onPress={clickCard}
                activeOpacity={0.75}
                underlayColor={'#f1f1f1'}
            >
                <CardSource
                    size={50}
                    name={SOURCE.ICON_NAME}
                    color={SOURCE.ICON_COLOR}
                />
            </TouchableHighlight>
        </View>
    )
};
