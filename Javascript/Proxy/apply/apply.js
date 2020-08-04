// 拦截函数的调用
function foo() {
	console.log("正常的调用");
}

const proxyFn = new Proxy(foo, {
	apply() {
		console.log("proxy拦截的调用");
	},
});

proxyFn();
