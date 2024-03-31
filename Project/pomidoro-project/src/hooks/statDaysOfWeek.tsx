import { IStatisticData } from "../store/statisticData/statisticData";

interface dateConversionInterface {
  statistic: IStatisticData[],
  currentWeekDay: number,
}

export const dateConversion = ({statistic, currentWeekDay}: dateConversionInterface) => {
  const orderedObjects: IStatisticData[] = [];
  
  for (let i = 0; i <= 6; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - (i + currentWeekDay)); // нахожу дату понедельника этой недели
    const foundObject = statistic.find(obj => obj.currentDate === currentDate.toISOString().split('T')[0]); // ищу совпадения в массиве
    
    if (foundObject) { // если совпадение есть то добавляю объект в массив
      orderedObjects.unshift(foundObject);
    } else { // иначе добавляю в массив объект с текущим днем и временем работы 0
      orderedObjects.unshift({currentDate: currentDate.toISOString().split('T')[0], timeWorking: 0} as IStatisticData);
    }
    
  }
  console.log(orderedObjects);
  return orderedObjects;
}