import React from 'react'
import { listData } from '../../lib/dummydata'
import './listpage.scss'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/map';

const Listpage = () => {
    const data = listData;
    return (
        <div className='listpage'>
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data} />
            </div>
        </div>
    )
}

export default Listpage

