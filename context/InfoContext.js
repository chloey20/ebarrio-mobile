import api from "../api";
import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";
import { SocketContext } from "./SocketContext";
import axios from "axios";

export const InfoContext = createContext(undefined);

const socket = io("https://ebarrio-mobile-backend.onrender.com", {
  withCredentials: true,
});

export const InfoProvider = ({ children }) => {
  const { isAuthenticated, setUserStatus, user } = useContext(AuthContext);
  const [emergencyhotlines, setEmergencyHotlines] = useState([]);
  const [weather, setWeather] = useState([]);
  const [residents, setResidents] = useState([]);
  const [courtreservations, setCourtReservations] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [events, setEvents] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState([]);
  const [FAQs, setFAQs] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [report, setReport] = useState(null);
  const [pendingReports, setPendingReports] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (announcements) {
      const announcementEvents = (announcements || [])
        .filter((a) => a.status !== "Archived")
        .filter((a) => a.times)
        .flatMap((a) =>
          Object.entries(a.times).map(([dateKey, timeObj]) => ({
            title: a.title,
            category: a.category,
            eventdetails: a.eventdetails,
            start: new Date(timeObj.starttime),
            end: new Date(timeObj.endtime),
            backgroundColor:
              a.category === "General"
                ? "#4A90E2"
                : a.category === "Health & Sanitation"
                ? "#7ED321"
                : a.category === "Public Safety & Emergency"
                ? "#FF0000"
                : a.category === "Education & Youth"
                ? "#FFD942"
                : a.category === "Social Services"
                ? "#B3B6B7"
                : a.category === "Infrastructure"
                ? "#EC9300"
                : "#3174ad",
          }))
        );

      setEvents(announcementEvents);
    }
  }, [announcements]);

  useEffect(() => {
    fetchEmergencyHotlines();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
      fetchReport();
      fetchUnreadNotifications();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (users && user) {
      users.map((usr) => {
        if (usr._id === user.userID) {
          setUserStatus(usr.status);
        }
      });
    }
  }, [users, user]);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/getusers");
      setUsers(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch users:", error);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await api.get("/getuserdetails");
      setUserDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch user details:", err);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await api.get(`/getservices`);
      setServices(response.data);
    } catch (error) {
      console.error("Failed to fetch user services:", err);
    }
  };

  const fetchEmergencyHotlines = async () => {
    try {
      const response = await api.get("/getemergencyhotlines");
      setEmergencyHotlines(response.data);
      await SecureStore.setItemAsync(
        "emergencyhotlines",
        JSON.stringify(response.data)
      );
    } catch (error) {
      console.error("Failed to fetch emergency hotlines:", err);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await api.get("/getweather");
      setWeather(response.data);
    } catch (error) {
      console.error("Failed to fetch weather:", err);
    }
  };

  const fetchResidents = async () => {
    try {
      const response = await api.get("/getresidents");
      setResidents(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch residents:", error);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await api.get("/getreservations");
      setCourtReservations(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch reservations:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await api.get("/getannouncements");
      setAnnouncements(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch reservations:", error);
    }
  };

  const fetchFAQs = async () => {
    try {
      const response = await api.get("/getfaqs");
      setFAQs(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch reservations:", error);
    }
  };

  const fetchActive = async () => {
    try {
      const response = await api.get("/getactive");
      setActive(response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Failed to fetch reservations:", error);
    }
  };

  const fetchChats = async () => {
    try {
      const response = await api.get("/getchat");
      setChatMessages(response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Failed to fetch chat:", error);
    }
  };

  const fetchReport = async () => {
    try {
      const response = await api.get("/getactivesos");
      setReport(response.data[0]);
    } catch (error) {
      console.error("❌ Failed to fetch report:", error);
    }
  };

  const fetchPendingReports = async () => {
    try {
      const response = await api.get("/getpendingsos");
      setPendingReports(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch pending reports:", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await api.get("/getnotifications");
      setNotifications(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch notifications:", error);
    }
  };

  const fetchUnreadNotifications = async () => {
    try {
      const response = await api.get("/getunreadnotifications");
      setUnreadNotifications(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch unread notifications:", error);
    }
  };

  useEffect(() => {
    if (!socket) return;

    const handler = (updatedData) => {
      if (updatedData.type === "announcements") {
        setAnnouncements(updatedData.data);
      } else if (updatedData.type === "services") {
        setServices(updatedData.data);
      } else if (updatedData.type === "emergencyhotlines") {
        setEmergencyHotlines(updatedData.data);
      } else if (updatedData.type === "users") {
        setUsers(updatedData.data);
      } else if (updatedData.type === "notifications") {
        setNotifications(updatedData.data);
      } else if (updatedData.type === "unreadnotifications") {
        setUnreadNotifications(updatedData.data);
      }
    };

    socket.on("mobile-dbChange", handler);

    return () => {
      socket.off("mobile-dbChange", handler);
    };
  }, [socket]);

  return (
    <InfoContext.Provider
      value={{
        emergencyhotlines,
        weather,
        residents,
        courtreservations,
        announcements,
        userDetails,
        events,
        services,
        FAQs,
        active,
        chatMessages,
        report,
        pendingReports,
        notifications,
        unreadNotifications,
        fetchNotifications,
        setNotifications,
        setPendingReports,
        setChatMessages,
        fetchServices,
        fetchUserDetails,
        fetchEmergencyHotlines,
        fetchWeather,
        fetchResidents,
        fetchReservations,
        fetchAnnouncements,
        fetchFAQs,
        fetchActive,
        fetchChats,
        fetchReport,
        fetchPendingReports,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
