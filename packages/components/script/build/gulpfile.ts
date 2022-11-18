import { series, parallel } from 'gulp'
import { removeDist, buildStyle, buildComponent } from './index'


export default series(
    async () => removeDist(),
    parallel(
        async () => {
            buildComponent()
            setTimeout(()=>{
                buildStyle()
            },3000)
        },
       
    )
)

