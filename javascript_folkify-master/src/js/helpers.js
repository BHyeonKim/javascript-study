import { async } from 'regenerator-runtime';
import { TIMEOUT_SECOND } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
/* 
export const getJson = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECOND)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};
 */
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          header: {
            'Content-Type': 'appication/json',
          },
          body: JSON.stringify(uploadDate),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECOND)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};
/* 
export const sendJson = async function (url, uploadDate) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      header: {
        'Content-Type': 'appication/json',
      },
      body: JSON.stringify(uploadDate),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECOND)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};
 */
