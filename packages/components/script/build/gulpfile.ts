import { series, parallel } from "gulp";
import { removeDist, buildComponent, buildStyle } from "./index";

export default series(
  async () => removeDist(),
  parallel(async () => {
    await buildComponent();
    setTimeout(()=>{
        buildStyle();
    },1000)
  })
);
