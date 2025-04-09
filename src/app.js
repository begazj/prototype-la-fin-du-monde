<link rel="manifest" href="src/manifest.json" />;
fetch("./manifest.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
