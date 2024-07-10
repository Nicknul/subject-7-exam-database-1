import { id } from './local-storage';
import { eventListener } from './event-listener';
import { request } from '../../static/request-method';
import { path } from '../../static/db-path';
import { xhr } from './xhr';
import { startMoney } from './start-money';
import { nowMoney } from '../../static/query-selector';

/**
 * * 24.07.09 (Tue) 정호연
 * * function update-money moudule
 */
export const updateMoney = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/searchuserAcc');
  xhr.send(JSON.stringify({ id: id }));
  xhr.addEventListener('load', () => {
    const startmoney = JSON.parse(xhr.responseText);
    nowMoney.textContent = `${startmoney.AccBalance}원`;
  });
};
