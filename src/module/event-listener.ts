/**
 * * 24.07.09 (Tue) 정호연
 * * addEventListener module
 * @param module 이벤트 적용할 모듈
 * @param eventType 이벤트 타입
 * @param command 이벤트가 시작되면 실행할 명령
 */
import { xhr } from './xhr';
import { nowMoney } from '../../static/query-selector';

export const eventListener = () => {
  xhr.addEventListener('load', () => {
    const startmoney = JSON.parse(xhr.responseText);
    if (nowMoney) {
      // 변수가 nowMoney이 null이 아니라면
      nowMoney.textContent = `${startmoney.AccBalance}원`;
    } else {
      // 변수 nowMoney가 null이라면
      console.error('nowMoney element is null');
    }
  });
};
