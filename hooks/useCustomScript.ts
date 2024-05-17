// hooks/useCustomScript.ts
import { useEffect } from 'react';

const useCustomScript = () => {
  useEffect(() => {
    const targetElement = document.documentElement || document.body;
    const config: MutationObserverInit = { childList: true, subtree: true };

    const callback = function(mutationsList: MutationRecord[], observer: MutationObserver) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          let ckyBar = document.querySelector('.cky-consent-bar');
          if (ckyBar) {
            let newHtml = `
              <div class="ph_cookie_logo">
                <a href="/" target="_blank" rel="nofollow">
                  <img src="/public/images/arrow-down-s-line.svg" alt="pamajans_logo">
                  <span>tarafından desteklenir.</span>
                </a>
              </div>
            `;

            ckyBar.insertAdjacentHTML('afterend', newHtml);
          }

          let ckyPreferenceCenter = document.querySelector('.cky-preference-center');
          if (ckyPreferenceCenter) {
            let poweredByDiv = ckyPreferenceCenter.querySelector('[data-cky-tag="detail-powered-by"]');
            if (poweredByDiv) {
              poweredByDiv.innerHTML = `
                <div style="padding: 8px 24px; font-size: 12px; font-weight: 400; line-height: 20px; text-align: right; border-radius: 0 0 6px 6px; direction: rtl; display: flex; justify-content: flex-end; align-items: center; color: #293C5B; background-color: #EDEDED;">
                  Tarafından desteklenir
                  <a target="_blank" rel="noopener" href="/" style="margin-right: 5px; line-height: 0">
                    <img src="/assets/images/pushouse-logo.svg" alt="pushouse_logo" style="width: 90px; height: 15px; margin: 0">
                  </a>
                </div>
              `;
              observer.disconnect();
              break;
            }
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetElement, config);

    // Cleanup function
    return () => observer.disconnect();
  }, []);
};

export default useCustomScript;