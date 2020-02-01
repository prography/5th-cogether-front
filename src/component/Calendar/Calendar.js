import React, { useState } from "react";
import { Calendar, Badge, Menu, Dropdown, Icon } from "antd";

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

        const menu = (
            <Menu>
                {listData.map(item => (
                    <Menu.Item>
                        <Badge status={item.type} text={item.content} />
                    </Menu.Item>
                ))}
            </Menu>
        );

        return (
            <>
                listData ?
                {
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <Badge status={"success"}></Badge>
                    </Dropdown>
                }
                : null
            </>
        );
    };

    const getMonthData = value => {};

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
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} mode={"month"} />
        </div>
    );
};

export default Calendars;
