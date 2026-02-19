const demo = async () => {
  const res = await fetch("https://api.theindianhome.in/api/product/list");
  const data = await res.json();
  console.log(data);
};

demo();
