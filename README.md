# lazy mode testbed

To repro:
* `yarn serve:lazy`
* Open ./src/index.html directly
* click on "Load async experience 1"

`experience-1` bundle will get built, `dependency-1` bundle will get built, `dependency-2` bundle will get built, but, the shared dependency on `lodash` will get split into a shared bundle that isn't requested until after the two dependency bundles have already loaded (and executed) which results in `main.js:61 Uncaught (in promise) Error: Cannot find module '3qBDj'`.

After refreshing, this will work because the full asset graph will now be considered and the execution of both dependency bundles will be blocked until the shared bundle also loads.
