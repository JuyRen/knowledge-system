export default function http(
  method: "get" | "post",
  url: string,
  params: any = null
) {
  var xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(method.toUpperCase(), url, true);

    xhr.setRequestHeader(
      "authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOm51bGwsImV4cCI6MTYxOTI1MTE5MywidXNlcklkIjoiMTU1IiwiaWF0IjoxNjE2NjU5MTkzfQ.cYOAfCWuM-SgPWc5S30Ea9VDZ90FYjwl-JopyIuyw0I"
    );

    xhr.overrideMimeType("application/javascript");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 304) {
          console.log(xhr.getAllResponseHeaders());
          resolve(xhr.responseText);
        }
      }
    };

    xhr.send(params);
  });
}
