import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import './style.css'
import CalendarDay from '../CalendarDay';

function CalendarTable({ date }) {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    const WEEK_DAYS = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."]

    let days = [];
    let day = startDate;

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            days.push(day);
            day = addDays(day, 1);
        }
        rows.push({ day, days })
        days = [];
    }

    return (
        <table className="calendar-table">
            <thead>
                <tr>
                    {WEEK_DAYS.map((day, i) => (
                        <th key={i}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{rows?.map((row, i) => (
                <CalendarDay key={i} day={row.day} date={date} days={row.days} monthStart={monthStart} />
            ))}</tbody>
        </table>
    );
}

export default CalendarTable;