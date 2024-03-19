import { IStatisticData } from "../store/statisticData/statisticData";

interface dateConversionInterface {
  statistic: IStatisticData[],
  currentWeekDay: number,
}

export const dateConversion = ({statistic, currentWeekDay}: dateConversionInterface) => {
  const orderedObjects: IStatisticData[] = [];
  
  for (let i = 1; i <= 7; i++) {
    const currentDate = new Date();
    const index = currentDate.getDay() + currentWeekDay;
    currentDate.setDate(currentDate.getDate() - (index - i));
    const foundObject = statistic.find(obj => obj.currentDate === currentDate.toISOString().split('T')[0]);
    
    if (foundObject) {
      orderedObjects.push(foundObject);
    } else {
      orderedObjects.push({currentDate: currentDate.toISOString().split('T')[0], timeWorking: 0} as IStatisticData);
    }
    
  }
  
  return orderedObjects;
}