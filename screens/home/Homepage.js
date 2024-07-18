
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Provider,
  Appbar,
  Snackbar,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const Homepage = () => {
  return (
    <Provider>
      <Stack.Navigator>
        <Stack.Screen
          name="Homepage"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookNow"
          component={BookNowScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

const HomeScreen = ({ navigation }) => {
  const [paid, setPaid] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const onToggleSnackBar2 = () => setVisible2(!visible2);
  const onDismissSnackBar2 = () => setVisible2(false);

  const renderButton = (targetScreen) => (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() => navigation.navigate(paid ? targetScreen : "BookNow")}
    >
      {paid ? "Open Now" : "Book Now"}
    </Button>
  );

  const renderFreeSupportButton = () => (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() => navigation.navigate("FreeSupport")}
    >
      Open Now
    </Button>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar} mode="small">
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Avatar.Image
            size={40}
            source={require("../../assets/images/gyma.jpg")}
            style={{ marginRight: 6 }}
          />
        </TouchableOpacity>
        <Appbar.Content titleStyle={styles.appbarTitle} title="Hi, Rahul" />
        <Appbar.Action icon="magnify" onPress={onToggleSnackBar2} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headTitleSection}>
          <Text style={styles.sectionTitle}>News On Zerodope</Text>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.cardsContainer}>
          <View style={styles.cards}>
            <Card style={styles.card}>
              <Card.Cover source={require("../../assets/images/gymi.jpg")} />
              <Card.Content>
                <Title>Consultation Scheduling</Title>
                <Paragraph>Free Diet Plan, Free Workout Plan</Paragraph>
              </Card.Content>
              <Card.Actions>{renderButton("ConsultSchedule")}</Card.Actions>
            </Card>
            <Card style={styles.card}>
              <Card.Cover source={require("../../assets/images/gyma.jpg")} />
              <Card.Content>
                <Title>Free Support</Title>
                <Paragraph>Free Diet Plan, Free Workout Plan</Paragraph>
              </Card.Content>
              <Card.Actions>{renderFreeSupportButton()}</Card.Actions>
            </Card>
          </View>
        </ScrollView>
        <View style={styles.headTitleSection}>
          <Text style={styles.sectionTitle}>Customise Plan</Text>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.cardsContainer}>
          <View style={styles.cards}>
            <Card style={styles.card}>
              <Card.Cover source={require("../../assets/images/gymi.jpg")} />
              <Card.Content>
                <Title>WorkOut Plan</Title>
                <Paragraph>Audio, Video & Text</Paragraph>
              </Card.Content>
              <Card.Actions>{renderButton("WorkOutPlan")}</Card.Actions>
            </Card>
            <Card style={styles.card}>
              <Card.Cover source={require("../../assets/images/gymi.jpg")} />
              <Card.Content>
                <Title>DietPlan</Title>
                <Paragraph>Audio, Video & Text</Paragraph>
              </Card.Content>
              <Card.Actions>{renderButton("DietPlan")}</Card.Actions>
            </Card>
            <Card style={styles.card}>
              <Card.Cover source={require("../../assets/images/gymi.jpg")} />
              <Card.Content>
                <Title>Body Building</Title>
                <Paragraph>Audio, Video & Text</Paragraph>
              </Card.Content>
              <Card.Actions>{renderButton("BodyBuild")}</Card.Actions>
            </Card>
          </View>
        </ScrollView>
      </ScrollView>
      <Snackbar
        visible={visible2}
        onDismiss={onDismissSnackBar2}
        duration={Snackbar.DURATION_SHORT}
      >
        Search
      </Snackbar>
    </View>
  );
};

const BookNowScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Book Now" titleStyle={styles.appbarTitle} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headTitleSection}>
          <Text style={styles.sectionTitle}>Choose Your Plan</Text>
        </View>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          <View style={styles.bookNowcards}>
            <Card style={styles.bookCard}>
              <Card.Cover source={require("../../assets/images/gyma.jpg")} />
              <Card.Content>
                <Title>Consultation Scheduling</Title>
                <Paragraph>Free Diet Plan, Free Workout Plan</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" style={styles.button}>
                  Book Now
                </Button>
              </Card.Actions>
            </Card>
            <Card style={styles.bookCard}>
              <Card.Cover source={require("../../assets/images/gyma.jpg")} />
              <Card.Content>
                <Title>Free Support</Title>
                <Paragraph>Free Diet Plan, Free Workout Plan</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" style={styles.button}>
                  Book Now
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FAB917",
  },
  appbar: {
    minHeight: 60,
    elevation: 1, // Add elevation for shadow effect
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 1, // Shadow radius
  },
  appbarTitle: {
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  headTitleSection: {
    borderTopWidth: 1, // Add top border
    borderBottomWidth: 1, // Add bottom border
    borderColor: "#333", // Color of the border
    width: "100%", // Ensure it takes the full width
    marginVertical: 9,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    paddingVertical: 4, // Optional: Add some padding for better spacing
    paddingHorizontal: 4, // Optional: Add horizontal padding
  },
  cardsContainer: {
    flexDirection: "row",
    paddingHorizontal: 4,
    marginVertical: 6,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  bookNowcards: {
    flexDirection: "column",
    paddingVertical: 8,
  },
  card: {
    width: 250,
    marginHorizontal: 6,
  },
  bookCard: {
    width: 340,
    margin: 6,
  },
});

export default Homepage;
