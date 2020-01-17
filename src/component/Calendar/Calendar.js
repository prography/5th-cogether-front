import React, { useState } from "react";
import { Calendar, Badge } from "antd";

const Calendars = favors => {
    const getListData = value => {
        let listData;
        let start = favors.favors.filter(
            favor => new Date(favor.start_at).getDate() === value.date() && new Date(favor.start_at).getMonth() === value.month()
        );
        if (start) {
            listData = start.map(value => ({ type: "success", content: value.title }));
        }

        return listData || [];
    };

    const dateCellRender = value => {
        const listData = getListData(value);

        return (
            <ul className="events" style={{ listStyle: "none" }}>
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const getMonthData = value => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = value => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    return (
        <div>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
    );
};

export default Calendars;
