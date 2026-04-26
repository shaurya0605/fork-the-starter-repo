import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
  BpkCalendarGrid,
  BpkCalendarGridHeader,
  BpkCalendarNav,
  BpkCalendarDate,
  withCalendarState,
} from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import format from 'date-fns/format';

import './App.scss';

const CalendarWithState = withCalendarState(BpkCalendar);

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
  }

  handleDateSelect = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <BpkText tagName="h1" textStyle="xxl" className="App__title">
            Flight Schedule
          </BpkText>
        </header>
        <main className="App__main">
          <div className="App__calendar-container">
            <CalendarWithState
              id="flight-calendar"
              selectionConfiguration={{
                type: CALENDAR_SELECTION_TYPE.single,
                date: this.state.selectedDate,
              }}
              onDateSelect={this.handleDateSelect}
              formatDateFull={formatDateFull}
              formatMonth={formatMonth}
              daysOfWeek={daysOfWeek}
              weekStartsOn={1}
              navProps={{
                changeMonthLabel: 'Change month',
                previousMonthLabel: 'Previous month',
                nextMonthLabel: 'Next month',
              }}
              gridProps={{
                DateComponent: BpkCalendarDate,
                dateModifiers: {},
              }}
            />
          </div>
          <div className="App__button-container">
            <BpkButton onClick={() => {}}>Continue</BpkButton>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
