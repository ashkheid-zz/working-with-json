async function read(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((resContent) => console.log(resContent))
    .catch((err) => console.error(err));
}

export { read };
