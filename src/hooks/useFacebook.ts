import React from 'react';

let promise: Promise<any>;

export function useFacebook(options, cb) {
  if (typeof options === 'function') {
    cb = options;
  }

  React.useEffect(() => {
    if (promise) {
      promise.then(cb);
    } else {
      promise = new Promise(resolve => {
        // https://developers.facebook.com/docs/javascript/reference/FB.init
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: `${process.env.GATSBY_FACEBOOK_APP_ID}`,
            autoLogAppEvents: true,
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v5.0',
            ...options
          });
          resolve(window.FB);
        };

        const script = document.createElement('script');
        const isDebug = window.localStorage.getItem('fb:debug') === 'true';
        script.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat${isDebug ? '/debug' : ''}.js`; // prettier-ignore
        document.head.appendChild(script);
      });
      promise.then(cb);
    }
  }, []);
}
