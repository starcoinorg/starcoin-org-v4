import useSWR from 'swr';
import { isNumber } from 'radash';

const fetcher = (url: string, init?: RequestInit) => fetch(url, {
  headers: {
    'Content-Type': 'application/json'
  },
  ...init
}).then(res => res.json())

function formatNumber(ns: string) {
  ns += '';
  const x = ns.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';

  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
}

export function useChainInfo() {
  const req_url = 'https://main-seed.starcoin.org'
  const req_data = { id: 101, jsonrpc: '2.0', method: 'chain.info', params: [] }

  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate
  } = useSWR([req_url, req_data], ([url]) => fetcher(url, {
    method: 'POST',
    body: JSON.stringify(req_data)
  }), {
    refreshInterval: 10000
  });

  let total_trans
  if (data?.result?.block_info?.txn_accumulator_info?.num_leaves) {
    total_trans = formatNumber(data?.result?.block_info?.txn_accumulator_info?.num_leaves)
  }

  return {
    total_trans,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export function useBlockTime() {
  const req_url = 'https://main-seed.starcoin.org'
  const req_data = { id: 44, jsonrpc: '2.0', method: 'contract.get_resource', params: ['0x1', '0x1::Epoch::Epoch'] }

  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate
  } = useSWR([req_url, req_data], ([url]) => fetcher(url, {
    method: 'POST',
    body: JSON.stringify(req_data)
  }));

  let block_time
  const block_time_value = data?.result?.value?.[4];
  if (block_time_value) {
    const [bttKey, bttValue] = block_time_value;
    if (bttKey === 'block_time_target') {
      block_time = ((bttValue.U64 ?? 0) / 1000).toFixed(0);
    }
  }

  return {
    block_time,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export function useHashRate() {
  const req_url = 'https://api.stcscan.io/v2/block/main/start_height/'

  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate
  } = useSWR([req_url], ([url]) => fetcher(url, {
    method: 'GET',
  }), {
    refreshInterval: 10000
  });

  let hash_rate
  const blocks_hit = data?.contents || [];
  if (blocks_hit.length) {
    let total_diff = 0;
    for (let i = 0; i < blocks_hit.length; i++) {
      total_diff += blocks_hit[i].header.difficulty_number
    }
    const block_diff = Number(total_diff / blocks_hit.length)
    const end_time = blocks_hit[0].header.timestamp
    const start_time = blocks_hit[blocks_hit.length - 1].header.timestamp
    const avg_block_time = Number((end_time - start_time) / blocks_hit.length)
    hash_rate = formatNumber((block_diff / avg_block_time * 1000).toFixed(0))
  }

  return {
    hash_rate,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export function useAvgGas() {
  const stc_url = 'https://price-api.starcoin.org/main/v1/toUsdPriceFeeds?t=STC'
  const { data: stc_res } = useSWR([stc_url], ([url]) => fetcher(url, {
    method: 'GET',
  }), {
    refreshInterval: 60000
  })

  const stc2usd = Array.isArray(stc_res) && stc_res[0] || {}
  const { latestPrice: price, decimals } = stc2usd
  let stc_rate
  if (isNumber(price) && isNumber(decimals)) {
    stc_rate = Number((price / Number('1'.padEnd(decimals + 1, '0'))).toFixed(3));
  }

  const trans_url = isFinite(Number(stc_rate)) ? 'https://api.stcscan.io/v2/transaction/main/page/1' : ''

  const { data: trans_res, error, isLoading, isValidating, mutate } = useSWR([trans_url, stc_rate], ([url]) => fetcher(url, {
    method: 'GET',
  }))


  let avg_gas

  const contents = trans_res?.contents || [];

  if (contents.length && stc_rate) {
    let all_gas = 0;
    for (let i = 0; i < contents.length; i++) {
      all_gas += Number(contents[i].gas_used ?? 0);
    }

    const STCDECIMALS = 1000000000;
    const gas_use_avg = all_gas / contents.length;
    const gas_price = Number((gas_use_avg / STCDECIMALS).toFixed(6));

    avg_gas = (stc_rate * gas_price).toFixed(6);
    avg_gas = `$${avg_gas.replace('.', ',')}`;
  }

  return {
    avg_gas,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}