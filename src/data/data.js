import { setItemWithKey, getItemByKey } from '../utils/localStorage.js';
import { stationNameInputElement } from '../elements/stationManager.js';
import {
  lineEndStationSelectorElement,
  lineStartStationSelectorElement,
  lineNameInputElement,
} from '../elements/lineManager.js';
import {
  sectionOrderInputElement,
  sectionStationSelectorElement,
  sectionLineNameElement,
} from '../elements/sectionManager.js';

export const data = {
  stationNameInputValue: '',
  lineNameInputValue: '',
  lineStartStationSelectorValue: '',
  lineEndStationSelectorValue: '',
  sectionLineNameValue: '',
  sectionStationSelectorValue: '',
  sectionOrderInputNumberValue: '',
};

export const saveDataToLocalStorage = () => {
  setItemWithKey(data, 'data');
};

export const loadDataToLocalStorage = () => {
  const loadedData = getItemByKey('data');
  if (loadedData) {
    data.stationNameInputValue = loadedData.stationNameInputValue;
    data.lineNameInputValue = loadedData.lineNameInputValue;
    data.upTerminatingStationNameValue =
      loadedData.upTerminatingStationNameValue;
    data.downTerminatingStationNameValue =
      loadedData.downTerminatingStationNameValue;
    data.sectionLineValue = loadedData.sectionLineValue;
    data.sectionStationSelectorValue = loadedData.sectionStationSelectorValue;
    data.sectionOrderInputNumberValue = loadedData.sectionOrderInputNumberValue;
  }
};

export const syncDataToAllElements = () => {
  stationNameInputElement.value = data.stationNameInputValue;
  lineNameInputElement.value = data.lineNameInputValue;
  lineStartStationSelectorElement.value = data.lineStartStationSelectorValue;
  lineEndStationSelectorElement.value = data.lineEndStationSelectorValue;
  sectionOrderInputElement.value = data.sectionOrderInputNumberValue;
  sectionLineNameElement.value = data.sectionLineNameValue;
  sectionStationSelectorElement.value = data.sectionStationSelectorValue;
};

export default {};
