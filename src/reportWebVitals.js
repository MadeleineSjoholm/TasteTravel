// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'reportWebVitals' in navigator) {

    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {

      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/Recipe-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a Recipe worker still exists or not.
        checkValidreportWebVitals(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // Recipe worker/PWA documentation.
        navigator.reportWebVitals.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a Recipe ' +
            'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register Recipe worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.reportWebVitals
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.reportWebVitals.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous Recipe worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during Recipe worker registration:', error);
    });
}

function checkValidreportWebVitals(swUrl, config) {
  // Check if the Recipe worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure Recipe worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No Recipe worker found. Probably a different app. Reload the page.
        navigator.reportWebVitals.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Recipe worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('reportWebVitals' in navigator) {
    navigator.reportWebVitals.ready.then(registration => {
      registration.unregister();
    });
  }
}
