    
    // https://developers.google.com/web/updates/2017/09/abortable-fetch
    // Create an instance.
    const controller = new AbortController()
    const signal = controller.signal

    /*
    // Register a listenr.
    signal.addEventListener("abort", () => {
        console.log("aborted!")
    })
    */


    function beginFetching() {
        console.log('Now fetching');
        var urlToFetch = "https://slowwly.robertomurray.co.uk/delay/3000/url/https://code.jquery.com/jquery-3.2.1.min.js";

        fetch(urlToFetch, {
                method: 'get',
                signal: signal,
            })
            .then(function(response) {
                console.log(`Fetch complete. (Not aborted)`);
            }).catch(function(err) {
                console.error(` Err: ${err}`);
            });
    }


    function abortFetching() {
        console.log('Now aborting');
        // Abort.
        controller.abort()
    }

    const fetchUserById = (userId) => (
        (actions) => (
          Observable.ajax(`/api/users/${userId}`)
            .map(
              (payload) => ({ type: 'FETCH_USER_FULFILLED', payload })
            )
            .takeUntil(actions.ofType('FETCH_USER_ABORT'))
            .startWith({ type: 'FETCH_USER_PENDING' })
        )
      );