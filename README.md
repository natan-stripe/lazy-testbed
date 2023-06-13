# lazy mode testbed

To repro:
* `yarn serve:lazy`
* Open http://localhost:1234
* click on "Load async experience 1"

`experience-1` bundle will get built, but not `text-provider`. Using `PARCEL_DUMP_GRAPHVIZ` shows the bundle graph looks correct.
