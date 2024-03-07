$.get("https://students-api.2.us-1.fl0.io/movies", (e) => {
  const t = document.querySelector(".container-peliculas");
  t.innerHTML = "";
  const n = e.map((e) =>
    (function ({
      title: e,
      year: t,
      director: n,
      duration: i,
      genre: a,
      rate: c,
      poster: d,
    }) {
      const l = document.createElement("h3"),
        o = document.createElement("p"),
        r = document.createElement("p"),
        s = document.createElement("p"),
        p = document.createElement("p"),
        m = document.createElement("p"),
        u = document.createElement("img"),
        L = a.join(" ");
      console.log(L),
        (l.innerHTML = e),
        (o.innerHTML = `Año: ${t}`),
        (r.innerHTML = n),
        (s.innerHTML = `Duración: ${i}`),
        (p.innerHTML = a),
        (m.innerHTML = c),
        u.setAttribute("src", d);
      const h = document.createElement("div");
      h.appendChild(l),
        h.appendChild(u),
        h.appendChild(r),
        h.appendChild(p),
        h.appendChild(m),
        h.appendChild(o),
        h.appendChild(s),
        h.classList.add("card-peli"),
        u.classList.add("img-peli"),
        l.classList.add("titulo-peli"),
        m.classList.add("calificacion-peli"),
        document.querySelectorAll(".calificacion-peli");
      const C = parseFloat(m.textContent);
      return (
        C > 8
          ? m.classList.add("verde")
          : C > 6
          ? m.classList.add("amarillo")
          : m.classList.add("rojo"),
        h
      );
    })(e)
  );
  n.forEach((e) => {
    t.appendChild(e);
  });
});
