import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './Cardpie.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const dataMock = [
    { title: 'One', value: 45, color: 'blue' },
    { title: 'Two', value: 25, color: 'green' },
    { title: 'Three', value: 30, color: 'red' },
];

const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
};

const Cardpie = () => {
    return (
        <div className="pie">
            <div className="texty">
                <h5>Open Positions By Department</h5>
                <MoreHorizIcon />
            </div>

            <div className="piechart">
                <PieChart
                    data={dataMock}
                    radius={PieChart.defaultProps.radius - 7}
                    segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={{
                        ...defaultLabelStyle,
                    }}
                />
            </div>

        </div>
    )
}

export default Cardpie
