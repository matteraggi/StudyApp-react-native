import React, { useEffect } from "react";
import { Text, View } from "./Themed";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { horizontalScale, verticalScale } from "../metrics";
import { storage } from "../utils/storage";

interface Stats {
  day: string;
  time: number;
}


const Stats = () => {
  const [selected, setSelected] = React.useState("");
  const [stats, setStats] = React.useState<Stats[]>([]);
  const [dayStudyMinutes, setDayStudyMinutes] = React.useState(0);
  const [daySessions, setDaySessions] = React.useState<Stats[]>([]);
  const today = new Date().toISOString().split("T")[0]

  useEffect(() => {
    setSelected(today);
    getTodayStats();
  }, []);

  const getTodayStats = async () => {
    const tempStats = await loadStats();
    getDayStats(today, tempStats);
  }

  const loadStats = async () => {
    const savedStats = await storage.get<Stats[]>("stats", []);
    setStats(savedStats);
    return savedStats;
  };


  const getDayStats = (day: any, functStats: Stats[]) => {
    const dateStr = typeof day === "string" ? day : day.dateString;
    const statsForDay = functStats.filter((s) => s.day === dateStr);

    if (statsForDay.length > 0) {
      const totalSeconds = statsForDay.reduce((sum, s) => sum + s.time, 0);
      setDayStudyMinutes(Math.floor(totalSeconds / 60));
      setDaySessions(statsForDay); // salva le sessioni del giorno
    } else {
      setDayStudyMinutes(0);
      setDaySessions([]);
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={{
          width: horizontalScale(300),
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 10, // opzionale, per smussare gli angoli
        }}
        current={today}
        onDayPress={(day) => {
          setSelected(day.dateString);
          getDayStats(day, stats);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "orange",
          },
        }}
        enableSwipeMonths={true}
        theme={{
          backgroundColor: "#ffffffff",
          calendarBackground: "#ffffffff",
          textSectionTitleColor: "#000000ff",
          selectedDayBackgroundColor: "orange",
          selectedDayTextColor: "#000000ff",
          todayTextColor: "#d8b800ff",
          dayTextColor: "#000000ff",
          textDisabledColor: "#d3d3d3",
          monthTextColor: "#000000ff",
          arrowColor: "#000000ff",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "bold",
        }}
      />


      {dayStudyMinutes > 0 ? (
        <View style={styles.dailystatsview}>
          <View style={styles.totalMinutes}>
            <Text style={styles.studyminutes}>{dayStudyMinutes}</Text>
            <Text style={styles.subtext}>minuti di studio</Text>
          </View>

          {/* Lista sessioni */}
          <ScrollView
            style={styles.scrollContainer}
          >
            {daySessions.map((session, index) => (
              <Text key={index} style={styles.subtext}>
                • {Math.floor(session.time / 60)} min
              </Text>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.dailystatsview}>
          <Text style={styles.subtext}>Non hai studiato...</Text>
        </View>
      )}


    </View >
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8643C",
  },
  totalMinutes: {
    backgroundColor: "#F5E6CC",
    flexDirection: "row", // <--- elementi in riga
    alignItems: "center", // per allinearli verticalmente
    gap: horizontalScale(20)
  },
  dailystatsview: {
    backgroundColor: "#F5E6CC",
    width: horizontalScale(300),
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: verticalScale(20),
    borderWidth: 2,
    borderColor: "#F5E6CC",
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10)
  },
  studyminutes: {
    color: "#000000ff",
    fontSize: verticalScale(40),
    fontWeight: "700",
  },
  subtext: {
    color: "#000000ff",
    fontSize: verticalScale(20),
  },
  scrollContainer: {
    maxHeight: verticalScale(120), // altezza max, dopo scrolla
    width: "100%",
  },
});