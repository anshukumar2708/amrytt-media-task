import { DatePicker } from 'antd';
import DateRangePickerCustom from './component/date-range-picker';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-28px font-medium text-[#0F1016]">Welcome Back Jenil</h1>
          <p className="text-lg font-normal text-[#777980]">Lorem ipsum dolor si amet welcome back jenil</p>
        </div>
        <DatePicker />
        <DateRangePickerCustom/>
      </div>
    </>
  );
}
