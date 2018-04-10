import React, { Component } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux'
import {setFilters} from '../../AC'

import 'react-select/dist/react-select.css'
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            date: null,
            size: {
                label: 'Маленькие',
                value: '1'
            },
            city: {
                label: 'Днепр',
                value: '1'
            },
            nameError: false,
            emailError: false,
            dateError: false
        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    render() {
        const optionSizes = [{
            label: 'Маленькие',
            value: '1'
        },
        {
            label: 'Средние',
            value: '2'
        },
        {
            label: 'Большие',
            value: '3'
        }
        ]

        const optionCities = [{
            label: 'Днепр',
            value: '1'
        },
        {
            label: 'Ужгород',
            value: '2'
        }
        ]

        return (
            <div className="formBlock">
                <h2 className="title">Поиск мастеров</h2>
                <div className="blockElem">
                    <input type="text" placeholder="Ваше имя"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        className={this.state.nameError ? 'error' : ''}
                    />
                </div>
                <div className="blockElem">
                    <input type="email" placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        className={this.state.emailError ? 'error' : ''}
                    />
                </div>
                <div className="blockElem">
                    <span>Выберите размер часов:</span>
                    <div className="margin">
                        <Select
                            options={optionSizes}
                            clearable={false}
                            value={this.state.size}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="blockElem">
                    <span>Выберите город:</span>
                    <div className="margin">
                        <Select
                            options={optionCities}
                            value={this.state.city}
                            onChange={this.handleChangeCity}
                            clearable={false}
                        />
                    </div>
                </div>

                <div className="blockElem">
                    <div>Укажите дату и время:</div>
                    <div className="margin">
                        <DatePicker
                            placeholderText="Кликните, чтобы указать дату и время"
                            selected={this.state.date}
                            onChange={this.handleChangeDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            dateFormat="LLL"
                            timeCaption="time"
                            minDate={new Date()}
                            className={this.state.dateError ? 'error' : ''}
                            value={this.state.value}
                        />
                    </div>
                </div>
                <div className="blockElem">
                    <button className="btn" onClick={this.handleFilter}>Найти</button>
                </div>
            </div>
        )
    }

    handleChangeCity = selected => this.setState({ selectedCity: selected })
    handleChange = selected => {
        this.setState({ selectedSize: selected });
    }

    handleChange = type => (ev) => {
        const { value } = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value,
            [type + 'Error']: false
        })
    }

    handleChangeDate(date) {
        this.setState({
            date,
            dateError: false
        });
    }

    handleFilter = () => {
        const setFilters = this.props.setFilters;

        const { name, email, date, size, city, value } = this.state;
        let errorForm = false;

        //validate of name
        if (name.length < limits.name.min) {
            errorForm = true;
            this.setState({ nameError: true })
        }

        //validate of email
        if (emailRegular.test(email) === false || email.length < limits.email.min) {
            errorForm = true;
            this.setState({ emailError: true })
        }

        //validate of date
        if (date == null) {
            errorForm = true;
            this.setState({ dateError: true })
        }

        if (errorForm) return
        setFilters({   
            name,
            email,
            size,
            city,
            date,
            value
        })
    }
}

const emailRegular = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const limits = {
    name: {
        min: 3,
        max: 20
    },
    email: {
        min: 3,
        max: 25
    }
}

export default connect(null, {setFilters})(Form)