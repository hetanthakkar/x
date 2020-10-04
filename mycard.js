import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Mycard(props) {
  return (
    <View style={{ margin: 1 }}>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <View>
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source={{
              uri: props.photo,
            }}
          />
        </View>
        <View>
          <Card.Content>
            <Title>{props.name}</Title>
            <Paragraph>{props.chat}</Paragraph>
          </Card.Content>
        </View>
      </View>
    </View>
  );
}
