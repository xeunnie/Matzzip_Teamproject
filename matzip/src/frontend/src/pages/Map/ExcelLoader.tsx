import React, { useState } from 'react'
import * as XLSX from 'xlsx';

interface ExcelLoader{
  onJSONData: (data:any) => void; 
}

export default function ExcelLoader({onJSONData}:ExcelLoader) {
  const [count, setCount] = useState(0);

  const excelLoad = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, {type: 'binary'});
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

        onJSONData(jsonData);
      };

      reader.readAsBinaryString(file);
    }
  }
  return (
    <div>
      <input 
        type="file"  
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={excelLoad}
      />
    </div>
  )
}
