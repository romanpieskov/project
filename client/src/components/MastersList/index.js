import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

class MastersList extends Component {
    render() {
        const { masters, filters } = this.props
        let { size, city, date } = this.props.filters
        let filtratedMasters = [];

        if (Object.keys(filters).length === 0) return null

        date = Date.parse(date)

        const dateTo = date + size.value * 3600000;

        for (let i = 0; i < masters.length; i++) {
            if (masters[i].cities.indexOf(city.label) === -1) continue
            for (let j = 0; j < masters[i].time.length; j++) {
                let time = masters[i].time[j];
                if ((date < time.to && dateTo >= time.from)) break;
                if ((j + 1) === masters[i].time.length) {
                    filtratedMasters.push(masters[i]);
                }
            }
        }

        console.log('filtratedMasters = ', filtratedMasters)

        filtratedMasters = filtratedMasters.map((master) => (
        <div className="masterBlock" key={master.id}>
            <div className="masterName">{master.name}</div>
            <div className="masterRating" > Рейтинг: {master.rating}</div >
            <button className="masterButton">Заказать</button>
        </div>
        ))

        return (
            <div>
                <div>Masters</div>
                <div className="masterList">
                    {filtratedMasters}
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        masters: state.masters,
        filters: state.filters
    }
})(MastersList)