import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MyStyles } from "./stylesheet/MyStyles";
import { InfoContext } from "../context/InfoContext";
import { useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import hotlines from "../assets/hotlines-icon.png";
import safety from "../assets/safety-tips-icon.png";

//ICONS
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";

const OfflineScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [storedEmergencyHotlines, setStoredEmergencyHotlines] = useState([]);
  const [isEmergencyClicked, setEmergencyClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredEmergencyHotlines, setFilteredEmergencyHotlines] = useState(
    []
  );

  useEffect(() => {
    const fetchEmergencyHotlines = async () => {
      const storedHotlines = await SecureStore.getItemAsync(
        "emergencyhotlines"
      );
      if (storedHotlines) {
        setStoredEmergencyHotlines(JSON.parse(storedHotlines));
      }
    };
    fetchEmergencyHotlines();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = storedEmergencyHotlines.filter((emergency) => {
        return emergency.name.includes(search);
      });
      setFilteredEmergencyHotlines(filtered);
    } else {
      setFilteredEmergencyHotlines(storedEmergencyHotlines);
    }
  }, [search, storedEmergencyHotlines]);

  const handleCall = (contactNumber) => {
    const phoneNumber = `tel:${contactNumber}`;
    Linking.openURL(phoneNumber).catch((err) =>
      console.error("Error opening dialer: ", err)
    );
  };

  const handleSearch = (text) => {
    const sanitizedText = text.replace(/[^a-zA-Z\s.]/g, "");
    const formattedText = sanitizedText
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    setSearch(formattedText);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#BC0F0F",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={[
            MyStyles.scrollContainer,
            {
              backgroundColor: "#BC0F0F",
            },
          ]}
        >
          {!isEmergencyClicked && (
            <>
              <Text style={MyStyles.offHeader}>You are currently offline</Text>
              <View style={MyStyles.offCenteredView}>
                <View style={MyStyles.offBtnCardContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Readiness")}
                    style={MyStyles.offBtnCard}
                  >
                    <View style={MyStyles.offBtnContent}>
                      <MaterialCommunityIcons
                        name="lightbulb-on"
                        size={120}
                        color="#BC0F0F"
                      />
                      <Text
                        style={[
                          MyStyles.emergencyTitle,
                          { color: "#BC0F0F", fontSize: 30 },
                        ]}
                      >
                        READINESS
                      </Text>
                      <Text
                        style={[
                          MyStyles.emergencyMessage,
                          { color: "#BC0F0F", fontSize: 16 },
                        ]}
                      >
                        Stay Smart, Stay Safe
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setEmergencyClicked(true)}
                    style={MyStyles.offBtnCard}
                  >
                    <View style={MyStyles.offBtnContent}>
                      <MaterialIcons name="call" size={120} color="#BC0F0F" />
                      <Text
                        style={[
                          MyStyles.emergencyTitle,
                          { color: "#BC0F0F", fontSize: 30 },
                        ]}
                      >
                        HOTLINES
                      </Text>
                      <Text
                        style={[
                          MyStyles.emergencyMessage,
                          { color: "#BC0F0F", fontSize: 16 },
                        ]}
                      >
                        Call for Assistance
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          {isEmergencyClicked && (
            <View>
              <MaterialIcons
                onPress={() => setEmergencyClicked(false)}
                name="arrow-back-ios"
                size={24}
                color="#fff"
              />

              <Text
                style={[
                  MyStyles.header,
                  { marginTop: 20, marginBottom: 30, color: "#fff" },
                ]}
              >
                Hotlines
              </Text>

              <View style={{ gap: 15 }}>
                <View style={{ position: "relative" }}>
                  <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    style={[MyStyles.input, { paddingLeft: 40, height: 45 }]}
                    placeholder="Search..."
                  />
                  <MaterialIcons
                    name="search"
                    size={20}
                    color="#808080"
                    style={MyStyles.searchIcon}
                  />
                </View>

                {filteredEmergencyHotlines.length === 0 ? (
                  <Text style={{ color: "#fff", marginTop: 20 }}>
                    No results found
                  </Text>
                ) : (
                  filteredEmergencyHotlines.map((hotline) => (
                    <TouchableOpacity
                      key={hotline._id}
                      onPress={() => handleCall(hotline.contactnumber)}
                      style={[MyStyles.input, MyStyles.offHotlineItem]}
                    >
                      <MaterialIcons
                        name="call"
                        size={20}
                        color="#BC0F0F"
                        style={{ marginRight: 10 }}
                      />
                      <View>
                        <Text style={MyStyles.offHotlineName}>
                          {hotline.name.toUpperCase()}
                        </Text>
                        <Text
                          style={[
                            MyStyles.offHotlineName,
                            { fontFamily: "QuicksandSemiBold" },
                          ]}
                        >
                          {hotline.contactnumber}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OfflineScreen;
