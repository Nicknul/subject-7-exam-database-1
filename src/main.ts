import { historyContainer, purechaseHistory } from '../static/query-selector';
import { updateMoney } from './module/update-money';

/**
 * * 24.07.09 (Tue) 정호연
 * * 최종 history
 */
document.addEventListener('DOMContentLoaded', () => {
  historyContainer;
  purechaseHistory;

  updateMoney();
});
