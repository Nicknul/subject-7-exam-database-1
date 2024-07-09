import { id, name } from './local-storage';
import { request } from '../../static/request-method';
import { path } from '../../static/db-path';
import { xhr } from './xhr';

/**
 * * 24.07.09 (Tue) 정호연
 * * function update-money moudule
 */
export const updateMoney = () => {
  xhr;
  console.log(id, name);
  xhr.open(request.post, path.searchuserAcc);
  xhr.send(JSON.stringify({ id: id }));
};
