import { ref } from "vue";

import { IButton } from "./interface";

export default function useButtonProps(props: IButton) {
  const buttonPropsRes = ref(props);
  let type = buttonPropsRes.value.type;
  let shape = buttonPropsRes.value.shape;
  let status = buttonPropsRes.value.status;
  let size = buttonPropsRes.value.size;
  let long = buttonPropsRes.value.long;
  let loading = buttonPropsRes.value.loading;
  let disabled = buttonPropsRes.value.disabled;
  let htmlType = buttonPropsRes.value.htmlType;
  let href = buttonPropsRes.value.href;
  return {
    type,
    htmlType,
    shape,
    status,
    size,
    long,
    loading,
    disabled,
    href,
  };
}
