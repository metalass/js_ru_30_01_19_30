import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

	static contextTypes = {
		lang: PropTypes.string
	}

    handleDayClick = (e, day) => {
        const { changeDateRange, range } = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    render() {

	    const MONTHS = this.context.lang == 'en' ? null : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	    const WEEKDAYS_LONG = this.context.lang == 'en' ? null : ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	    const WEEKDAYS_SHORT = this.context.lang == 'en' ? null : ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	    const FIRST_DAY = this.context.lang == 'en' ? 0 : 1;

	    const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
	                months={ MONTHS }
	                weekdaysLong={ WEEKDAYS_LONG }
	                weekdaysShort={ WEEKDAYS_SHORT }
	                firstDayOfWeek={ FIRST_DAY }
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange }, null, {pure: false})(DateRange)