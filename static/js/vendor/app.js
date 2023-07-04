import data from "./groupby_district_ward_street.json";
let data = [];
const results = document.querySelector("#results");

function add_screen(input_data) {
  data.push(input_data);
}

function display() {
  for (var i = 0; i < data.length; i++) {
    const elem = document.createElement("p");
    elem.innerText = data[i];
    results.appendChild(elem);
  }
}

function get_ward_list(district) {
  return data[district].keys();
}

function get_street_list(district, ward) {
  return data[district][ward].keys();
}

function fill_value() {
  let district_element = document.getElementById("ward");

  let district = district_element.innerText;

  if (district) {
    let ward_element = document.getElementById("ward");
    let street_element = document.getElementById("street");

    let ward_list = get_ward_list(district);
    let modified_element_list = [];
    for (let i = 0; i < ward_list.length; i++) {
      let ward = ward_list[i];
      let option = document.createElement("option");
      option.setAttribute("value", ward);
      option.setAttribute("id", `ward-${i}`);
      if (i == 0) {
        option.setAttribute("selected", "selected");
      }
      option.onclick = function () {
        let selected_option = document.getElementById(`ward-${i}`);
        let selected_ward = selected_option.innerText;

        let street_list = get_street_list(district, district, selected_ward);
        let tmp_element_list = [];
        for (let i = 0; i < street_list.length; i++) {
          let street = street_list[i];
          let option = document.createElement("option");
          option.setAttribute("value", street);
          if (i == 0) {
            option.setAttribute("selected", "selected");
          }
          option.innerText = `${{ street }}`;
          tmp_element_list.append(option);
        }

        street_element.replaceChildren(...tmp_element_list);
      };
      option.innerText = `${{ ward }}`;
      modified_element_list.append(option);
    }

    ward_element.replaceChildren(...modified_element_list);

    let street_list = get_street_list(district, ward_list[0]);
    modified_element_list = [];
    for (let i = 0; i < street_list.length; i++) {
      let street = street_list[i];
      let option = document.createElement("option");
      option.setAttribute("value", street);
      if (i == 0) {
        option.setAttribute("selected", "selected");
      }
      option.innerText = `${{ street }}`;
      modified_element_list.append(option);
    }

    street_element.replaceChildren(...modified_element_list);
  }

  district_element.onclick = function () {
    let district = district_element.innerText;

    if (district) {
      let ward_element = document.getElementById("ward");
      let street_element = document.getElementById("street");

      let ward_list = get_ward_list(district);
      let modified_element_list = [];
      for (let i = 0; i < ward_list.length; i++) {
        let ward = ward_list[i];
        let option = document.createElement("option");
        option.setAttribute("value", ward);
        option.setAttribute("id", `ward-${i}`);
        if (i == 0) {
          option.setAttribute("selected", "selected");
        }
        option.onclick = function () {
          let selected_option = document.getElementById(`ward-${i}`);
          let selected_ward = selected_option.innerText;

          let street_list = get_street_list(district, selected_ward);
          let tmp_element_list = [];
          for (let i = 0; i < street_list.length; i++) {
            let street = street_list[i];
            let option = document.createElement("option");
            option.setAttribute("value", street);
            if (i == 0) {
              option.setAttribute("selected", "selected");
            }
            option.innerText = `${{ street }}`;
            tmp_element_list.append(option);
          }

          street_element.replaceChildren(...tmp_element_list);
        };
        option.innerText = `${{ ward }}`;
        modified_element_list.append(option);
      }

      ward_element.replaceChildren(...modified_element_list);

      let street_list = get_street_list(district, ward_list[0]);
      modified_element_list = [];
      for (let i = 0; i < street_list.length; i++) {
        let street = street_list[i];
        let option = document.createElement("option");
        option.setAttribute("value", street);
        if (i == 0) {
          option.setAttribute("selected", "selected");
        }
        option.innerText = `${{ street }}`;
        modified_element_list.append(option);
      }

      street_element.replaceChildren(...modified_element_list);
    }
  };
}

function clear_results() {
  results.innerHTML = "";
}

function clear_everything() {
  data = [];
  clear_screen();
  display();
}

