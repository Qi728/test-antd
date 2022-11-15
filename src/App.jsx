import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ConfigProvider, DatePicker, LocaleProvider } from 'antd';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale-provider/zh_CN';
// import zhCN from 'antd/es/date-picker/locale/zh_CN';

import moment from 'moment';
import 'moment/locale/zh-cn';


moment.locale('zh-cn');
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function App() {
  const [count, setCount] = useState(0)

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <LocaleProvider locale={zhCN}>
      <div className="App">
        <RangePicker onChange={onChange} />
      </div>
    </LocaleProvider>
  )
}

export default App