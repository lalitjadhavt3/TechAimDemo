import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {addMonths, format, subMonths, parseISO} from 'date-fns';

const getFormattedMonthName = month => {
  return format(month, 'MMMM');
};

const getPreviousMonthName = currentMonth => {
  const prevMonthName = subMonths(new Date(currentMonth), 1);
  return format(prevMonthName, 'MMMM');
};

const getNextMonthName = currentMonth => {
  const prevMonthName = addMonths(new Date(currentMonth), 1);
  return format(prevMonthName, 'MMMM');
};

const CustomCalendarHeader = ({month, onPrevPress, onNextPress}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: 5,
      width: '100%',
    }}>
    <TouchableOpacity onPress={onPrevPress}>
      <Text style={styles.nextPrevMonth}>{getPreviousMonthName(month)}</Text>
    </TouchableOpacity>
    <Text style={styles.currentMonthText}>{getFormattedMonthName(month)}</Text>
    <TouchableOpacity onPress={onNextPress}>
      <Text style={styles.nextPrevMonth}>{getNextMonthName(month)}</Text>
    </TouchableOpacity>
  </View>
);

const CalendarComponent = ({
  currentMonth,
  onMonthChange,
  eventDates,
  onDayPress,
}) => {
  const handlePrevPress = () => {
    const prevMonth = subMonths(new Date(currentMonth), 1);
    onMonthChange(format(prevMonth, 'yyyy-MM-dd'));
  };
  const handleNextPress = () => {
    const nextMonth = addMonths(new Date(currentMonth), 1);
    onMonthChange(format(nextMonth, 'yyyy-MM-dd'));
  };
  const handleDayPress = day => {
    const markedDateInfo = eventDates[day.dateString];
    onDayPress(markedDateInfo);
  };
  return (
    <View style={{flex: 1}}>
      <Calendar
        key={currentMonth}
        current={currentMonth}
        hideArrows={true}
        markingType={'custom'}
        markedDates={eventDates}
        onMonthChange={month => onMonthChange(month.dateString)}
        onDayPress={day => handleDayPress(day)}
        renderHeader={headerProps => (
          <CustomCalendarHeader
            month={currentMonth}
            onPrevPress={handlePrevPress}
            onNextPress={handleNextPress}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  nextPrevMonth: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'lightgrey',
  },
  currentMonthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default CalendarComponent;