function clear_screen() {
  results.innerHTML = "";
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function submit_request() {
  clear_screen();
  add_screen("Making request to server");

  const form_data = extract_form_data();
  add_screen(JSON.stringify(form_data));

  postData("/predict", form_data).then((res) => {
    add_screen(JSON.stringify(res));
    display();
  });

  display();
}

function predictPrice() {
  let form_data = extract_form_data();
  dele;
  postData("http://127.0.0.1:8000//predict-house-with-type-of-alley", {
    data: [form_data],
  })
    .then((data) => data[0]["output"])
    .then((prediction) => {
      const resultsDataElement = buildResults(prediction);
      results.innerHTML = "";
      results.appendChild(resultsDataElement);
    });
}

const form_ids = [
  "country",
  "city",
  "landSize",
  "numberOfBedRooms",
  "numberOfBathrooms",
  "numberOfFloors",
  "frontWidth",
  "latitude",
  "longitude",
];

function isCharNumber(c) {
  return c >= "0" && c <= "9";
}

const categorical_features = ["country", "city"];

const integer_features = [
  "landSize",
  "numberOfBedRooms",
  "numberOfBathrooms",
  "numberOfFloors",
  "frontWidth",
  "latitude",
  "longitude",
];

function isNumeric(num) {
  return !isNaN(num);
}

function extract_form_data() {
  let form_data = {};
  for (let i = 0; i < form_ids.length; i++) {
    if (!isCharNumber(form_ids[i].charAt(0))) {
      form_input = document.querySelector("#" + form_ids[i]);
    }
    if (form_input == null) {
      if (categorical_features.includes(form_ids[i])) {
        form_data[form_ids[i]] = ["NA"];
      } else {
        form_data[form_ids[i]] = [0];
      }
    } else {
      let form_value = form_input.value;
      console.log(form_ids[i], form_value);
      if (isNumeric(form_value)) {
        form_value = parseFloat(form_value);
      }

      form_data[form_ids[i]] = form_value;
    }
  }
  return form_data;
}

const USDFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function buildResults(price) {
  // Create result elements
  const priceElement = document.createElement("div");
  const containerElement = document.createElement("div");
  const yourPriceElement = document.createElement("div");
  const alley1PriceElement = document.createElement("div");
  const alley2PriceElement = document.createElement("div");
  const alley3PriceElement = document.createElement("div");
  const streetHousePriceElement = document.createElement("div");

  // Add relevant classes
  yourPriceElement.classList.add("type-h3");
  alley1PriceElement.classList.add("type-sh6");
  alley2PriceElement.classList.add("type-sh6");
  alley3PriceElement.classList.add("type-sh6");
  streetHousePriceElement.classList.add("type-sh6");

  // containerElement.classList.add('container-fluid');

  // Set inner text for the elements
  yourPriceElement.innerText = "Ước lượng giá:";
  alley1PriceElement.innerText = `${
    price["alleyHousePrice"]["1"]["metadata"]
  }: ${parseInt(price["alleyHousePrice"]["1"]["mean"]) * 1.5} tr/m2`;
  alley2PriceElement.innerText = `${
    price["alleyHousePrice"]["2"]["metadata"]
  }: ${parseInt(price["alleyHousePrice"]["2"]["mean"]) * 1.5} tr/m2`;
  alley3PriceElement.innerText = `${
    price["alleyHousePrice"]["3"]["metadata"]
  }: ${parseInt(price["alleyHousePrice"]["3"]["mean"]) * 1.5} tr/m2`;
  streetHousePriceElement.innerText = `${"Nhà mặt phố"}: ${
    parseInt(price["streetHousePrice"]["mean"]) * 1.5
  } tr/m2`;

  // Add elements to container
  containerElement.appendChild(yourPriceElement);
  containerElement.appendChild(alley1PriceElement);
  containerElement.appendChild(alley2PriceElement);
  containerElement.appendChild(alley3PriceElement);
  containerElement.appendChild(streetHousePriceElement);

  return containerElement;
}

if ($(".side-navigation").length) {
  var closeBtn = $(".close");
  var sideAffix = $(".side-navigation-affix");
  var sideBtn = $("a.navigation-btn");
  var sideNav = $(".side-navigation-large");
  var sideSection = $(".navigation-section");
  var sideTopSpacing = 48;

  if ($(".side-navigation-small").length) {
    sideNav = $(".side-navigation-small");
  }

  var topOffset = sideSection.offset().top - sideTopSpacing;
  var bottomOffset =
    $("body").height() - sideSection.offset().top - sideSection.height();

  sideAffix.affix({
    offset: {
      top: topOffset,
      bottom: bottomOffset,
    },
  });

  sideAffix.width(sideNav.parent().width());

  sideBtn.on("click", function () {
    sideNav.css("display", "block");
    sideSection.css("display", "none");
    sideBtn.css("display", "none");
    $("body").css("overflow", "hidden");
  });
  closeBtn.on("click", function () {
    sideNav.css("display", "");
    sideSection.css("display", "");
    sideBtn.css("display", "inline-block");
    $("body").css("overflow", "");
  });
}

$(function () {
  $('[data-scroll="smooth"] a[href*=#]:not([href=#])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1500
        );

        return false; // prevent default href
      }
    }
  });
});
