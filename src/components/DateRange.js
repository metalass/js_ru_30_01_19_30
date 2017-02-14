import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css';

import {connect} from 'react-redux'
import { dateRangeChange } from '../AC'

class DateRange extends Component {

    handleDayClick = (e, day) => {
	    this.props.dateRangeChange(DateUtils.addDayToRange(day, this.props.range))
    }

    render() {
        const { range: {from, to}, lastDate = new Date(), firstDate = new Date() } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
	                initialMonth={ lastDate }
	                toMonth={ lastDate }
	                fromMonth={ firstDate }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
	range: state.range
}), { dateRangeChange })(DateRange)