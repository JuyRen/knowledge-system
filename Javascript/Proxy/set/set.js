{
  const form = {
    userName: "",
  };

  const formProxy = new Proxy(form, {
    set(target, propertyKey, newVal) {
      Reflect.set(target, propertyKey, newVal);
      if (newVal === "rjy") {
        return false;
      }
      return true;
    },
  });
}
