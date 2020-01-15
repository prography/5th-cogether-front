import React from "react";
import { Calendar, Badge } from "antd";

const Calendars = () => {
    const getListData = value => {
        let listData;
        // switch (value.date()) {
        //     case 15:
        //         listData = [{ type: "success", content: "초보자를 위한 AWS 뿌시기 " }];
        //         break;
        //     case 20:
        //         listData = [{ type: "warning", content: "네이버 클라우드 플랫폼" }];
        //         break;
        //     case 11:
        //         listData = [{ type: "error", content: "CircleCI Korea User Group" }];
        //         break;
        //     default:
        // }
        listData = [{ type: "success", content: "초보자를 위한 AWS 뿌시기 " }];
        return listData || [];
    };

    const dateCellRender = value => {
        const listData = getListData(value);
        return (
            <ul className="events">
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
