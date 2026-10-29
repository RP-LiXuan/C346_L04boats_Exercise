import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons/";

const Boat = ({name, description, icon_name, icon_color, poster, name_color}) => {
    return (
        <View>
            <Text style={{color:name_color, fontWeight:'bold', fontSize:30}}>
                <FontAwesome6 name={icon_name} size={30} color={icon_color} />
                {name}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={poster}
                   style={{width:400, height:500}}/>
        </View>
    );
};

export default Boat;
