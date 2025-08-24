import React, { useEffect } from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { horizontalScale, verticalScale } from "../metrics";

interface Stats {
  day: string;
  time: number;
}

const Stats = () => {
  const [selected, setSelected] = React.useState("");
  const [stats, setStats] = React.useState<Stats[]>([]);
  const [dayStudyMinutes, setDayStudyMinutes] = React.useState(0);

  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    const value = await AsyncStorage.getItem("stats");
    if (value !== null) {
      setStats(JSON.parse(value));
    }
  };

  const getDayStats = async (day: any) => {
    for (var i = 0; i < stats.length; i++) {
      const temp = stats[i].day.split("/");
      if (
        temp[0].toString() === day.day.toString() &&
        temp[1].toString() === day.month.toString() &&
        temp[2].toString() === day.year.toString()
      ) {
        setDayStudyMinutes(stats[i].time);
        return;
      } else {
        setDayStudyMinutes(0);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <View style={styles.separator} />
      <Calendar
        // Customize the appearance of the calendar
        style={{
          width: horizontalScale(350),
          backgroundColor: "#fff",
        }}
        // Specify the current date
        current={"2024-02-20"}
        // Callback that gets called when the user selects a day
        onDayPress={(day) => {
          setSelected(day.dateString);
          getDayStats(day);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "orange",
          },
        }}
        enableSwipeMonths={true}
      />
      {dayStudyMinutes !== 0 && (
        <View style={styles.dailystatsview}>
          <Text style={styles.dayinfo}>{selected}</Text>
          <Text style={styles.studyminutes}>{dayStudyMinutes}</Text>
          <Text style={styles.subtext}>minuti di studio</Text>
        </View>
      )}
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A8643C",
  },
  separator: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
  dayinfo: {
    color: "#fff",
    fontSize: verticalScale(20),
    fontWeight: "700",
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  studyminutes: {
    color: "#fff",
    fontSize: verticalScale(50),
    fontWeight: "700",
  },
  dailystatsview: {
    backgroundColor: "#A8643C",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  subtext: {
    color: "#fff",
    fontSize: verticalScale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
});
