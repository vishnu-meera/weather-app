import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import React from 'react'
import _ from 'lodash';

const average = data=>{
    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
    return(
        <div>
            <Sparklines data={props.data} width={180} height={120}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average for next 5 days : {average(props.data)}{props.unit}</div>
        </div>
    );
}