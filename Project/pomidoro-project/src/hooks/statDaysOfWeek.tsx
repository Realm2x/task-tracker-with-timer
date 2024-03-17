import { IStatisticData } from "../store/statisticData/statisticData";

export const dateConversion = (data: IStatisticData[]) => {
  const orderedObjects: IStatisticData[] = [];
  
  for (let i = 1; i <= 7; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - (7 - i));
    
    const foundObject = data.find(obj => obj.currentDate === currentDate.toISOString().split('T')[0]);
    
    if (foundObject) {
      orderedObjects.push(foundObject);
    } else {
      orderedObjects.push({currentDate: currentDate.toISOString().split('T')[0], timeWorking: 0} as IStatisticData);
    }
  }

  return orderedObjects;
}