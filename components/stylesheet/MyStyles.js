import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

export const MyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE5EB",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: RFPercentage(3),
    color: "#04384E",
    fontFamily: "REMBold",
  },
  subHeader: {
    fontSize: RFPercentage(2.4),
    fontFamily: "REMMedium",
    color: "#04384E",
    marginTop: 20,
  },
  textMedium: {
    fontSize: RFPercentage(2),
    color: "#808080",
    fontFamily: "QuicksandMedium",
  },
  scrollContainer: { padding: 20, flexGrow: 1, backgroundColor: "#DCE5EB" },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /*---------------------------------------ROW & COLUMN---------------------------------------*/
  rowAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnAlignment: {
    flexDirection: "column",
    alignItems: "center",
  },
  // tabBarLabel: {
  //   paddingBottom: 5,
  //   fontSize: 16,
  //   fontFamily: "QuicksandSemiBold",
  //   textAlign: "center",
  //   marginBottom: 5,
  // },

  /*---------------------------------------PICKER, INPUT---------------------------------------*/
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: RFPercentage(6),
    borderWidth: 1,
    borderColor: "#ACACAC",
    borderRadius: 15,
    fontSize: RFPercentage(2),
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontFamily: "QuicksandMedium",
  },
  inputLabel: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },
  datetimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  /*---------------------------------------BUTTONS---------------------------------------*/
  button: {
    backgroundColor: "#0E94D3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "REMBold",
    fontSize: RFPercentage(2.4),
  },

  formMessage: {
    fontSize: RFPercentage(2),
    color: "#808080",
    fontFamily: "QuicksandSemiBold",
  },

  /*---------------------------------------SUGGESTION---------------------------------------*/
  suggestionContainer: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 200, // Keeps the max height at 200px
    marginTop: 4,
    padding: 5, // Optional: Adds padding inside the container for better spacing
  },

  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  /*---------------------------------------CARD---------------------------------------*/
  card: {
    flex: 1,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    overflow: "hidden",

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Android shadow
    elevation: 3,
  },

  //Gradient Background
  gradientBackground: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  /*---------------------------------------WEATHER---------------------------------------*/
  weatherHeaderText: {
    fontFamily: "REMBold",
    fontSize: RFPercentage(2.4),
    color: "#fff",
  },
  weatherBodyText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
  },
  weatherSubheaderText: {
    fontSize: RFPercentage(2),
    fontFamily: "REMMedium",
    color: "#fff",
    marginTop: 20,
  },
  hourlyforecastContainer: {
    alignItems: "center",
    width: RFPercentage(8),
  },
  forecastcontentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    height: RFPercentage(8),
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  //Emergency Hotlines
  searchIcon: {
    position: "absolute",
    left: 15,
    top: "55%",
    transform: [{ translateY: -12 }],
  },
  phoneIcon: {
    backgroundColor: "#BC0F0F",
    borderRadius: 20,
    width: 35,
    height: 35,
    textAlign: "center",
    textAlignVertical: "center",
  },

  loginInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ACACAC",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#fff",
    height: 45,
  },
  loginInput: {
    flex: 1,
    height: 40,
    fontSize: RFPercentage(2),
    color: "#000",
  },
  shadow: {
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    // Android shadow
    elevation: 3,
  },

  /*---------------------------------------READINESS---------------------------------------*/
  readinessCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: RFPercentage(15),
    flexDirection: "row",
  },
  readinessImg: {
    width: RFPercentage(7),
    height: RFPercentage(7),
    resizeMode: "cover",
    marginRight: 15,
  },
  readinessTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  readinessTitle: {
    color: "#BC0F0F",
    fontSize: RFPercentage(2.4),
    fontFamily: "REMBold",
    marginBottom: 5,
    flexShrink: 1,
  },
  readinessSubTitle: {
    color: "#808080",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
    // flexShrink: 1,
  },
  safetyTipsCard: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: RFPercentage(24),
    maxWidth: "48%",
  },
  readinessHeader: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    color: "#fff",
  },
  readinessColWrapper: {
    flexDirection: "column",
    gap: 30,
  },

  /*---------------------------------------QUICK TIPS---------------------------------------*/
  quickTipsCard: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "rgba(188, 15, 15, 0.3)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modalImage: {
    width: "100%",
    height: RFPercentage(20),
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: RFPercentage(3),
    fontFamily: "REMBold",
    color: "#BC0F0F",
    textAlign: "center",
    marginTop: 15,
  },
  stepsContainer: {
    width: "100%",
    marginVertical: 20,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  stepNumber: {
    width: RFPercentage(3),
    height: RFPercentage(3),
    backgroundColor: "#BC0F0F",
    borderRadius: RFPercentage(1.6),
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  stepNumberText: {
    color: "#fff",
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(2),
  },
  stepText: {
    fontSize: RFPercentage(2),
    color: "#333",
    flex: 1,
    fontFamily: "QuicksandSemiBold",
  },
  quickImgWrapper: {
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
    marginTop: 20,
  },
  quickBtnWrapper: {
    width: "100%",
    height: RFPercentage(15),
    borderRadius: 15,
    overflow: "hidden",
  },
  quickImg: {
    width: "100%",
    height: "100%",
  },
  quickTitle: {
    color: "white",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
    width: "90%",
  },

  /*---------------------------------------HAZARD & EVACUATION MAP---------------------------------------*/
  mapOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  mapOverlayText: {
    color: "#fff",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
  },

  //BOTTOM BAR STYLES
  bottomTabContainer: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  svgContainer: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  fab: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -35 }],
    width: 70,
    height: 70,
    backgroundColor: "#BC0F0F",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  fabText: {
    color: "#fff",
    fontFamily: "REMSemiBold",
    fontSize: RFPercentage(2),
  },
  bottomTabButtons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    width: RFPercentage(2),
    width: RFPercentage(2),
    borderRadius: RFPercentage(1),
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: RFPercentage(1.6),
    fontFamily: "QuicksandBold",
  },
  /*---------------------------------------ACCOUNT SETTINGS---------------------------------------*/
  securityText: {
    fontSize: RFPercentage(2),
    color: "#808080",
    fontFamily: "QuicksandBold",
    marginTop: 15,
  },
  menuWrapper: {
    gap: 35,
    paddingVertical: 20,
  },
  menuIcons: {
    fontSize: RFPercentage(2.4),
    backgroundColor: "#E5E4E2B3",
    borderRadius: 10,
    padding: 5,
    color: "#808080",
  },
  menuText: {
    color: "#04384E",
    fontSize: RFPercentage(2.4),
    fontFamily: "QuicksandBold",
    marginLeft: 15,
  },
  menuArrow: {
    fontSize: RFPercentage(2.4),
    color: "#808080",
  },
  /*---------------------------------------ANNOUNCEMENTS---------------------------------------*/
  eventDateTime: {
    marginBottom: 5,
    fontSize: RFPercentage(2),
    color: "#04384E",
    fontFamily: "QuicksandSemiBold",
  },
  eventText: {
    fontSize: RFPercentage(2),
    color: "#04384E",
    fontFamily: "QuicksandMedium",
  },
  seeMoreText: {
    color: "#006EFF",
    marginTop: 5,
    fontFamily: "QuicksandMedium",
    fontSize: RFPercentage(2),
  },
  dropdownWrapper: {
    backgroundColor: "#fff",
    width: RFPercentage(16),
    height: RFPercentage(7),
    borderWidth: 1,
    borderColor: "#ACACAC",
    borderRadius: 5,
    alignSelf: "flex-end",
    paddingHorizontal: 4,
    marginTop: 20,
  },
  dropdownText: {
    color: "#04384E",
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2),
  },
  announcementCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  announcementLogo: {
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  announcementHeaderWrapper: {
    marginLeft: 5,
  },
  announcementUploader: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },
  announcementCreatedAt: {
    fontSize: RFPercentage(2),
    color: "#808080",
    fontFamily: "QuicksandSemiBold",
  },
  announcementCategory: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandSemiBold",
  },
  announcementTitle: {
    color: "#808080",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
  },
  announcementImg: {
    width: "100%",
    height: RFPercentage(30),
    borderRadius: 15,
    marginTop: 10,
    resizeMode: "cover",
  },
  pin: {
    transform: [{ rotate: "30deg" }],
    marginRight: 5,
    fontSize: RFPercentage(2.4),
  },
  heartWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  /*---------------------------------------MAIN---------------------------------------*/
  burgerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  burgerChatIcon: {
    marginTop: 5,
    marginRight: 10,
    fontSize: RFPercentage(3),
  },
  /*---------------------------------------SERVICES---------------------------------------*/
  servicesHeader: {
    fontSize: RFPercentage(3),
    color: "#04384E",
    fontFamily: "REMBold",
  },
  servicesContentWrapper: {
    gap: 30,
    marginVertical: 30,
  },
  placeholderText: {
    color: "#808080",
    fontFamily: "QuicksandMedium",
    fontSize: RFPercentage(2),
  },
  errorMsg: {
    color: "red",
    fontFamily: "QuicksandMedium",
    fontSize: RFPercentage(2),
    width: "auto",
    //changed from 80% to auto
  },
  errorDetailsWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  detailsLength: {
    color: "#808080",
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2),
    textAlign: "right",
  },
  /*---------------------------------------CALENDAR---------------------------------------*/
  categoriesColors: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  categoriesText: {
    fontSize: RFPercentage(1.6),
    fontFamily: "QuicksandSemiBold",
  },
  dateText: {
    fontSize: RFPercentage(3),
    textAlign: "center",
    color: "#04384E",
    fontFamily: "REMBold",
    marginVertical: 30,
  },
  calendarEventWrapper: {
    borderRadius: 10,
    padding: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  calendarEventTitle: {
    color: "#fff",
    fontSize: RFPercentage(1.4),
    fontFamily: "QuicksandBold",
  },
  calendarEventTime: {
    color: "#fff",
    fontSize: RFPercentage(1.4),
    fontFamily: "QuicksandMedium",
  },
  legendsRowWrapper: {
    flexDirection: "row",
    gap: 10,
    width: RFPercentage(23),
  },
  legendsColWrapper: {
    flexDirection: "column",
    gap: 10,
  },
  importantEventsWrapper: {
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  importantEventsDate: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },
  importantEventsTitle: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },

  reserveDateWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  reserveDateBtn: {
    padding: 8,
    borderRadius: 5,
  },
  reserveDateText: {
    fontSize: RFPercentage(2),
  },

  /*---------------------------------------ICONS---------------------------------------*/
  eyeInputContainer: {
    position: "relative",
    height: RFPercentage(4.5),
  },
  eyeToggle: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeToggleSize: {
    fontSize: RFPercentage(3),
    color: "#808080",
  },

  /*---------------------------------------DISASTER SAFETY TIPS---------------------------------------*/
  disasterSafetyImg: {
    width: RFPercentage(16),
    height: RFPercentage(16),
  },
  disasterSafetyCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    overflow: "hidden",
  },
  sectionPhase: {
    fontSize: RFPercentage(3),
    fontFamily: "REMBold",
    marginBottom: 10,
    color: "#BC0F0F",
  },
  sectionStepsWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  steps: {
    width: RFPercentage(3),
    height: RFPercentage(3),
    backgroundColor: "#BC0F0F",
    borderRadius: RFPercentage(1.6),
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 4,
  },
  stepsNo: {
    color: "#fff",
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(2),
  },
  stepsDesc: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    color: "#333",
    flex: 1,
    flexWrap: "wrap",
  },
  /*---------------------------------------DISASTER SAFETY TIPS---------------------------------------*/
  evacuationHeader: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    color: "#fff",
  },
  evacuationSubHeader: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "left",
    color: "#fff",
    fontSize: RFPercentage(3),
    fontFamily: "QuicksandBold",
  },
  evacuationImg: {
    width: "100%",
    height: RFPercentage(20),
    borderRadius: RFPercentage(1.6),
  },

  /*---------------------------------------HAZARD MAPS---------------------------------------*/
  hazardTitle: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "left",
    color: "#fff",
    fontSize: RFPercentage(3),
    fontFamily: "QuicksandBold",
  },

  /*---------------------------------------BACKGROUND OVERLAY---------------------------------------*/
  overlayLogo: {
    width: 320,
    height: 320,
    position: "absolute",
    bottom: -75,
    left: -80,
  },
  overlayBlack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.3,
    zIndex: 1,
  },

  /*---------------------------------------HOME---------------------------------------*/
  loadingMessage: {
    marginTop: 20,
    fontSize: RFPercentage(1.6),
    color: "#808080",
    fontFamily: "QuicksandSemiBold",
    textAlign: "center",
    lineHeight: 20,
    width: "80%",
  },

  greetingsText: {
    fontSize: RFPercentage(3),
    color: "#585252",
    fontFamily: "QuicksandSemiBold",
  },
  calendarCard: {
    padding: 10,
    flex: 1,
  },
  calendarMonth: {
    color: "#808080",
    fontSize: RFPercentage(2),
    fontFamily: "REMSemiBold",
  },
  calendarDay: {
    fontSize: RFPercentage(4.5),
    color: "#04384E",
    fontFamily: "REMBold",
  },
  calendarEventTitle: {
    fontSize: RFPercentage(1.6),
    color: "#ACACAC",
    marginRight: 20,
  },

  weatherCurrTemp: {
    fontFamily: "QuicksandMedium",
    fontSize: RFPercentage(4),
    color: "#fff",
  },
  weatherHighLow: {
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2),
    color: "#fff",
  },
  carouselWrapper: {
    height: RFPercentage(45),
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  carouselCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  homeAnnouncementImg: {
    width: "100%",
    height: RFPercentage(20),
    marginTop: 10,
    borderRadius: 10,
  },
  emergencyToolsCol: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "cover",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#04384E",
  },

  //HOME CALENDAR
  calendarContainer: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: RFPercentage(2),
    height: RFPercentage(28),
  },
  alignItems: "center",
  leftCalendar: {
    width: "45%",
    padding: 10,
    backgroundColor: "#F8F8F8",
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
    borderTopLeftRadius: 10, // add this
    borderBottomLeftRadius: 10, // add this
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bigDate: {
    fontSize: RFPercentage(5),
    fontFamily: "QuicksandBold",
    color: "#04384E",
    lineHeight: 50,
    marginTop: 0,
  },
  monthText: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandSemiBold",
    color: "#04384E",
    marginTop: 0,
    marginBottom: 0,
  },
  weekText: {
    fontSize: RFPercentage(2),
    color: "#888",
    fontFamily: "QuicksandSemiBold",
  },
  dotAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    fontFamily: "QuicksandBold",
    alignSelf: "flex-start",
    marginTop: 5,
  },
  blueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  eventTitle: {
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2),
    color: "#04384E",
    marginRight: 3,
  },
  eventDate: {
    fontSize: RFPercentage(1.6),
    marginLeft: 15,
    fontFamily: "QuicksandMedium",
    color: "#04384E",
  },
  eventTime: {
    fontSize: RFPercentage(1.6),
    color: "#666",
    marginLeft: 15,
    fontFamily: "QuicksandMedium",
  },
  noEvents: {
    fontStyle: "italic",
    color: "#808080",
    fontFamily: "QuicksandMedium",
    textAlign: "center",
    fontSize: RFPercentage(1.8),
    marginTop: 10,
  },
  rightCalendar: {
    width: "55%",
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    height: RFPercentage(25),
  },
  monthHeader: {
    textAlign: "center",
    fontFamily: "QuicksandBold",
    marginBottom: 5,
    color: "#04384E",
    fontSize: RFPercentage(2),
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weekDay: {
    fontFamily: "QuicksandSemiBold",
    color: "#999",
    fontSize: RFPercentage(2),
  },
  calendarRightContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    width: `${100 / 7}%`, // 7 columns in a row
    aspectRatio: 1, // make cells square
    justifyContent: "center",
    alignItems: "center",
  },
  currentDay: {
    width: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  dayText: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    color: "#04384E",
  },
  currentDayText: {
    color: "#0E94D3",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
  },
  emptyCell: {
    height: 40,
  },
  //HOME WEATHER
  locationIcon: {
    fontSize: RFPercentage(3),
    color: "#fff",
  },
  locationText: {
    fontSize: RFPercentage(2),
    color: "white",
    fontFamily: "QuicksandSemiBold",
  },
  weatherIcon: {
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  weatherCurrentCondition: {
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(1.6),
    color: "#fff",
    marginTop: 20,
    textAlign: "right",
    width: "50%",
  },
  // servicesImgContainer: {
  //   backgroundColor: "#DBDEE8",
  //   padding: 15,
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // servicesImg: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 60,
  //   resizeMode: "cover",
  // },
  // servicesTitle: {
  //   fontSize: 16,
  //   color: "#04384E",
  //   fontFamily: "QuicksandBold",
  //   marginTop: 10,
  //   textAlign: "center",
  // },
  sosContainer: {
    backgroundColor: "#BC0F0F",
    padding: 20,
    borderRadius: 10,
    fontSize: RFPercentage("auto"),
    padding: 20,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    // Android shadow
    elevation: 3,
  },
  sosRowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: 30,
  },
  emergencyTitle: {
    color: "#fff",
    fontSize: RFPercentage(2),
    fontFamily: "REMSemiBold",
    textAlign: "center",
  },
  emergencyMessage: {
    color: "#FAFAFA",
    fontSize: RFPercentage(1.6),
    textAlign: "center",
    opacity: 0.7,
    fontFamily: "QuicksandBold",
  },

  /*---------------------------------------LOGIN, SIGN UP, FORGOT PASS---------------------------------------*/
  loginWrapper: {
    flex: 4,
  },
  loginTopWrapper: {
    flex: 1,
    alignSelf: "center",
  },
  loginLogo: {
    width: RFPercentage(25),
    height: RFPercentage(25),
  },
  loginBottomWrapper: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#DCE5EB",
    borderRadius: 30,
    flex: 3,
    padding: 30,
    bottom: "-10",
  },
  loginFormWrapper: {
    marginVertical: 30,
    gap: 15,
    width: "100%",
  },
  forgotPassText: {
    color: "#006EFF",
    alignSelf: "flex-end",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
    marginTop: "-10",
  },
  signUpText: {
    color: "#006EFF",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },
  byClickingText: {
    color: "#808080",
    alignSelf: "flex-start",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandSemiBold",
  },
  forgotMsg: {
    fontSize: RFPercentage(2),
    color: "#808080",
    alignSelf: "flex-start",
    marginTop: 10,
    fontFamily: "QuicksandSemiBold",
  },
  forgotCardWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  forgotCard: {
    width: "90%",
    height: RFPercentage("auto"),
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    flexDirection: "column",
  },
  forgotPassMethodsText: {
    color: "#04384E",
    fontSize: RFPercentage(2.4),
    fontFamily: "QuicksandBold",
  },
  forgotPassMethodsIcon: {
    fontSize: RFPercentage(3.5),
    color: "#04384E",
  },
  methodOptionsWrapper: {
    marginVertical: 30,
    gap: 30,
  },
  methodOptions: {
    backgroundColor: "#F7F5F5",
    borderColor: "#ACACAC",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    height: RFPercentage(10),
  },
  /*---------------------------------------NOTIFICATION---------------------------------------*/
  notScrollWrapper: {
    flex: 1,
    position: "relative",
    backgroundColor: "#DCE5EB",
  },

  markAllText: {
    paddingHorizontal: 20,
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "REMSemiBold",
    textAlign: "right",
  },
  notifLine: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#C1C0C0",
    padding: 1,
    position: "relative",
  },
  notifRowSpacing: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingRight: 20,
  },
  notifTitleMessage: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },
  notifCircle: {
    position: "absolute",
    top: "50%",
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    transform: [{ translateY: -4 }],
  },
  filterDropdown: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 1000,
  },
  filterDropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  filterDropdownText: {
    fontSize: RFPercentage(2),
    color: "#04384E",
    fontFamily: "QuicksandSemiBold",
  },
  /*---------------------------------------OFFLINE---------------------------------------*/
  offHeader: {
    color: "#fff",
    fontSize: RFPercentage(3),
    textAlign: "center",
    fontWeight: "QuicksandBold",
  },
  offCenteredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  offBtnCardContainer: {
    width: "80%",
    height: "90%",
    flexDirection: "column",
    gap: 20,
  },
  offBtnCard: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  offBtnContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  offHotlineItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  offHotlineName: {
    color: "#04384E",
    fontFamily: "REMSemiBold",
    fontSize: RFPercentage(2),
  },
  /*---------------------------------------PREVIEW---------------------------------------*/
  slideContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  slideImg: {
    width: RFPercentage(24),
    height: RFPercentage(24),
    resizeMode: "contain",
    marginVertical: 70,
  },
  paginationDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 70,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  bottomButons: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  buttonsText: {
    color: "white",
    fontFamily: "REMBold",
    fontSize: RFPercentage(3),
  },
  previewTitle: {
    textAlign: "center",
    fontSize: RFPercentage(3),
  },
  haveanaccounttext: {
    color: "#808080",
    fontFamily: "REMSemiBold",
    fontSize: RFPercentage(2.4),
    marginTop: 15,
  },
  logintext: {
    color: "#0E94D3",
    fontFamily: "REMBold",
    fontSize: RFPercentage(2.4),
    marginTop: 15,
  },
  /*---------------------------------------RESIDENT FORM---------------------------------------*/
  FormSectionTitle: {
    color: "#04384E",
    fontSize: RFPercentage(3),
    fontFamily: "REMSemiBold",
    alignSelf: "flex-start",
  },
  // label: {
  //   fontSize: 16,
  //   fontWeight: "QuicksandBold",
  //   marginBottom: 8,
  // },
  required: { color: "red" },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },
  previewContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  personalInfobuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  personalInfoButton: {
    backgroundColor: "#0E94D3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: 15,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    maxWidth: "45%",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#444",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    padding: 5,
  },
  backArrow: {
    fontSize: RFPercentage(3.5),
    color: "#04384E",
    marginVertical: 10,
    width: 40,
  },
  headerCell: {
    flex: 1,
    fontWeight: "REMBold",
    textAlign: "center",
    fontSize: RFPercentage(1.6),
  },
  dataRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  dropdown: {
    flex: 1,
    marginHorizontal: 2,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 40,
    justifyContent: "center",
  },
  dropdownContainer: {
    zIndex: 1000,
  },
  residentAddBtn: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#0E94D3",
    width: "50%",
    padding: 8,
    alignSelf: "flex-end",
  },
  residentAddText: {
    fontSize: RFPercentage(2),
    color: "#0E94D3",
  },
  membersWrapper: {
    marginBottom: 20,
    flexDirection: "column",
    gap: 15,
  },
  /*---------------------------------------STATUS---------------------------------------*/
  statusDialogWrapper: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  cancelCert: {
    fontFamily: "REMBold",
    fontSize: RFPercentage(3),
    color: "#04384E",
  },
  cancelReserve: {
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(3),
    color: "#04384E",
    marginBottom: 10,
  },
  statusCardWrapper: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  statusLabel: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "REMMedium",
  },
  statusLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  statusServiceType: {
    fontSize: RFPercentage(2.4),
    fontFamily: "REMSemiBold",
    color: "#04384E",
  },
  statusTypeofCert: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    color: "#808080",
  },
  statusBlotterWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  statusServiceDetails: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    color: "black",
    marginLeft: 5,
    flexShrink: 1,
    textAlign: "justify",
  },
  statusRemarksText: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    color: "black",
    marginLeft: 5,
    flexShrink: 1,
    textAlign: "justify",
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 5,
  },
  statusColorBox: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  legendLabel: {
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
    color: "#000",
    width: "90%",
  },

  /*---------------------------------------SUCCESSFUL PAGE---------------------------------------*/
  successScrollWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  successLottie: {
    width: "100%",
    height: 200,
    marginBottom: -150,
    justifyContent: "center",
    flex: 1,
  },
  serviceContentWrapper: {
    alignItems: "center",
    flexDirection: "column",
  },
  serviceDesc: {
    textAlign: "center",
    marginTop: 10,
    color: "#808080",
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2),
  },
  /*---------------------------------------TERMS & CONDITIONS---------------------------------------*/
  termsTitle: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  termsDesc: {
    color: "#04384E",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    textAlign: "justify",
  },
  termsEmailContact: {
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2),
    color: "#04384E",
  },
  /*---------------------------------------DRAWER---------------------------------------*/
  drawerImg: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    borderRadius: 50,
  },
  drawerUsername: {
    fontSize: RFPercentage(2.4),
    fontWeight: "600",
    color: "#04384E",
    fontFamily: "REMBold",
  },
  drawerServicesText: {
    fontSize: RFPercentage(2.4),
    marginLeft: 15,
    color: "#04384E",
    fontFamily: "QuicksandBold",
  },
  drawerLogoutText: {
    fontSize: RFPercentage(2.4),
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#04384E",
    width: "100%",
    fontFamily: "QuicksandBold",
    paddingVertical: 15,
    textAlign: "center",
  },
  /*---------------------------------------SOS---------------------------------------*/
  helpBannerText: {
    color: "white",
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(2.4),
  },
  blotterFullName: {
    fontFamily: "QuicksandMedium",
    fontSize: RFPercentage(2),
  },
  redAsterisk: {
    color: "red",
    fontSize: RFPercentage(1.8),
  },
  resendOTPText: {
    color: "red",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
  },
  sosCard: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 5,
    marginTop: 20,
    width: "100%",
  },
  statusWrapper: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  statusIcon: {
    marginRight: 6,
    fontSize: RFPercentage(2.4),
    color: "white",
  },
  statusTitle: {
    color: "white",
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(2),
  },
  sosImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  sosReportType: {
    fontFamily: "REMMedium",
    fontSize: RFPercentage(2.4),
  },
  sosAddressTimeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
  sosDetailsText: {
    color: "black",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
    marginLeft: 5,
    flexWrap: "wrap",
    flex: 1,
    marginRight: 5,
    overflow: "hidden",
  },
  sosDetailsWrapper: {
    marginTop: 15,
    flexDirection: "column",
    gap: 5,
  },
  sosDetailsRowWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  sosDetailsColWrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  sosDetailsTitle: {
    color: "#BC0F0F",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandBold",
    marginLeft: 5,
  },
  sosDetailsAnswer: {
    color: "black",
    fontSize: RFPercentage(2),
    fontFamily: "QuicksandMedium",
  },
  sosMapWrapper: {
    width: "100%",
    height: 220,
    marginTop: 15,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sosMapHeader: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    zIndex: 1,
  },
  sosMapHeaderText: {
    color: "white",
    fontFamily: "QuicksandBold",
    fontSize: RFPercentage(1.8),
  },
  sosWhiteBtn: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#BC0F0F",
  },
  sosResponderName: {
    fontFamily: "REMBold",
    fontSize: RFPercentage(3),
    color: "white",
  },
  sosResponderName: {
    fontFamily: "REMBold",
    fontSize: RFPercentage(3),
    color: "white",
  },
  sosResponderPosition: {
    fontFamily: "QuicksandSemiBold",
    fontSize: RFPercentage(2.4),
    color: "white",
    opacity: 0.5,
  },
  sosHelpHasArriveIcon: {
    color: "#BC0F0F",
    fontSize: RFPercentage(4),
  },
  sosHelpHasArriveDetails: {
    fontFamily: "QuicksandMedium",
    fontSize: RFPercentage(2.4),
    color: "black",
  },
  evidenceImg: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
    marginTop: 5,
  },
});
