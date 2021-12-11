import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import moment from "moment";

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ],
  dayNames: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ],
  dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  today: "Сегодня",
};
LocaleConfig.defaultLocale = "ru";

const dates = [
  "2021-12-13",
  "2021-12-14",
  "2021-12-15",
  "2021-12-16",
  "2021-12-17",
  "2021-12-18",
  "2021-12-19",
  "2021-12-20",
];
var dates2 = dates.reduce((c, v) =>
  Object.assign(c, {
    [v]: {
      disabled: true,
      startingDay: true,
      color: "red",
      endingDay: true,
      disabled: true,
    },
  })
);
console.log(dates2);
class App extends React.Component {
  state = {
    markedDates: {},
    startDate: "",
  };

  onDayPress = (day) => {
    let markedDates = {};
    markedDates[day.dateString] = {
      color: "#00B0BF",
      textColor: "#FFFFFF",
    };
    this.setState({
      markedDates: markedDates + dates,
    });
  };
  render() {
    return (
      <CalendarList
        monthFormat={"MMMM yyyy"}
        markedDates={this.state.markedDates}
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={1}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        minDate={new Date()}
        onDayPress={this.onDayPress}
      />
    );
  }
}

export default App;
