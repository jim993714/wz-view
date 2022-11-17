declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('wz-view-ui').Button
    }
}
export { }