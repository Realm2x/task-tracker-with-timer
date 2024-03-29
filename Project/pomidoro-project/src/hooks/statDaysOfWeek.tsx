import { IStatisticData } from "../store/statisticData/statisticData";

interface dateConversionInterface {
  statistic: IStatisticData[],
  currentWeekDay: number,
}

export const dateConversion = ({statistic, currentWeekDay}: dateConversionInterface) => {
  const orderedObjects: IStatisticData[] = [];
  
  for (let i = 1; i <= 7; i++) {
    const currentDate = new Date();
    const index = currentDate.getDay() + currentWeekDay;    // получаю индекс текущего дня недели
    currentDate.setDate(currentDate.getDate() - (index - i)); // нахожу дату понедельника этой недели
    const foundObject = statistic.find(obj => obj.currentDate === currentDate.toISOString().split('T')[0]); // ищу совпадения в массиве
    
    if (foundObject) { // если совпадение есть то добавляю объект в массив
      orderedObjects.push(foundObject);
    } else { // иначе добавляю в массив объект с текущим днем и временем работы 0
      orderedObjects.push({currentDate: currentDate.toISOString().split('T')[0], timeWorking: 0} as IStatisticData);
    }
    
  }
  
  return orderedObjects;
}