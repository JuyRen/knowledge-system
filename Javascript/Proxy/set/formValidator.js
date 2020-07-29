function initForm(form) {
  const keys = Object.keys(form);

  const processedForm = {
    _data: {},
    validators: {},
    errorMsg: {},
    validateOnChange: {},
  };

  keys.forEach((key) => {
    processedForm._data[key] = form[key].value;
    processedForm.validators[key] = form[key].validate;
    processedForm.errorMsg[key] = "";
    processedForm.validateOnChange[key] = form[key].validateOnChange;
  });

  function handleValidate(val, validate) {
    return validate(val);
  }

  processedForm.data = new Proxy(processedForm._data, {
    set(target, key, newVal, proxy) {
      Reflect.set(target, key, newVal);
      //   target[key] = newVal
      const validateOnChange = processedForm.validateOnChange[key];
      const errorMsg = handleValidate(newVal, processedForm.validators[key]);

      if (validateOnChange && !!errorMsg) {
        processedForm.errorMsg[key] = errorMsg;
        console.log(errorMsg);
      } else {
        processedForm.errorMsg[key] = "";
      }

      return true;
    },
  });

  processedForm.onsubmit = () => {
    return new Promise((resolve, reject) => {
      for (let i = 0, len = keys.length; i < len; i++) {
        const key = keys[i];
        const errorMsg = handleValidate(
          processedForm.data[key],
          processedForm.validators[key]
        );
        if (!!errorMsg) {
          processedForm.errorMsg[key] = errorMsg;
          throw new Error(errorMsg);
        }
      }

      resolve(processedForm._data);
    });
  };

  return processedForm;
}
