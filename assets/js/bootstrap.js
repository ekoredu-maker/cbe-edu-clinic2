
import { bootStoreDevtools, subscribe, withFreshIndexes } from './core/store.js';
import { installStatisticsOverrides } from './domain/statistics.js';
import { installVerificationOverrides } from './domain/verification.js';

bootStoreDevtools();
installStatisticsOverrides();
installVerificationOverrides();

subscribe(({ event }) => {
  if (event.startsWith('persist:')) console.debug('[V12.5 store event]', event);
});

window.addEventListener('load', () => {
  try { withFreshIndexes(true); } catch (e) { console.error(e); }
  const badge = document.getElementById('hdr-sub');
  if (badge) {
    const text = badge.textContent || '';
    badge.textContent = text.replace(/V\d+(?:\.\d+)?[^•]*/,'V12.5 Term-Based Edition');
  }
  document.title = (document.title || '학습클리닉 통합관리').replace(/V\d+(?:\.\d+)?/,'V12.5');
});
