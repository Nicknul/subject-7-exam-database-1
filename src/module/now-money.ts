import { nowMoney } from '../../static/query-selector';

export const nowmoney = (startMoney: any) => {
  if (nowMoney) {
    // 변수가 nowMoney이 null이 아니라면
    nowMoney.textContent = `${startMoney.AccBalance}원`;
  } else {
    // 변수 nowMoney가 null이라면
    console.error('nowMoney element is null');
  }
};
