import { nowMoney } from '../../static/query-selector';

export const startMoney = (xhr: XMLHttpRequest): void => {
  console.log('startMoney check');
  try {
    const startmoney: { AccBalance: number } = JSON.parse(xhr.responseText);
    if (nowMoney) {
      // nowMoney가 null이 아닌 경우, 즉 HTMLElement인 경우
      nowMoney.textContent = `${startmoney.AccBalance}원`;
    } else {
      // nowMoney가 null인 경우
      console.error('nowMoney element is null');
    }
  } catch (error) {
    console.error('Failed to parse response or update nowMoney', error);
  }
};
