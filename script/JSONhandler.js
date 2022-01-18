async function read(url) {
  return await fetch(url).then((res) => res.json());
}

async function print(url) {
  await read(url)
    .then((resContent) => console.log(resContent))
    .catch((err) => console.error(err));
}

export { print, read };
