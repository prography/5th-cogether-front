import React, { useState } from "react";
import { Calendar, Badge, Menu, Dropdown, Icon } from "antd";
import { Link } from "react-router-dom";

const Calendars = favors => {
    const getListData = value => {
        let listData;
        let start = favors.favors.filter(
            favor => new Date(favor.start_at).getDate() === value.date() && new Date(favor.start_at).getMonth() === value.month()
        );
        if (start) {
            listData = start.map(value => ({
                type: "success",
                content: value.title,
                category: value.category.name === "circle" ? "club" : value.category.name,
                id: value.id
            }));
        }

        return listData || [];
    };

    const dateCellRender = value => {
        const listData = getListData(value);

        const menu = (
            <Menu>
                {listData.map(item => (
                    <Menu.Item>
                        <Link to={`/${item.category}/detail/${item.id}`}>
                            <Badge status={item.type} text={item.content} />
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        );

        return (
            <>
                {listData.length ? (
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <a className="ant-dropdown-link" href="#">
                            일정이 있어요!
                        </a>
                    </Dropdown>
                ) : null}
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
