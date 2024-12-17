"use client"
import React, { useState } from "react";
import { DatePicker, Button, Menu } from "antd";
import type { MenuProps } from "antd";
import dayjs, { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

// Define the type for date ranges
type DateRange = [Dayjs, Dayjs] | null;

const DateRangePickerCustom: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange>(null);

  // Predefined date ranges with Dayjs
  const ranges: Record<string, [Dayjs, Dayjs]> = {
    Today: [dayjs(), dayjs()],
    Yesterday: [dayjs().subtract(1, "day"), dayjs().subtract(1, "day")],
    "This Week": [dayjs().startOf("week"), dayjs().endOf("week")],
    "Last Week": [
      dayjs().subtract(1, "week").startOf("week"),
      dayjs().subtract(1, "week").endOf("week"),
    ],
    "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
    "Last Month": [
      dayjs().subtract(1, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],
    "This Year": [dayjs().startOf("year"), dayjs().endOf("year")],
    "Last Year": [
      dayjs().subtract(1, "year").startOf("year"),
      dayjs().subtract(1, "year").endOf("year"),
    ],
  };

  // Handle predefined menu selection
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedDates = ranges[e.key as keyof typeof ranges];
    setSelectedRange(selectedDates);
  };

  // Handle manual date range selection
//   const handleRangeChange = (dates: DateRange) => {
//     setSelectedRange(dates);
//   };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {/* Side Menu for Predefined Options */}
      <Menu
        style={{ width: 200 }}
        onClick={handleMenuClick}
        defaultSelectedKeys={["Today"]}
      >
        {Object.keys(ranges).map((key) => (
          <Menu.Item key={key}>{key}</Menu.Item>
        ))}
      </Menu>

      {/* Date Range Picker */}
      <div style={{ flex: 1 }}>
        <RangePicker
          value={selectedRange}
        //   onChange={handleRangeChange}
          style={{ width: "100%" }}
          allowClear
        />

        {/* Apply and Cancel Buttons */}
        <div style={{ marginTop: 16, textAlign: "right" }}>
          <Button
            onClick={() => console.log("Selected Range:", selectedRange)}
            type="primary"
            style={{ marginRight: 8 }}
          >
            Apply
          </Button>
          <Button
            onClick={() => setSelectedRange(null)}
            style={{ marginRight: 8 }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePickerCustom;
