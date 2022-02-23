const phoneRules = {
  phone: [
    { required: true, message: "手机号不能为空", trigger: "blur" },
    {
      pattern: /^1[3|5|7|9][0-9]{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "验证码不能为空", trigger: "blur" },
    // {
    //   pattern: /^[a-zA-Z0-9]{5,10}$/,
    //   message: "密码必须是5-10位",
    //   trigger: "blur",
    // },
  ],
}
export default phoneRules