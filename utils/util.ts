interface SuccessOptions {
  msg?: string;
  data?: any;
}

interface ErrorOptions {
  msg?: string;
  error?: any;
}

export function Success(options?: SuccessOptions) {
  const { msg = "请求成功", data = null } = options || {};
  return {
    code: 0,
    msg,
    result: data,
  };
}

export function Error(options?: ErrorOptions) {
  const { msg = "请求失败", error = null } = options || {};
  return {
    code: -1,
    msg,
    error: error?.message || error || msg,
  };
}
