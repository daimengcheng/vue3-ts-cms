const rules = {
  name: [
    { required: true, message: "账号不能为空", trigger: "blur" },
    {
      pattern: /^[0-9]{5,7}$/,
      message: "账号最少位5位,最多位7位,且账号只能位数字",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: "密码必须是5-10位",
      trigger: "blur",
    },
  ],
}
export default rules