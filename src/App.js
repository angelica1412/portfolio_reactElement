import React, { useState } from "react";
import foto from "./foto.jpg";
import "./App.css";

function App() {
  const [isCircular, setIsCircular] = useState(false);

  const imageStyle = {
    width: "100%",
    borderRadius: isCircular ? "50%" : "0%",
  };

  const toggleCircular = () => {
    setIsCircular(!isCircular);
  };

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "div",
      { className: "gabungan1" },
      React.createElement(
        "div",
        { className: "kiriNama" },
        React.createElement("img", {
          src: foto,
          className: "fotodiri",
          style: imageStyle,
        })
      ),
      React.createElement(
        "div",
        { className: "kananNama" },
        React.createElement("h1", null, "Maria Angelica Vinesytha Chandrawan")
      )
    ),
    React.createElement(
      "div",
      { className: "gabungan2" },
      React.createElement(
        "div",
        { className: "kiriInfo" },
        React.createElement(
          "div",
          { className: "gender" },
          React.createElement("p", null, "Gender: Perempuan")
        ),
        React.createElement(
          "div",
          { className: "karir" },
          React.createElement("p", null, "Career: Belum tau apa :")
        )
      ),
      React.createElement(
        "div",
        { className: "kananInfo" },
        React.createElement(
          "div",
          { className: "angkatan" },
          React.createElement("p", null, "Angkatan : 2022")
        ),
        React.createElement(
          "div",
          { className: "major" },
          React.createElement("p", null, "Major: Informatika - UCM")
        ),
        React.createElement(
          "div",
          { className: "jalurSukses" },
          React.createElement("p", null, "Jalur Sukses : CE")
        ),
        React.createElement(
          "div",
          { className: "hobi" },
          React.createElement(
            "p",
            null,
            "Hobi: Mendengarkan lagu sambil menggila"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "gabungan3" },
      React.createElement(
        "div",
        { className: "organisasi" },
        React.createElement("h1", null, "Pengalaman Organisasi"),
        React.createElement(
          "p",
          null,
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, enim harum porro mollitia tenetur dignissimos, nobis excepturi aliquam vitae quos error totam quam laborum voluptatem delectus recusandae reprehenderit nemo voluptate."
        )
      )
    ),
    React.createElement(
      "div",
      { className: "center" },
      React.createElement(
        "button",
        { onClick: toggleCircular },
        "Ubah Ukuran Foto"
      )
    )
  );
}

export default App;
