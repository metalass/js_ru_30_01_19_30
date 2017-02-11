import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/dist/style.css'

function sunday(day) {
	return day.getDay() === 0;
}


class App extends Component {
    state = {
        user: '',
        selection: null,
	    selectedDayFrom: null,
	    selectedDayTo: null,
	    dateRange: ""
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
	            <div style={{float: "left", width: "300px"}}>
		            <DayPicker
			            initialMonth={ new Date() }
			            selectedDays={ day => DateUtils.isSameDay(this.state.selectedDayFrom, day) }
			            onDayClick={ this.handleClickDay("From") }
		            />
	            </div>
	            <div style={{float: "left", width: "300px"}}>
		            <DayPicker
			            initialMonth={ new Date() }
			            selectedDays={ day => DateUtils.isSameDay(this.state.selectedDayTo, day) }
			            onDayClick={ this.handleClickDay("To") }
		            />
	            </div>
	            <div style={{ clear: "both" }}>{this.state.dateRange}</div>

                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleSelectChange = selection => this.setState({ selection })

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }

	handleClickDay = name => (e, day, { selected, disabled }) => {
		if (disabled) {
			return;
		}

		var newState = {};
		newState[ "selectedDay" + name ] = selected ? null : day;
		this.setState( newState );
	}

	componentDidUpdate = () => {
		var oldVal = this.state.dateRange,
			newVal = "";

		if (this.state.selectedDayFrom && this.state.selectedDayTo) {
			newVal = "From " + this.state.selectedDayFrom + " to " + this.state.selectedDayTo;
		}

		if (newVal != oldVal) {
			this.setState( { "dateRange" : newVal } );
		}
	}
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default App