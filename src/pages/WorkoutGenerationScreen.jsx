import React from "react";
import functionality from "../../images/goals/functionality.png";
import endurance from "../../images/goals/endurance.png";
import strength from "../../images/goals/strength.png";
import weight_loss from "../../images/goals/weight_loss.png";
import fat_loss from "../../images/goals/fat_loss.png";
import mobility from "../../images/goals/mobility.png";
import back from "../../images/muscle_groups/back.png";
import bicep from "../../images/muscle_groups/biceps.png";
import random from "../../images/muscle_groups/random.png";
import cardio from "../../images/muscle_groups/cardio-vascular.png";
import shoulders from "../../images/muscle_groups/shoulders.png";
import chest from "../../images/muscle_groups/chest.png";
import qrcode from "../../images/qr-code.png";
import homeImage from "../../images/home.png";

import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const { height, width } = Dimensions;

const WorkoutGeneratorScreen = ({ navigation }) => {
  const [workoutForm, setWorkoutForm] = React.useState({
    goals: [],
    muscle_groups: [],
    duration: 0,
  });
  const [step, setStep] = React.useState(0);

  const goals = [
    {
      name: "Functionality",
      image: functionality,
    },
    {
      name: "Strength",
      image: endurance,
    },
    {
      name: "Endurance",
      image: strength,
    },
    {
      name: "Weight loss",
      image: weight_loss,
    },
    {
      name: "Mobility",
      image: mobility,
    },
    {
      name: "Fat Loss",
      image: fat_loss,
    },
  ];

  const muscle_groups = [
    {
      name: "Random",
      image: random,
    },
    {
      name: "biceps",
      image: bicep,
    },
    {
      name: "Cardio-Vascular",
      image: cardio,
    },
    {
      name: "Chest",
      image: chest,
    },
    {
      name: "Upper and Lower Back",
      image: back,
    },
    {
      name: "Shoulders",
      image: shoulders,
    },
  ];

  const addOrRemoveFromMuscleGroup = (item) => {
    console.log(item);
    let new_target_groups = [];
    if (existsInList(workoutForm.muscle_groups, item)) {
      new_target_groups = workoutForm.muscle_groups.filter((i) => i !== item);
    } else {
      new_target_groups = workoutForm.muscle_groups.concat([item]);
    }
    setWorkoutForm({ ...workoutForm, muscle_groups: new_target_groups });
  };

  const addOrRemoveFromGoal = (item) => {
    console.log(item);
    let new_goals = [];
    if (existsInList(workoutForm.goals, item)) {
      new_goals = workoutForm.goals.filter((i) => i !== item);
    } else {
      new_goals = workoutForm.goals.concat([item]);
    }
    setWorkoutForm({ ...workoutForm, goals: new_goals });
  };

  const existsInList = (list, item) => {
    return list.findIndex((i) => i == item) > -1;
  };

  console.log(workoutForm);

  return (
    <View
      style={{
        paddingHorizontal: step == 3 ? 0 : 8,
        minHeight: "100%",
        width: "100%",
      }}
    >
      {step != 3 && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 40,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ position: "absolute", left: 20, fontSize: 24, top: 40 }}
            onPress={() => {
              if (step == 0) {
                navigation.navigate("Home");
              }
              setStep(step - 1);
            }}
          >{`<`}</Text>
          <Text
            style={{ fontSize: 24, fontStyle: "italic", fontWeight: "600" }}
          >
            Workout Generator
          </Text>
        </View>
      )}
      {step == 0 && (
        <View>
          <Text style={{ textAlign: "center", padding: 20, fontSize: 16 }}>
            What is your goal for today's workout?
          </Text>
          <FlatList
            data={goals}
            numColumns={2}
            renderItem={({ item }) => {
              let isSelected = false;
              if (workoutForm.goals.findIndex((a) => a == item.name) !== -1) {
                isSelected = true;
              }
              return (
                <TouchableOpacity
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                    overflow: "hidden",
                    padding: 4,
                  }}
                  onPress={() => {
                    addOrRemoveFromGoal(item.name);
                  }}
                >
                  <ImageBackground
                    source={item.image}
                    style={{
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      borderColor: isSelected ? "#76FF73" : "#FFF",
                      borderWidth: 4,
                    }}
                    imageStyle={{ borderRadius: 10 }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        color: isSelected ? "#B0FF73" : "#FFF",
                        fontStyle: isSelected ? "normal" : "italic",
                        fontWeight: "900",
                      }}
                    >
                      {item.name}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 20,
              padding: 20,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                backgroundColor: "#000",
                padding: 20,
                borderRadius: 40,
                width: "80%",
              }}
              onPress={() => {
                setStep(step + 1);
              }}
            >
              <Text
                style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step == 1 && (
        <View>
          <Text style={{ textAlign: "center", padding: 20, fontSize: 16 }}>
            Select the muscle group you want to target
          </Text>
          <FlatList
            data={muscle_groups}
            numColumns={2}
            renderItem={({ item }) => {
              let isSelected = false;
              if (
                workoutForm.muscle_groups.findIndex((a) => a == item.name) !==
                -1
              ) {
                isSelected = true;
              }
              return (
                <TouchableOpacity
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                    overflow: "hidden",
                    padding: 4,
                  }}
                  onPress={() => {
                    addOrRemoveFromMuscleGroup(item.name);
                  }}
                >
                  <ImageBackground
                    source={item.image}
                    style={{
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      borderColor: isSelected ? "#76FF73" : "#FFF",
                      borderWidth: 4,
                    }}
                    imageStyle={{ borderRadius: 10 }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        color: isSelected ? "#B0FF73" : "#FFF",
                        fontStyle: isSelected ? "normal" : "italic",
                        fontWeight: "900",
                      }}
                    >
                      {item.name}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 20,
              padding: 20,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                backgroundColor: "#000",
                padding: 20,
                borderRadius: 40,
                width: "80%",
              }}
              onPress={() => {
                setStep(step + 1);
              }}
            >
              <Text
                style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step == 2 && (
        <View>
          <ScrollView
            style={{
              height: "90%",
              width: "100%",
              position: "relative",
            }}
          >
            <View style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  paddingTop: 20,
                }}
              >
                Selected Muscle Groups
              </Text>
              {workoutForm.muscle_groups.map((item, index) => {
                return (
                  <Text style={{ fontSize: 16, marginVertical: 4 }}>
                    {index + 1}. {item}
                  </Text>
                );
              })}
            </View>
            <View style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Selected Targets
              </Text>
              {workoutForm.goals.map((item, index) => {
                return (
                  <Text style={{ fontSize: 16, marginVertical: 4 }}>
                    {index + 1}. {item}
                  </Text>
                );
              })}
            </View>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                paddingBottom: 120,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  paddingTop: 20,
                }}
              >
                Workout Duration (mins)
              </Text>
              <TextInput
                autoFocus
                placeholder="Input duration in minutes"
                value={workoutForm.duration}
                keyboardType="numeric"
                onChangeText={(text) => {
                  if (parseInt(Number(text))) {
                    setWorkoutForm({ ...workoutForm, duration: Number(text) });
                  }
                }}
                style={{ marginVertical: 12, fontSize: 16 }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              padding: 20,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                padding: 20,
                borderRadius: 40,
                width: "48%",
              }}
              onPress={() => {
                setStep(step - 1);
              }}
            >
              <Text
                style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                padding: 20,
                borderRadius: 40,
                width: "48%",
              }}
              onPress={() => {
                setStep(step + 1);
              }}
            >
              <Text
                style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}
              >
                Generate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step == 3 && (
        <View style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <ImageBackground
              source={homeImage}
              style={{
                padding: 0,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
              imageStyle={{
                width: "100%",
                height: "100%",
                opacity: 0.3,
              }}
            >
              <Text>Your workout is ready</Text>
              <Image
                source={qrcode}
                style={{ width: 120, height: 120, marginVertical: 40 }}
              />
              <Text>Scan the QR Code with your phone camera</Text>
            </ImageBackground>
          </View>
        </View>
      )}
    </View>
  );
};

export default WorkoutGeneratorScreen;
